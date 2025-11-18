const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());

// Prefix all auth routes with /api/auth
app.use('/api/auth', authRoutes);

// Booking Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' },
  destination: String,
  date: Date,
  guests: Number,
});
const Booking = mongoose.model('Booking', bookingSchema);

// Package Schema
const packageSchema = new mongoose.Schema({
  destination: String,
  packageName: String,
  price: Number,
  details: String,
});
const Package = mongoose.model('Package', packageSchema);

// Routes
app.post('/api/bookings', async (req, res) => {
  const { name, email, phone, packageId, date, guests } = req.body;
  const newBooking = new Booking({ name, email, phone, packageId, date, guests });
  try {
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create booking' });
  }
});

app.get('/api/packages', async (req, res) => {
  try {
    const packages = await Package.find({});
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch packages' });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.log('❌ MongoDB connection error:', err.message));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

