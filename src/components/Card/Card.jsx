import './card.css'
import { FaPlay } from 'react-icons/fa'

const Card = () => {
  return (
    <>
      <div className='card col-span-1 p-3 rounded-lg'>
        <div className='relative'>

          <img src='/src/assets/img.jpg' alt='foto/album' />
          <button className='flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] p-3 m-2 bg-green-400'>
            <FaPlay className='text-black text-xl' />
          </button>

        </div>
        <h3 className='text-sm font-semibold my-2'>Relax</h3>
        <p className='text-xs text-gray-400 leading-4'>Keep calm and focus with ambiental music</p>
      </div>
    </>
  )
}

export default Card
