/* eslint-disable multiline-ternary */
import React from 'react'
import Layout from '../../Layout/Layout'
import Navbar from '../Navbar/Navbar'
import { categories } from '../../data/categories'
import { useGlobalContext } from '../../states/Context'
import SongBar from '../MasterBar/SongBar'
import Card from '../Card/Card'

const CategoryCard = ({ title, img, color }) => {
  return (
    <div className={`p-4 rounded-lg w-full ${color} relative overflow-hidden h-50`}>
      <span className='text-xl font-semibold mt-2'>{title}</span>
      <img
        src={img}
        alt={title}
        className='w-1/2 h-1/2 absolute bottom-0 -right-6 rotate-45 object-cover'
      />
    </div>
  )
}

const Search = () => {
  const { filteredSongs } = useGlobalContext()

  return (
    <Layout>
      <Navbar />

      <div className='secondary_bg mx-4 p-4'>
        <div className='flex justify-between items-center mb-4 pt-4'>
          <span className='text-xl font-bold hover:underline cursor-pointer'>
            Mostrar todos
          </span>
        </div>

        {filteredSongs?.length <= 0 ? (
          // Mostrar categorías si no hay búsqueda activa
          <div className='grid gap-6 grid-cols-5'>
            {categories.map((category) => (
              <div className='col-span-1' key={category.id}>
                <CategoryCard
                  title={category.title}
                  img={category.img}
                  color={category.color}
                />
              </div>
            ))}
          </div>
        ) : (
          // Mostrar resultados filtrados
          <div className='grid gap-6 grid-cols-5'>
            {filteredSongs.map((song) => (
              <div className='col-span-1 p-4 bg-white/10 rounded-lg' key={song.id}>
                <Card song={song} idx={song.id} />
              </div>
            ))}
          </div>
        )}
      </div>
      <SongBar />
    </Layout>
  )
}

export default Search
