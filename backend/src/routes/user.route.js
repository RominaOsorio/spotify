/* eslint-disable prefer-const */
const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const { generateToken } = require('../helpers/generateToken')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

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
    } else {
      const verify = await bcrypt.compare(password, user.password)

      if (!verify) {
        return res.status(401).json({ success: false, message: 'Credenciales inválidas' })
      } else {
        let token = await generateToken(user._id)
        console.log(token, user)
        return res.status(200).json({
          success: true,
          message: 'Inicio de sesión exitoso',
          token,
          user
        })
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
})

// Registro de usuario
router.post('/register', async (req, res) => {
  console.log(req.body)
  const { email, username, password, DOB, gender } = req.body

  if (!email || !username || !password || !DOB || !gender) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' })
  }

  try {
    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({
      email,
      username,
      password: hash,
      DOB,
      gender
    })

    console.log(user)

    if (user) {
      let token = await generateToken(user._id)
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

// Usuario autenticado
router.get('/me', async (req, res) => {
  try {
    const { token } = req.headers
    if (!token) {
      return res.status(401).json({ success: false, message: 'Usuario no autorizado' })
    }
    const data = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(data.id)
    if (user) {
      return res.status(200).json({ user, success: true, message: 'Usuario encontrado' })
    } else {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' })
    }
  } catch (error) {
    return res.status(401).json({ success: false, message: 'La sesión ha expirado ingresa nuevamente' })
  }
})

module.exports = router
