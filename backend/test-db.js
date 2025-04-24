require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/spotify'

const testConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('✅ Conexión exitosa a MongoDB')
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err.message)
  } finally {
    mongoose.connection.close()
  }
}

testConnection()

// node test-db.js
