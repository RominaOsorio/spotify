import './signup.css'

const SignUp = () => {
  return (
    <>
      <div className='fixed bottom-0 signup_bar flex justify-between items-center p-3 text-sm'>
        <div>
          <p className='mb-2 uppercase'>Vista previa en Spotify</p>
          <p className='font-bold'>Regístrate para escuchar canciones y podcasts ilimitados</p>
        </div>

        <button className='rounded-full text-black m-2 px-6 py-1 text-lg bg-white'>
          Regístrate
        </button>
      </div>
    </>
  )
}

export default SignUp
