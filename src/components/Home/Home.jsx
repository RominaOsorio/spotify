import Layout from '../../Layout/Layout'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
      <div className='flex justify-between items-center m-4'>
        <div className='flex gap-2 items-center'>
          <GoChevronLeft className='bg-white/20 text-3xl p-1 rounded-[50%]' />
          <GoChevronRight className='bg-white/20 text-3xl p-1 rounded-[50%]' />
        </div>

        <div>
          <Link to='signup' className='rounded-full mt-4 px-8 py-2 text-base text-white'>
            Sign Up
          </Link>
          <Link to='/login' className='rounded-full mt-4 px-8 py-2 text-base text-black bg-white'>
            Log In
          </Link>
        </div>

      </div>

      <div className='tertiary_bg mx-4 p-4'>

        <div className='flex justify-between items-center my-4'>
          <span className='text-xl font-bold hover:underline cursor pointer'>Focus</span>
          <span>Mostrar todos</span>
        </div>

        <div className='grid gap-6 grid-cols-5'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className='flex justify-between items-center mb-4 mt-8'>
          <span className='text-xl font-bold hover:underline cursor pointer'>Spotify List</span>
          <span>Mostrar todos</span>
        </div>

        <div className='grid gap-6 grid-cols-5'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

    </Layout>
  )
}

export default Home
