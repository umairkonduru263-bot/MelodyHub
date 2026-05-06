import { memo } from 'react'
import { FaPlay } from 'react-icons/fa'

function SongCard({ song, onPlay }) {
  return (
    <article className="song-card" onClick={() => onPlay(song)}>
      <img src={song.img} alt={`${song.title} cover`} />
      <div className="song-info">
        <h3>{song.title}</h3>
        <p className="song-artist">{song.artist}</p>
        <p className="song-movie">{song.movie}</p>
        <p className="song-year">{song.year}</p>
      </div>
      <button className="play-action" aria-label={`Play ${song.title}`}>
        <FaPlay />
      </button>
    </article>
  )
}

export default memo(SongCard)
