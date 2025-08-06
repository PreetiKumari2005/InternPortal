const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Dummy User Data
const userData = {
  name: "Preeti Kumari",
  referralCode: "preeti2025",
  donations: 1250
};

const leaderboardData = [
  { name: "Preeti Kumari", donations: 1250 },
  { name: "Amit Kumar", donations: 1000 },
  { name: "Neha Singh", donations: 750 }
];

app.get('/api/user', (req, res) => {
  res.json(userData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});