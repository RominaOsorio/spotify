/* eslint-disable no-undef */
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './signup.css'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const Signup = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.account)
  const [userDetails, setUserDetails] = useState({
    email: '',
    username: '',
    day: '',
    year: '',
    month: '',
    password: '',
    gender: ''
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const index = months.indexOf(userDetails.month) + 1
    const formattedMonth = index.toString().padStart(2, '0')
    const formattedDay = userDetails.day.toString().padStart(2, '0')
    const DOB = new Date(`${userDetails.year}-${formattedMonth}-${formattedDay}`)
    const { email, password, gender, username } = userDetails
    const userData = JSON.stringify({
      email,
      password,
      gender,
      DOB,
      username
    })
    console.log(userData)
    const res = await fetch('http://localhost:3000/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: userData
    })
    const data = await res.json()
    if (data.success) {
      setUserDetails({
        email: '',
        username: '',
        day: '',
        year: '',
        month: '',
        password: '',
        gender: ''
      })
      toast.success(data.message)
      localStorage.setItem('token', data.token)
      navigate('/login')
      localStorage.setItem('token', JSON.stringify(token))
    } else {
      toast.error(data.message)
    }
    console.log(data)
  }

  const onChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
    if (e.target.name === 'gender') {
      if (e.target.id === 'hombre') {
        setUserDetails({ ...userDetails, gender: 'Hombre' })
      }
      if (e.target.id === 'mujer') {
        setUserDetails({ ...userDetails, gender: 'Mujer' })
      }
      if (e.target.id === 'no-decir') {
        setUserDetails({ ...userDetails, gender: 'Prefiero no decirlo' })
      }
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className='min-h-screen flex flex-col items-center justify-start bg-black text-white px-4 py-10'>
      <Link to='/' className='mb-10'>
        <img
          src='/assets/logos/green_logo.svg'
          alt='Logo de Spotify'
          className='w-48 hover:scale-105 transition-transform duration-300'
        />
      </Link>

      <div className='w-full max-w-2xl bg-[#121212] rounded-2xl shadow-xl p-10'>
        <h1 className='text-3xl font-bold text-center mb-6'>
          Regístrate gratis para empezar a escuchar
        </h1>
        <span className='block text-center text-gray-400 mb-6'>o</span>
        <p className='text-center font-semibold text-lg mb-6'>Regístrate con tu correo electrónico</p>

        <form onSubmit={registerUser} className='space-y-6'>
          {/* Email */}
          <div>
            <label htmlFor='email' className='block mb-2 text-sm font-medium'>Correo electrónico o nombre de usuario</label>
            <input
              type='text'
              id='email'
              name='email'
              value={userDetails.email}
              onChange={onChange}
              className='w-full p-3 bg-[#2a2a2a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Correo o usuario'
              autoComplete='email'
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor='password' className='block mb-2 text-sm font-medium'>Crea una contraseña</label>
            <input
              type='password'
              id='password'
              name='password'
              value={userDetails.password}
              onChange={onChange}
              className='w-full p-3 bg-[#2a2a2a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Crea una contraseña'
              autoComplete='new-password'
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor='username' className='block mb-2 text-sm font-medium'>¿Cómo quieres que te llamemos?</label>
            <input
              type='text'
              id='username'
              name='username'
              value={userDetails.username}
              onChange={onChange}
              className='w-full p-3 bg-[#2a2a2a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='Tu nombre de perfil'
              autoComplete='username'
            />
            <small className='text-gray-400 mt-1 block'>Aparecerá en tu perfil</small>
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label className='block mb-2 text-sm font-medium'>¿Cuál es tu fecha de nacimiento?</label>
            <div className='flex gap-4'>
              <input
                type='text'
                id='day'
                name='day'
                value={userDetails.day}
                onChange={onChange}
                placeholder='Día'
                className='w-1/4 p-3 bg-[#2a2a2a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              />
              <select
                id='month'
                name='month'
                value={userDetails.month}
                onChange={onChange}
                className='w-1/2 p-3 bg-[#2a2a2a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              >
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <input
                type='text'
                id='year'
                name='year'
                value={userDetails.year}
                onChange={onChange}
                placeholder='Año'
                className='w-1/4 p-3 bg-[#2a2a2a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>
          </div>

          {/* Género */}
          <div>
            <label className='block mb-2 text-sm font-medium'>Género</label>
            <div className='flex gap-6'>
              {['Hombre', 'Mujer', 'Prefiero no decirlo'].map((g) => (
                <label key={g} className='flex items-center gap-2'>
                  <input
                    type='radio'
                    id={g.toLowerCase().replace(/\s/g, '-')}
                    name='gender'
                    value={g}
                    checked={userDetails.gender === g}
                    onChange={onChange}
                    className='accent-green-500'
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* Checkboxes */}
          <div className='space-y-3'>
            <label className='flex items-center gap-2 text-sm'>
              <input type='checkbox' className='accent-green-500' />
              Prefiero no recibir mensajes de marketing de Spotify
            </label>
            <label className='flex items-center gap-2 text-sm'>
              <input type='checkbox' className='accent-green-500' />
              Compartir mis datos con proveedores de contenido con fines de marketing
            </label>
          </div>

          {/* Legal */}
          <p className='text-xs text-gray-400'>
            Al hacer clic en "Registrarse", aceptas los Términos y Condiciones de Uso de Spotify. Para saber más, consulta la Política de Privacidad de Spotify.
          </p>

          {/* Botón */}
          <div className='text-center pt-4'>
            <button
              type='submit'
              className='w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-full font-bold transition-all duration-300 hover:scale-105'
            >
              Registrarse
            </button>
          </div>
        </form>

        <div className='border-t border-gray-700 my-8' />

        <p className='text-center text-sm text-gray-400'>
          ¿Ya tienes una cuenta?{' '}
          <Link to='/login' className='text-green-400 hover:underline'>
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
