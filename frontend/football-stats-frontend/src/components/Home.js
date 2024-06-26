import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch leagues and seasons from the backend
    const fetchLeaguesAndSeasons = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/get_leagues_and_seasons/');
        setLeagues(response.data.leagues);
        setSeasons(response.data.seasons);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaguesAndSeasons();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLeague && selectedSeason) {
      navigate(`/table/${selectedLeague}/season/${selectedSeason}`);
    } else {
      alert("Please select both league and season.");
    }
  };

  // Filter leagues based on search term
  const filteredLeagues = leagues.filter(league =>
    league.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    league.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Select League and Season</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="league-search" style={styles.label}>Search League or Country</label>
          <input
            type="text"
            id="league-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.input}
            placeholder="Search leagues or countries..."
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="league" style={styles.label}>League</label>
          <select
            id="league"
            value={selectedLeague}
            onChange={(e) => setSelectedLeague(e.target.value)}
            style={styles.select}
          >
            <option value="">Select League</option>
            {filteredLeagues.map((league) => (
              <option key={league.id} value={league.id}>
                {league.name} ({league.country})
              </option>
            ))}
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="season" style={styles.label}>Season</label>
          <select
            id="season"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            style={styles.select}
          >
            <option value="">Select Season</option>
            {seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
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
    backgroundImage: 'url(/background.jpg)', // Update this line
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  },
  header: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Make form background semi-transparent
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '20px',
    width: '100%',
  },
  label: {
    display: 'block',
    fontSize: '18px',
    marginBottom: '8px',
    color: '#495057',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Home;
