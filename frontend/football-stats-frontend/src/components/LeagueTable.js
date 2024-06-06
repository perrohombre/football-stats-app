import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const LeagueTable = () => {
    const { leagueId, season } = useParams();
    const navigate = useNavigate();
    const [table, setTable] = useState([]);
    const [scorers, setScorers] = useState([]);
    const [assistants, setAssistants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTable = async () => {
            setLoading(true);
            const response = await fetch(`/api/league/${leagueId}/season/${season}/`);
            const data = await response.json();
            setTable(data.response[0].league.standings[0]);
        };

        const fetchScorers = async () => {
            const response = await fetch(`/api/league/${leagueId}/season/${season}/topscorers/`);
            const data = await response.json();
            console.log('Scorers data:', data);
            setScorers(data.response);
        };

        const fetchAssistants = async () => {
            const response = await fetch(`/api/league/${leagueId}/season/${season}/topassistants/`);
            const data = await response.json();
            console.log('Assistants data:', data); 
            setAssistants(data.response);
        };

        fetchTable();
        fetchScorers();
        fetchAssistants();
        setLoading(false);
    }, [leagueId, season]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ position: 'relative' }}>
            <button
                onClick={() => navigate(-1)}
                style={{
                    position: 'absolute',
                    top: '5px',
                    right: '10px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                }}
            >
                Go Back
            </button>
            <h2>League Table</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Position</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Team</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Points</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Played</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Won</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Drawn</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Lost</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Goals For</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Goals Against</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Goal Difference</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((team, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.rank}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                <img src={team.team.logo} alt={team.team.name} style={{ width: '30px', height: '30px', marginRight: '8px', backgroundColor: 'white' }} onError={(e) => {e.target.src = ''; e.target.style.backgroundColor = 'white'; e.target.style.border = '1px solid #ddd';}} />
                                {team.team.name}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.points}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.all.played}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.all.win}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.all.draw}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.all.lose}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.all.goals.for}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.all.goals.against}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{team.goalsDiff}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Top Scorers</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Position</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Player</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Team</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Goals</th>
                    </tr>
                </thead>
                <tbody>
                    {scorers.map((scorer, index) => (
                        <tr key={scorer.player.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                <img src={scorer.player.photo} alt={scorer.player.name} style={{ width: '30px', height: '30px', marginRight: '8px', backgroundColor: 'white' }} onError={(e) => {e.target.src = ''; e.target.style.backgroundColor = 'white'; e.target.style.border = '1px solid #ddd';}} />
                                {scorer.player.name}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                <img src={scorer.statistics[0].team.logo} alt={scorer.statistics[0].team.name} style={{ width: '30px', height: '30px', marginRight: '8px', backgroundColor: 'white' }} onError={(e) => {e.target.src = ''; e.target.style.backgroundColor = 'white'; e.target.style.border = '1px solid #ddd';}} />
                                {scorer.statistics[0].team.name}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{scorer.statistics[0].goals.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Top Assistants</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Position</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Player</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Team</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    {assistants.map((assistant, index) => (
                        <tr key={assistant.player.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                <img src={assistant.player.photo} alt={assistant.player.name} style={{ width: '30px', height: '30px', marginRight: '8px', backgroundColor: 'white' }} onError={(e) => {e.target.src = ''; e.target.style.backgroundColor = 'white'; e.target.style.border = '1px solid #ddd';}} />
                                {assistant.player.name}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                <img src={assistant.statistics[0].team.logo} alt={assistant.statistics[0].team.name} style={{ width: '30px', height: '30px', marginRight: '8px', backgroundColor: 'white' }} onError={(e) => {e.target.src = ''; e.target.style.backgroundColor = 'white'; e.target.style.border = '1px solid #ddd';}} />
                                {assistant.statistics[0].team.name}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{assistant.statistics[0].goals.assists}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeagueTable;
