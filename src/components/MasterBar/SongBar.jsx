import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineHeart, AiOutlinePlaySquare } from 'react-icons/ai'
import { CgScreen } from 'react-icons/cg'
import { BiShuffle, BiRepeat } from 'react-icons/bi'
import { IoMdSkipForward, IoMdSkipBackward } from 'react-icons/io'
import { FaPause, FaPlay } from 'react-icons/fa'
import { PiMicrophoneStageDuotone, PiQueueLight } from 'react-icons/pi'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'
import { BsSpeakerFill, BsArrowsAngleContract } from 'react-icons/bs'
import { playMaster, pauseMaster } from '../../states/Actors/SongActor'

const SongBar = () => {
  const { masterSong, isPlaying } = useSelector(state => state.mainSong)
  const dispatch = useDispatch()

  const handleMaster = () => {
    if (isPlaying) {
      dispatch(pauseMaster())
    } else {
      dispatch(playMaster())
    }
  }

  useEffect(() => {
    if (masterSong) {
      if (isPlaying) {
        masterSong.mp3.play()
        masterSong?.mp3?.play()
      } else {
        masterSong?.mp3?.pause()
      }
    }
  }, [masterSong, isPlaying])

  return (

    <div className='fixed w-full flex justify-between items-center bottom-0 left-0 h-20 bg-black'>
      <div className='w-2/12'>
        <div className='flex items-center gap-2'>
          <img src={masterSong?.cover} alt='' className='h-14' />
          <div>
            <h3 className='text-xs font-medium'>{masterSong?.title}</h3>
            <span className='text-[10px]'>{masterSong?.artist}</span>
          </div>
          <AiOutlineHeart className='ml-3' />
          <CgScreen className='ml-3' />
        </div>
      </div>

      <div className='w-5/12'>
        <div className='flex justify-center items-center mb-2 gap-6'>
          <BiShuffle />
          <IoMdSkipBackward />

          {
                isPlaying
                  ? (
                    <button
                      onClick={handleMaster}
                      className='flex items-center rounded-[50%] bg-white justify-center p-2'
                    >
                      <FaPlay className='text-black' />
                    </button>
                    )
                  : (
                    <button
                      onClick={handleMaster}
                      className='flex items-center rounded-[50%] bg-white justify-center p-2'
                    >
                      <FaPause className='text-black' />
                    </button>
                    )
            }

          <IoMdSkipForward />
          <BiRepeat />
        </div>
        <div className='flex items-center pb-3'>
          <span className='text-xs'>00:00</span>
          <input
            type='range'
            min={0}
            max={100}
            className='w-full block'
          />
          <span className='text-xs'>00:00</span>
        </div>
      </div>

      <div className='w-2/12 flex items-center gap-2'>
        <AiOutlinePlaySquare className='text-2xl' />
        <PiMicrophoneStageDuotone className='text-2xl' />
        <PiQueueLight className='text-2xl' />
        <BsSpeakerFill className='text-2xl' />
        <HiSpeakerWave className='text-2xl' />
        <HiSpeakerXMark className='text-2xl' />
        <input
          type='range'
          min={0}
          max={100}
          className='w-1/2 block'
        />
        <BsArrowsAngleContract className='text-2xl' />
      </div>

    </div>

  )
}

export default SongBar
