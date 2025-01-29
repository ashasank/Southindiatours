const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes=require('./routes/auth.js')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB
app.use('/auth',authRoutes)
mongoose.connect('mongodb://localhost:27017/bookingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('Error connecting to MongoDB:', err.message);
});
const packageSchema = new mongoose.Schema({
  destination: String,
  packageName: String,
  price: Number,
  details: String,
});
const Package = mongoose.model('Package', packageSchema);
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' },
  date: Date,
  guests: Number,
});
const Booking = mongoose.model('Booking', bookingSchema);
// POST Route to create a booking
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
// GET Route to fetch available packages
app.get('/api/packages', async (req, res) => {
  try {
    const packages = await Package.find({});
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch packages' });
  }
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});