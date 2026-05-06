import { useEffect, useRef, useState } from 'react'
import { FaBackward, FaForward, FaPause, FaPlay, FaUpload } from 'react-icons/fa'

export default function Player({ currentSong, isPlaying, setIsPlaying, onNext, onPrev, onUploadAudio }) {
  const audioRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [isPlaying, currentSong])

  const handleTimeUpdate = () => {
    const audio = audioRef.current
    if (!audio) return
    setCurrentTime(audio.currentTime)
    setDuration(audio.duration || 0)
    setProgress((audio.currentTime / (audio.duration || 1)) * 100)
  }

  const handleSeek = (event) => {
    const audio = audioRef.current
    if (!audio) return
    const value = Number(event.target.value)
    audio.currentTime = (value / 100) * audio.duration
    setProgress(value)
  }

  const formatTime = (seconds) => {
    if (!seconds || Number.isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    onUploadAudio(file)
    event.target.value = null
  }

  return (
    <section className="player-card">
      <div className="player-left">
        <img src={currentSong.img} alt={currentSong.title} />
        <div>
          <p className="player-label">Now Playing</p>
          <h3>{currentSong.title}</h3>
          <p>{currentSong.artist}</p>
        </div>
      </div>

      <div className="player-controls">
        <div className="control-buttons">
          <button onClick={onPrev} aria-label="Previous song">
            <FaBackward />
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={onNext} aria-label="Next song">
            <FaForward />
          </button>
        </div>

        <div className="progress-row">
          <span>{formatTime(currentTime)}</span>
          <input type="range" min="0" max="100" value={progress} onChange={handleSeek} />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player-actions">
        <label className="upload-button">
          <FaUpload />
          <span>Upload audio</span>
          <input type="file" accept="audio/*" onChange={handleFileChange} />
        </label>
        <p className="tip">Upload a local MP3 to play it instantly.</p>
      </div>

      <audio
        ref={audioRef}
        src={currentSong.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onNext}
      />
    </section>
  )
}
