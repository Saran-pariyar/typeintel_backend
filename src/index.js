require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const typingRoutes = require('./routes/typing');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api', typingRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});