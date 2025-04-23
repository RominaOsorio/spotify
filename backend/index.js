const express = require('express')
const { connectDB } = require('./db')

const app = express()
const PORT = process.env.PORT || 3000
connectDB()

app.use(express.json())
app.use('/api/user', require('./src/routes/user'))

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`))
