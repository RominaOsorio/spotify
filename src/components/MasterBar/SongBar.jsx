import { useEffect, useState } from 'react'
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
import './songBar.css'

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
  const [volume, setVolume] = useState(50)

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

  const changeVolume = (e) => {
    setVolume(e.target.value)
    masterSong.mp3.volume = e.target.value / 100
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
          <div className='relative w-full flex items-center '>

            <input
              type='range'
              min={0}
              max={100}
              value={progress}
              onChange={changeProgress}
              disabled={!masterSong?.mp3}
              className='w-full block'
              id='progress_bar'
            />
            <div className={`active_progress w-[${progress}%]`} />
          </div>

          <span className='text-xs'>{duration}</span>
        </div>
      </div>

      <div className='w-2/12 flex items-center gap-2'>
        <AiOutlinePlaySquare className='text-2xl' />
        <PiMicrophoneStageDuotone className='text-2xl' />
        <PiQueueLight className='text-2xl' />
        <BsSpeakerFill className='text-2xl' />
        {volume <= 0 && <HiSpeakerXMark className='text-2xl' />}
        {volume > 0 && <HiSpeakerWave className='text-2xl' />}
        <div className='relative w-full'>
          <input
            type='range'
            min={0}
            max={100}
            value={volume}
            onChange={changeVolume}
            disabled={!masterSong?.mp3}
            className='w-full block'
          />
          <div id='volume' className={`active_progress w-[${volume}%]`} />
        </div>
        <BsArrowsAngleContract className='text-2xl' />
      </div>
      <div className='hidden'>

        <div className='w-[0%]' />
        <div className='w-[1%]' />
        <div className='w-[2%]' />
        <div className='w-[3%]' />
        <div className='w-[4%]' />
        <div className='w-[5%]' />
        <div className='w-[6%]' />
        <div className='w-[7%]' />
        <div className='w-[8%]' />
        <div className='w-[9%]' />
        <div className='w-[10%]' />
        <div className='w-[11%]' />
        <div className='w-[12%]' />
        <div className='w-[13%]' />
        <div className='w-[14%]' />
        <div className='w-[15%]' />
        <div className='w-[16%]' />
        <div className='w-[17%]' />
        <div className='w-[18%]' />
        <div className='w-[19%]' />
        <div className='w-[20%]' />
        <div className='w-[21%]' />
        <div className='w-[22%]' />
        <div className='w-[23%]' />
        <div className='w-[24%]' />
        <div className='w-[25%]' />
        <div className='w-[26%]' />
        <div className='w-[27%]' />
        <div className='w-[28%]' />
        <div className='w-[29%]' />
        <div className='w-[30%]' />
        <div className='w-[31%]' />
        <div className='w-[32%]' />
        <div className='w-[33%]' />
        <div className='w-[34%]' />
        <div className='w-[35%]' />
        <div className='w-[36%]' />
        <div className='w-[37%]' />
        <div className='w-[38%]' />
        <div className='w-[39%]' />
        <div className='w-[40%]' />
        <div className='w-[41%]' />
        <div className='w-[42%]' />
        <div className='w-[43%]' />
        <div className='w-[44%]' />
        <div className='w-[45%]' />
        <div className='w-[46%]' />
        <div className='w-[47%]' />
        <div className='w-[48%]' />
        <div className='w-[49%]' />
        <div className='w-[50%]' />
        <div className='w-[51%]' />
        <div className='w-[52%]' />
        <div className='w-[53%]' />
        <div className='w-[54%]' />
        <div className='w-[55%]' />
        <div className='w-[56%]' />
        <div className='w-[57%]' />
        <div className='w-[58%]' />
        <div className='w-[59%]' />
        <div className='w-[60%]' />
        <div className='w-[61%]' />
        <div className='w-[62%]' />
        <div className='w-[63%]' />
        <div className='w-[64%]' />
        <div className='w-[65%]' />
        <div className='w-[66%]' />
        <div className='w-[67%]' />
        <div className='w-[68%]' />
        <div className='w-[69%]' />
        <div className='w-[70%]' />
        <div className='w-[71%]' />
        <div className='w-[72%]' />
        <div className='w-[73%]' />
        <div className='w-[74%]' />
        <div className='w-[75%]' />
        <div className='w-[76%]' />
        <div className='w-[77%]' />
        <div className='w-[78%]' />
        <div className='w-[79%]' />
        <div className='w-[80%]' />
        <div className='w-[81%]' />
        <div className='w-[82%]' />
        <div className='w-[83%]' />
        <div className='w-[84%]' />
        <div className='w-[85%]' />
        <div className='w-[86%]' />
        <div className='w-[87%]' />
        <div className='w-[88%]' />
        <div className='w-[89%]' />
        <div className='w-[90%]' />
        <div className='w-[91%]' />
        <div className='w-[92%]' />
        <div className='w-[93%]' />
        <div className='w-[94%]' />
        <div className='w-[95%]' />
        <div className='w-[96%]' />
        <div className='w-[97%]' />
        <div className='w-[98%]' />
        <div className='w-[99%]' />
        <div className='w-[100%]' />
      </div>
    </div>
  )
}

export default SongBar
