import Layout from '../../Layout/Layout'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import { songs } from '../../data/songs'
import SongBar from '../MasterBar/SongBar'
import { useSelector } from 'react-redux'
import { FaUser } from 'react-icons/fa'

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.account)
  return (
    <Layout>
      <div className='flex justify-between items-center mx-4 py-4 rounded-[2px] mt-2 px-8 secondary_bg border-b border-b-gray-400'>
        <div className='flex gap-2 items-center'>
          <GoChevronLeft className='bg-white/20 text-3xl p-1 rounded-[50%]' />
          <GoChevronRight className='bg-white/20 text-3xl p-1 rounded-[50%]' />
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
            : (<FaUser className='bg-white/20 text-4xl p-1 rounded-[50%]' />)}
        </div>

      </div>

      <div className='tertiary_bg mx-4 p-4'>

        <div className='flex justify-between items-center my-4'>
          <span className='text-xl font-bold hover:underline cursor-pointer'>Focus</span>
          <span>Mostrar todos</span>
        </div>

        <div className='grid gap-6 grid-cols-5'>

          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />
          })}

        </div>

        <div className='flex justify-between items-center mb-4 mt-8'>
          <span className='text-xl font-bold hover:underline cursor-pointer'>Spotify List</span>
          <span>Mostrar todos</span>
        </div>

        <div className='grid gap-6 grid-cols-5'>
          <Card />
        </div>
      </div>
      <SongBar />

    </Layout>
  )
}

export default Home
