import { Link } from 'react-router-dom'
import './signup.css'
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const Signup = () => {
  return (
    <>
      <div className='signup_container py-4'>
        <div className='logo'>
          <img
            src='/src/assets/black_logo.svg'
            width={200}
            alt='Logo de Spotify'
            className='mx-auto transition-all duration-300 hover:scale-105'
          />
        </div>

        <div className='text-black'>
          <div className='bg-white pb-20 text-center w-full mx-auto'>
            <h1 className='text-3xl tracking-tighter my-10 font-semibold'>
              Regístrate gratis para empezar a escuchar
            </h1>
            <span className='or__'>o</span>
            <p className='my-4 font-bold'>Regístrate con tu correo electrónico</p>

            <form className='text-center mx-auto w-3/4'>

              <div className='w-4/5 mx-auto text-left py-4'>
                <label htmlFor='email' className='font-semibold mb-2 text-sm inline-block'>
                  Correo electrónico o nombre de usuario
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Correo o usuario'
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
                  placeholder='Crea una contraseña'
                  className='block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[2px] p-3 focus:ring-inset focus:ring-white-600 outline-none hover:ring-black bg-[#fff]'
                />
              </div>

              <div className='w-4/5 mx-auto text-left py-4'>
                <label htmlFor='name' className='font-semibold mb-2 text-sm inline-block'>
                  ¿Cómo quieres que te llamemos?
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Tu nombre de perfil'
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
                      type='text' id='day'
                      name='day'
                      placeholder='Día'
                      className='block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]'

                    />
                  </div>

                  <div className='w-2/4'>
                    <label
                      htmlFor='month'
                      lassName='ml-2 inline-block'
                    >Mes
                    </label>
                    <select
                      id='month'
                      name='month'
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
                      lassName='ml-2 inline-block'
                    >
                      Año
                    </label>
                    <input
                      type='text'
                      id='year'
                      name='year'
                      placeholder='Año'
                      className='block w-full rounded-[4px] border-0 text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]'
                    />
                  </div>
                </div>
              </div>

              <div className='w-4/5 mx-auto text-left py-4'>
                <label className='font-semibold mb-2 text-sm inline-block'>
                  Género
                </label>

                <div className='flex gap-8 mt-4'>
                  <div className='w-1/4'>
                    <input
                      type='radio'
                      name='gender'
                      value='hombre'
                      className=''
                    />
                    <label className='ml-2 inline-block'>
                      Hombre
                    </label>
                  </div>

                  <div className='w-1/4'>
                    <input
                      type='radio'
                      name='gender'
                      value='mujer'
                      className=''
                    />
                    <label className='ml-2 inline-block'>
                      Mujer
                    </label>
                  </div>

                  <div className='w-2/4'>
                    <input
                      type='radio'
                      name='gender'
                      value='no_decir'
                      className=''
                    />
                    <label className='ml-2 inline-block'>
                      Prefiero no decirlo
                    </label>
                  </div>

                </div>
              </div>

              <div className='w-4/5 mx-auto text-left py-4'>

                <div className='my-4 flex items-center'>
                  <input type='checkbox' className='green-checkbox relative' />
                  <p className='ml-2 text-sm'>Prefiero no recibir mensajes de marketing de Spotify</p>

                </div>

                <div className='my-4 flex items-center'>
                  <input type='checkbox' className='green-checkbox relative' />

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
