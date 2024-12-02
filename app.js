const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
