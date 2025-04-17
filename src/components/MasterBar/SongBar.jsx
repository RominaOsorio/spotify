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
import { useGlobalContext } from '../../states/Context'

const SongBar = () => {
  const { masterSong, isPlaying } = useSelector(state => state.mainSong)
  const {
    progress,
    setProgress,
    resetEverything,
    currTime,
    setCurrTime,
    duration,
    setDuration
  } = useGlobalContext()

  const dispatch = useDispatch()

  const handleMaster = () => {
    if (isPlaying) {
      dispatch(pauseMaster())
    } else {
      dispatch(playMaster())
    }
  }

  const formatTime = (durationInSeconds = 0) => {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = Math.round(durationInSeconds % 60)
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }

  const changeProgress = (e) => {
    const percent = e.target.value
    const newTime = (percent / 100) * masterSong.mp3.duration
    masterSong.mp3.currentTime = newTime
    setProgress(percent)
  }

  useEffect(() => {
    let interval

    if (masterSong?.mp3) {
      setDuration(formatTime(masterSong.mp3.duration))

      if (isPlaying) {
        masterSong.mp3.play()
        interval = setInterval(() => {
          const current = masterSong.mp3.currentTime
          const dur = masterSong.mp3.duration

          if (current >= dur) {
            dispatch(pauseMaster())
            resetEverything()
          } else {
            setProgress((current / dur) * 100)
            setCurrTime(formatTime(current))
          }
        }, 1000)
      } else {
        masterSong.mp3.pause()
      }
    }

    return () => clearInterval(interval)
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

          <button
            onClick={handleMaster}
            className='flex items-center rounded-[50%] bg-white justify-center p-2'
          >
            {isPlaying
              ? <FaPause className='text-black' />
              : <FaPlay className='text-black' />}
          </button>

          <IoMdSkipForward />
          <BiRepeat />
        </div>

        <div className='flex items-center pb-3'>
          <span className='text-xs'>{currTime}</span>
          <input
            type='range'
            min={0}
            max={100}
            value={progress}
            onChange={changeProgress}
            disabled={!masterSong?.mp3}
            className='w-full block'
          />
          <span className='text-xs'>{duration}</span>
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
