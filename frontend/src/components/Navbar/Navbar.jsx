/* eslint-disable no-undef */
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { FaExternalLinkAlt, FaSearch, FaUser } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { songs } from '../../data/songs'
import { useGlobalContext } from '../../states/Context'
import { logOutUser } from '../../states/Actors/UserActor'

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.account)
  const location = useLocation()
  const [query, setQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const { setfilteredSongs } = useGlobalContext()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const dropdownRef = useRef(null)

  const isSearchRoute = location.pathname === '/search'

  const filterSongs = (e) => {
    const value = e.target.value
    setQuery(value)

    if (value === '') {
      setfilteredSongs([])
      return
    }

    const filtered = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(value.toLowerCase()) ||
        song.artist.toLowerCase().includes(value.toLowerCase())
    )

    setfilteredSongs(filtered)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    dispatch(logOutUser())
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className='flex justify-between items-center mx-4 rounded-[2px] px-8 secondary_bg'>
      <div className='flex gap-2 items-center w-1/2'>
        <GoChevronLeft className='bg-white/10 text-3xl p-1 rounded-[50%]' />
        <GoChevronRight className='bg-white/10 text-3xl p-1 rounded-[50%]' />

        <div className={`w-full text-left py-4 relative ${!isSearchRoute ? 'opacity-0' : ''}`}>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='¿Qué quieres escuchar?'
            autoComplete='off'
            value={query}
            onChange={filterSongs}
            className={`block w-full rounded-full pl-12 border-0 text-gray-300 shadow-sm ring-1 ring-inset ring-transparent placeholder:text-gray-400 focus:ring-[3px] p-3 focus:ring-inset focus:ring-white outline-none hover:ring-white/20 bg-[#1a1919] ${
              !isSearchRoute ? 'opacity-0' : ''
            }`}
          />
          <FaSearch className='absolute top-8 left-4 text-gray-400' />
        </div>
      </div>

      <div>
        {!isAuthenticated
          ? (
            <div className='flex gap-2'>
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
          : (
            <div className='relative' ref={dropdownRef}>
              <button onClick={() => setShowDropdown(!showDropdown)} aria-label='Toggle user menu'>
                <FaUser className='bg-white/10 text-4xl p-1 rounded-[50%]' />
              </button>
              {showDropdown && (
                <div className='absolute z-50 dropdown bg-[#282828] top-8 right-0 w-[12rem] shadow-lg rounded-md'>
                  <ul className='p-1'>
                    <li>
                      <Link className='flex justify-between p-2 hover:bg-white/10' to='#'>
                        <span>Mi cuenta</span> <FaExternalLinkAlt />
                      </Link>
                    </li>
                    <li>
                      <button className='flex justify-between p-2 hover:bg-white/10 w-full text-left'>
                        <span>Perfil</span>
                      </button>
                    </li>
                    <li>
                      <button className='flex justify-between p-2 hover:bg-white/10 w-full text-left'>
                        <span>Upgrade</span> <FaExternalLinkAlt />
                      </button>
                    </li>
                    <li>
                      <button className='flex justify-between p-2 hover:bg-white/10 w-full text-left'>
                        <span>Configuración</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className='p-2 w-full text-left border-t border-white/10 hover:bg-white/10'
                      >
                        <span>Cerrar sesión</span>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            )}
      </div>
    </header>
  )
}

export default Navbar
