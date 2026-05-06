import { memo } from 'react'

function PlaylistCard({ playlist, isActive, onClick }) {
  return (
    <button className={`playlist-card ${isActive ? 'active' : ''}`} onClick={() => onClick(playlist.id)}>
      <img src={playlist.img} alt={`${playlist.title} cover`} />
      <div>
        <h3>{playlist.title}</h3>
        <p>{playlist.description}</p>
      </div>
    </button>
  )
}

export default memo(PlaylistCard)
