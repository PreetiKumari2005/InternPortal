import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.name}</h2>
      <p>Referral Code: <b>{user.referralCode}</b></p>
      <p>Total Donations Raised: ₹{user.donations}</p>

      <h3>Rewards</h3>
      <ul>
        <li>🎁 Bronze Badge at ₹500</li>
        <li>🎁 Silver Badge at ₹1000</li>
        <li>🎁 Gold Badge at ₹1500</li>
      </ul>

      <Link to="/leaderboard">Go to Leaderboard</Link>
    </div>
  );
};

export default Dashboard;