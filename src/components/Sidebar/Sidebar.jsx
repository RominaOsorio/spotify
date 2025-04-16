import { BiSolidHome, BiLibrary } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import SignUp from './SignUp'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='w-1/4 fixed left-0 top-0 sidebar'>
      <div className='nav secondary_bg rounded-lg p-6'>
        <div className='flex items-center gap-4'>
          <BiSolidHome className='font-bold text-xl' />
          <span>Inicio</span>
        </div>

        <div className='flex mt-4 items-center gap-4'>
          <FiSearch className='font-bold text-xl' />
          <span>Buscar</span>
        </div>
      </div>

      <div className='your_library'>
        <div className='mt-2 secondary_bg rounded-lg px-2 py-2'>
          <div className='flex px-4 justify-between mb-4 items-center gap-4'>
            <div className='flex gap-2 items-center'>
              <BiLibrary className='font-bold text-xl' />
              <span>Tu Biblioteca</span>
            </div>

            <button className='hover:bg-black/25 rounded-[50%] p-2'>
              <FaPlus className='font-bold text-xl' />
            </button>
          </div>

          <div className='leading-8 mt-2 tertiary_bg rounded-lg p-4'>
            <p className='font-bold'>Crea tu primera playlist</p>
            <p className='text-s'>Es fácil y rápido</p>
            <button className='rounded-full text-black mt-4 px-4 py-0 bg-white'>
              Crear playlist
            </button>
          </div>

          <div className='leading-8 mt-4 tertiary_bg rounded-lg p-4'>
            <p className='font-bold'>Encuentra tu podcasts</p>
            <p className='text-s'>Te mantendremos al tanto de nuevos episodios</p>
            <button className='rounded-full text-black mt-4 px-4 py-0 bg-white'>
              Explorar podcasts
            </button>
          </div>
        </div>
      </div>

      <div className='mt-8 px-4 flex gap-4 flex-wrap'>
        <a className='text-xs text-gray-300 mx-4' href='#'>Centro de Privacidad</a>
        <a className='text-xs text-gray-300 mx-4' href='#'>Legal</a>
        <a className='text-xs text-gray-300 mx-4' href='#'>Política de Privacidad</a>
        <a className='text-xs text-gray-300 mx-4' href='#'>Cookies</a>
        <a className='text-xs text-gray-300 mx-4' href='#'>Publicidad</a>
        <a className='text-xs text-gray-300 mx-4' href='#'>Accesibilidad</a>
      </div>

      <button className='mt-8 mx-4 text-sm text-white border rounded-full flex gap-2 px-3 py-1 items-center'>
        <TbWorld />
        <span className='text-white'>
          Español
        </span>
      </button>

      {/* <SignUp /> */}
    </div>
  )
}

export default Sidebar
