import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <>
      <header className=''>
        <div className='logo'>
          <img
            src='/src/assets/green_logo.svg'
            width={150}
            alt='logo'
            className='transition-all duration-300 hover:scale-105'
          />

        </div>
      </header>

      <div className='container py-10 max-w-none'>
        <div className='bg-black py-12 text-center w-1/2 mx-auto'>
          <h1 className='text-5xl my-12 font-semibold'>Log In to Spotify</h1>

          <div className='border-b border-gray-400 my-4 w-3/4 mx-auto' />

          <form className='text-center mx-auto w-1/2'>

            <div className='w-full text-left py-4'>

              <label htmlFor='email' className='font-semibold mb-2 inline-block'>Email o nombre de usuario</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email o nombre de usuario'
                className='block w-full rounded-[4px] border-0 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
               focus:ring-[3px] p-3 focus:ring-inset focus:ring-white-600 outline-none hover:ring-white bg-[#1a1919]'
              />

            </div>

            <div className='w-full text-left py-4'>

              <label htmlFor='password' className='font-semibold mb-2 inline-block'>Contraseña</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Contraseña'
                className='block w-full rounded-[4px] border-0 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
               focus:ring-[3px] p-3 focus:ring-inset focus:ring-white-600 outline-none hover:ring-white bg-[#1a1919]'
              />

            </div>

            <div className='w-full text-left py-4'>
              <button
                type='submit'
                className='block w-full outline-none bg-green-400 text-black p-3 hover:scale-105 hover:font-semibold transition-all duration-200 text-center rounded-full'
              >
                Inicia sesión
              </button>
            </div>

            <div className='w-full text-center py-4'>
              <Link to='/password/forgot' className='text-white font-semibold underline mx-auto'>¿Olvidaste tu contraseña?</Link>

            </div>

          </form>

          <div className='border-b border-gray-400 my-4 w-3/4 mx-auto' />
          <p className='pt-8'>
            <span className='text-gray-300'>
              ¿No tienes una cuenta?{' '}
            </span>
            <Link className='text-white hover:text-green-500 font-semibold underline mx-auto' to='/signup'>Regístrate</Link>
          </p>

        </div>

      </div>
    </>
  )
}

export default Login
