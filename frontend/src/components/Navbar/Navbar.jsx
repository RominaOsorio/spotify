import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { FaSearch, FaUser } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.account)
  const location = useLocation()

  useEffect(() => {
    // console.log(location.pathname)
  }, [location.pathname])

  return (
    <>
      <header className='flex justify-between items-center mx-4 rounded-[2px] px-8 secondary_bg'>
        <div className='flex gap-2 items-center w-1/2'>
          <GoChevronLeft className='bg-white/10 text-3xl p-1 rounded-[50%]' />
          <GoChevronRight className='bg-white/10 text-3xl p-1 rounded-[50%]' />

          <div className={`${location.pathname !== '/search' ? 'opacity-0' : ''} w-full text-left py-4 relative`}>
            <input
              type='text'
              id='username'
              name='username'
              autoComplete='username'
              placeholder='¿Qué quieres escuchar?'
              className={`block ${location.pathname !== '/search' ? 'opacity-0' : ''} w-full rounded-full pl-12 border-0 text-gray-300 shadow-sm ring-1 ring-inset ring-transparent placeholder:text-gray-400 focus:ring-[3px] p-3 focus:ring-inset focus:ring-white outline-none hover:ring-white/20 bg-[#1a1919]`}
            />
            <FaSearch className='absolute top-8 left-4 text-gray-400' />
          </div>

        </div>

        <div>
          {!isAuthenticated
            ? (
              <div>
                <Link
                  to='/signup'
                  className='rounded-full mt-4 px-8 py-2 text-base text-white'
                >
                  Sign Up
                </Link>

                <Link
                  to='/login'
                  className='rounded-full mt-4 px-8 py-2 text-base text-black bg-white'
                >
                  Log In
                </Link>
              </div>
              )
            : (<FaUser className='bg-white/10 text-4xl p-1 rounded-[50%]' />)}
        </div>
      </header>
    </>
  )
}

export default Navbar
