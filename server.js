 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

/* ---------------- SECURITY ---------------- */
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

/* ---------------- CORS FIX (IMPORTANT) ---------------- */
// Render requires safe fallback for undefined FRONTEND_URL
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true
}));

/* ---------------- RATE LIMIT ---------------- */
app.use('/api/', rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

const productRoutes = require('./routes/products');

app.use('/api/products', productRoutes);;

try {
  authRoutes = require('./routes/auth');
  productRoutes = require('./routes/products');
  orderRoutes = require('./routes/orders');
  adminRoutes = require('./routes/admin');
  uploadRoutes = require('./routes/upload');

  app.use('/api/auth', authRoutes);
  app.use('/api/products', productRoutes);
  app.use('/api/orders', orderRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api/upload', uploadRoutes);

} catch (err) {
  console.error("Route import error:", err.message);
}

/* ---------------- HEALTH CHECK ---------------- */
app.get('/', (req, res) => {
  res.json({
    message: 'Orieme Matthew Fashion Store API',
    status: 'running'
  });
});

/* ---------------- DATABASE ---------------- */
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error("❌ MONGO_URI is missing in environment variables");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('✓ MongoDB Connected');
  } catch (err) {
    console.error('MongoDB Error:', err.message);
  }
};

connectDB();

/* ---------------- SERVER START ---------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
});
