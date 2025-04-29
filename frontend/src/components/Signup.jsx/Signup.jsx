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
    <>
      <div className='signup_container py-4'>
        <div className='logo'>
          <Link to='/'>

            <img
              src='/assets/logos/black_logo.svg'
              width={200}
              alt='Logo de Spotify'
              className='mx-auto transition-all duration-300 hover:scale-105'
            />
          </Link>
        </div>

        <div className='text-black'>
          <div className='bg-white pb-20 text-center w-full mx-auto'>
            <h1 className='text-3xl tracking-tighter my-10 font-semibold'>
              Regístrate gratis para empezar a escuchar
            </h1>
            <span className='or__'>o</span>
            <p className='my-4 font-bold'>Regístrate con tu correo electrónico</p>

            <form onSubmit={registerUser} className='text-center mx-auto w-3/4'>

              <div className='w-4/5 mx-auto text-left py-4'>
                <label htmlFor='email' className='font-semibold mb-2 text-sm inline-block'>
                  Correo electrónico o nombre de usuario
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  value={userDetails.email}
                  onChange={onChange}
                  placeholder='Correo o usuario'
                  autoComplete='email'
                  className='block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] p-3 focus:ring-inset focus:ring-white-600 outline-none hover:ring-black bg-[#fff]'
                />
              </div>

              <div className='w-4/5 mx-auto text-left py-4'>
                <label htmlFor='password' className='font-semibold mb-2 text-sm inline-block'>
                  Crea una contraseña
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={userDetails.password}
                  onChange={onChange}
                  placeholder='Crea una contraseña'
                  autoComplete='new-password'
                  className='block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] p-3 focus:ring-inset focus:ring-white-600 outline-none hover:ring-black bg-[#fff]'
                />
              </div>

              <div className='w-4/5 mx-auto text-left py-4'>
                <label htmlFor='username' className='font-semibold mb-2 text-sm inline-block'>
                  ¿Cómo quieres que te llamemos?
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={userDetails.username}
                  onChange={onChange}
                  placeholder='Tu nombre de perfil'
                  autoComplete='username'
                  className='block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] p-3 focus:ring-inset focus:ring-white-600 outline-none hover:ring-black bg-[#fff]'
                />
                <small>Aparecerá en tu perfil</small>
              </div>

              <div className='w-4/5 mx-auto text-left py-4'>
                <label className='font-semibold mb-2 text-sm inline-block'>
                  ¿Cuál es tu fecha de nacimiento?
                </label>
                <div className='flex gap-4'>
                  <div className='w-1/4'>
                    <label
                      htmlFor='day'
                      className='ml-2 inline-block'
                    >Día
                    </label>
                    <input
                      type='text'
                      id='day'
                      name='day'
                      value={userDetails.day}
                      onChange={onChange}
                      placeholder='Día'
                      className='block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]'
                    />
                  </div>

                  <div className='w-2/4'>
                    <label
                      htmlFor='month'
                      className='ml-2 inline-block'
                    >Mes
                    </label>
                    <select
                      id='month'
                      name='month'
                      value={userDetails.month}
                      onChange={onChange}
                      className='block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]'
                    >
                      {months.map((m) => {
                        return <option key={m} value={m}>{m}</option>
                      })}

                    </select>
                  </div>

                  <div className='w-1/4'>
                    <label
                      htmlFor='year'
                      className='ml-2 inline-block'
                    >
                      Año
                    </label>
                    <input
                      type='text'
                      id='year'
                      name='year'
                      value={userDetails.year}
                      onChange={onChange}
                      placeholder='Año'
                      className='block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]'
                    />
                  </div>
                </div>
              </div>

              <div className='w-4/5 mx-auto text-left py-4'>
                <label htmlFor='gender' className='font-semibold mb-2 text-sm inline-block'>
                  Género
                </label>

                <div className='flex gap-8 mt-4'>
                  <div className='w-1/4'>
                    <input
                      type='radio'
                      id='hombre'
                      name='gender'
                      value='Hombre'
                      checked={userDetails.gender === 'Hombre'}
                      onChange={onChange}
                    />

                    <label className='ml-2 inline-block'>
                      Hombre
                    </label>
                  </div>

                  <div className='w-1/4'>
                    <input
                      type='radio'
                      id='mujer'
                      name='gender'
                      value='Mujer'
                      checked={userDetails.gender === 'Mujer'}
                      onChange={onChange}
                    />

                    <label className='ml-2 inline-block'>
                      Mujer
                    </label>
                  </div>

                  <div className='w-2/4'>
                    <input
                      type='radio'
                      id='no-decir'
                      name='gender'
                      value='no-decir'
                      checked={userDetails.gender === 'Prefiero no decirlo'}
                      onChange={onChange}
                    />

                    <label className='ml-2 inline-block'>
                      Prefiero no decirlo
                    </label>
                  </div>

                </div>
              </div>

              <div className='w-4/5 mx-auto text-left py-4'>

                <div className='my-4 flex items-center'>
                  <input
                    type='checkbox'
                    className='green-checkbox relative'
                  />
                  <p className='ml-2 text-sm'>Prefiero no recibir mensajes de marketing de Spotify</p>

                </div>

                <div className='my-4 flex items-center'>
                  <input
                    type='checkbox'
                    className='green-checkbox relative'
                  />

                  <p className='ml-2 text-sm'>Compartir mis datos de registro con los proveedores de contenido de Spotify con fines de marketing</p>

                </div>

                <p className='my-4 text-xs'>
                  Al hacer clic en "Registrarse", aceptas los Términos y Condiciones de Uso de Spotify.
                </p>

                <p className='my-4 text-xs'>
                  Para saber más sobre cómo Spotify recopila, utiliza, comparte y protege tus datos personales, consulta la Política de Privacidad de Spotify.
                </p>
              </div>

              <div className='w-full text-left py-4'>
                <button
                  type='submit'
                  className='block w-1/2 mx-auto outline-none bg-green-400 text-black p-3 hover:scale-105 hover:font-semibold transition-all duration-200 text-center rounded-full'
                >
                  Registrarse
                </button>
              </div>

            </form>

            <div className='border-b border-gray-400 my-4 w-3/4 mx-auto' />

            <p className='pt-8'>
              <span className='text-gray-600 font-semibold'>
                ¿Ya tienes una cuenta?{' '}
              </span>
              <Link
                to='/login'
                className='text-green-400 hover:text-green-400/90 font-semibold underlinemx-auto'
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
