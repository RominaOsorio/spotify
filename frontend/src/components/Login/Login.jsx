/* eslint-disable no-undef */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { userActor } from '../../states/Actors/UserActor'

const Login = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.account)
  const [userDetails, setUserDetails] = useState({ username: '', password: '' })
  const navigate = useNavigate()

  const loginUser = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userDetails)
    })
    const data = await res.json()
    if (data.success) {
      toast.success(data.message)
      localStorage.setItem('token', data.token)
      dispatch(userActor(data.user))
      navigate('/')
    } else {
      toast.error(data.message)
    }
  }

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  return (
    <div className='login-page min-h-screen flex justify-center items-center bg-black'>
      <div className='login-box'>
        <div className='text-center mb-6'>
          <img src='/assets/logos/green_logo.svg' width={120} alt='logo' className='mx-auto mb-4' />
          <h1 className='text-2xl font-semibold'>Inicia sesión en Spotify</h1>
        </div>
        <form onSubmit={loginUser}>
          <div className='mb-4'>
            <label htmlFor='username' className='block mb-2'>Email o nombre de usuario</label>
            <input
              type='text'
              id='username'
              name='username'
              value={userDetails.username}
              onChange={onChange}
              className='w-full p-3 rounded-md'
              placeholder='Ingresa tu usuario'
              autoComplete='username'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block mb-2'>Contraseña</label>
            <input
              type='password'
              id='password'
              name='password'
              value={userDetails.password}
              onChange={onChange}
              className='w-full p-3 rounded-md'
              placeholder='Ingresa tu contraseña'
              autoComplete='current-password'
            />
          </div>
          <button
            type='submit'
            className='w-full p-3 mt-4 rounded-full transition-all duration-200'
          >
            Inicia sesión
          </button>
        </form>
        <div className='text-center mt-6'>
          <Link to='/password/forgot'>¿Olvidaste tu contraseña?</Link>
        </div>
        <div className='border-t border-gray-600 my-6' />
        <div className='text-center'>
          <span>¿No tienes una cuenta? </span>
          <Link to='/signup'>Regístrate</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
