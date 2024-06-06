import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch leagues and seasons from the backend
    const fetchLeaguesAndSeasons = async () => {
      const response = await fetch('/api/get_leagues_and_seasons/');
      const data = await response.json();
      setLeagues(data.leagues);
      setSeasons(data.seasons);
    };

    fetchLeaguesAndSeasons();
  }, []);

  const handleSubmit = () => {
    if (selectedLeague && selectedSeason) {
      navigate(`/table/${selectedLeague}/season/${selectedSeason}`);
    } else {
      alert("Please select both league and season.");
    }
  };

  return (
    <div style={styles.container}>
        <h1 style={styles.header}>Select League and Season</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
                <label htmlFor="league" style={styles.label}></label>
                <select id="league" value={selectedLeague} onChange={(e) => setSelectedLeague(e.target.value)} style={styles.select}>
                    <option value="">Select League</option>
                    {leagues.map((league) => (
                        <option key={league.id} value={league.id}>{league.name} ({league.country})</option>
                    ))}
                </select>
            </div>
            <div style={styles.formGroup}>
                <label htmlFor="season" style={styles.label}></label>
                <select id="season" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)} style={styles.select}>
                    <option value="">Select Season</option>
                    {seasons.map((season) => (
                        <option key={season} value={season}>{season}</option>
                    ))}
                </select>
            </div>
            <button type="submit" style={styles.button}>Submit</button>
        </form>
    </div>
);
};

const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
  },
  header: {
      fontSize: '36px',
      marginBottom: '20px',
      color: '#343a40'
  },
  form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '500px',
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  formGroup: {
      marginBottom: '20px',
      width: '100%'
  },
  label: {
      display: 'block',
      fontSize: '18px',
      marginBottom: '8px',
      color: '#495057'
  },
  select: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ced4da'
  },
  button: {
      padding: '10px 20px',
      fontSize: '18px',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
  }
};

export default Home;
