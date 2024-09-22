// index.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';

dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Routes
app.use('/api', subscriptionRoutes);


// Server initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
