import PlaylistCard from '../../components/Playlist/PlaylistCard'
import SongCard from '../../components/SongCard/SongCard'

export default function Home({ playlists, activePlaylistId, onSelectPlaylist, playlistSongs, onPlay }) {
  return (
    <main className="page-content">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h1>Find your next favorite song.</h1>
          <p>Browse curated playlists, latest releases, and your top tracks.</p>
        </div>
      </section>

      <section className="section-grid">
        <div>
          <div className="section-header">
            <h2>Featured playlists</h2>
            <p>Tap to explore</p>
          </div>
          <div className="playlist-grid">
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                isActive={playlist.id === activePlaylistId}
                onClick={onSelectPlaylist}
              />
            ))}
          </div>
        </div>

        <div className="section-panel">
          <div className="section-header">
            <h2>Playlist preview</h2>
            <p>Click a playlist to play songs</p>
          </div>
          <div className="song-list">
            {playlistSongs.map((song) => (
              <SongCard key={song.id} song={song} onPlay={onPlay} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
