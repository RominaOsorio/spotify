/* eslint-disable prefer-const */
const express = require('express')
const User = require('../models/user.model')
const { generateToken } = require('../helpers/generateToken')
const router = express.Router()

// Login de usuario
router.post('/login', async (req, res) => {
  console.log(req.body)

  try {
    const { username, password } = req.body

    let user = await User.findOne({ username })
    console.log(user)
    if (!user) {
      user = await User.findOne({ email: username })
    }

    if (!user) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' })
    }

    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' })
    } else {
      let token = generateToken(user._id)
      return res.status(200).json({
        success: true,
        message: 'Inicio de sesión exitoso',
        token,
        user
      })
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
})

// Registro de usuario
router.post('/register', async (req, res) => {
  console.log(req.body)
  const { email, username, password, DOB, gender } = req.body

  try {
    const user = await User.create({ email, username, password, DOB, gender })
    if (user) {
      let token = generateToken(user._id)
      console.log(token)
      return res.status(201).json({ success: true, message: 'Usuario creado exitosamente', user, token })
    } else {
      return res.status(400).json({ success: false, message: 'Ocurrió un error al crear la cuenta' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: 'Error interno del servidor' })
  }
})

// Obtener todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users, success: true, message: 'Usuarios encontrados' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'No se pudieron obtener los usuarios' })
  }
})

module.exports = router
