/* eslint-disable no-undef */
import Layout from '../../Layout/Layout'
import Card from '../Card/Card'
import { songs } from '../../data/songs'
import SongBar from '../MasterBar/SongBar'
import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useGlobalContext } from '../../states/Context'

const Home = () => {
  const { getUser } = useGlobalContext()

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <Layout>
        <div className='h-[calc(100vh-120px)] overflow-y-scroll'>
          <Navbar />

          <div className='secondary_bg mx-4 p-4'>

            <div className='flex justify-between items-center mb-4 pt-4'>
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
              {songs.map((song, i) => {
                return <Card key={song.id} idx={i} song={song} />
              })}
            </div>

          </div>

        </div>

        <SongBar />
      </Layout>
    </>
  )
}

export default Home
