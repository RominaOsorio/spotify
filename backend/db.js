const mongoose = require('mongoose')

const MONGO_URI = 'mongodb://localhost:27017/spotify'

const connectDB = async () => {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err))
}

module.exports = { connectDB }
