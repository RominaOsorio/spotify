const express = require('express')
const cors = require('cors')
const { connectDB } = require('./db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/user', require('./src/routes/user.route'))

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`))
