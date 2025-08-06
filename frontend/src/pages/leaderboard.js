import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/leaderboard')
      .then(res => res.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div className="container">
      <h2>Leaderboard</h2>
      <ol>
        {leaders.map((item, index) => (
          <li key={index}>{item.name} – ₹{item.donations}</li>
        ))}
      </ol>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default Leaderboard;