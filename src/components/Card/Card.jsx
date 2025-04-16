/* eslint-disable react/jsx-closing-tag-location */
import './card.css'
import { FaPlay, FaPause } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { playSong, pauseSong } from '../../states/Actors/SongActor'

const Card = ({ song }) => {
  const { masterSong, isPlaying } = useSelector(state => state.mainSong)
  const dispatch = useDispatch()

  const handlePlay = (song) => {
    console.log(isPlaying)

    if (isPlaying) {
      masterSong.mp3.currentTime = 0
      masterSong.mp3.pause()
    }

    dispatch(playSong(song))
  }

  const handlePause = () => {
    dispatch(pauseSong())
  }

  return (

    song && (
      <div className='card col-span-1 p-3 rounded-lg'>
        <div className='relative'>

          <img src={song.cover} alt={`cover de ${song.title}`} />

          {
              masterSong.id === song.id && isPlaying
                ? (<button onClick={() => handlePause(song)} className='flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] p-3 m-2 bg-green-400'>
                  <FaPause className='text-black text-xl' />
                </button>
                  )
                : (
                  <button onClick={() => handlePlay(song)} className='flex items-center play_btn absolute bottom-0 right-0 rounded-[50%] p-3 m-2 bg-green-400'>
                    <FaPlay className='text-black text-xl' />
                  </button>
                  )
          }

        </div>
        <h3 className='text-sm font-semibold my-2'>{song.artist}</h3>
        <p className='text-xs text-gray-400 leading-4'>{song.title}</p>
      </div>
    )

  )
}

export default Card
