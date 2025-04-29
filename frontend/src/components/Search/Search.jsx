import React from 'react'
import Layout from '../../Layout/Layout'
import Navbar from '../Navbar/Navbar'

const Search = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <div className='secondary_bg mx-4 p-4'>

          <div className='flex justify-between items-center mb-4 pt-4'>
            <span className='text-xl font-bold hover:underline cursor-pointer'>Mostrar todos</span>
          </div>

          <div className='grid gap-6 grid-cols-5' />

        </div>
      </Layout>
    </>
  )
}

export default Search
