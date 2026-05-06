import SongCard from '../../components/SongCard/SongCard'
import PlaylistCard from '../../components/Playlist/PlaylistCard'

export default function Library({ playlists, activePlaylistId, onSelectPlaylist, activePlaylistSongs, onPlay }) {
  return (
    <main className="page-content">
      <section className="section-header">
        <div>
          <h2>Your Library</h2>
          <p>Saved playlists and song collection.</p>
        </div>
      </section>

      <section className="playlist-grid library-playlists">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            playlist={playlist}
            isActive={playlist.id === activePlaylistId}
            onClick={onSelectPlaylist}
          />
        ))}
      </section>

      <section className="section-panel">
        <div className="section-header">
          <h3>Playlist songs</h3>
          <p>Listen to songs from the selected playlist.</p>
        </div>
        <div className="song-list">
          {activePlaylistSongs.map((song) => (
            <SongCard key={song.id} song={song} onPlay={onPlay} />
          ))}
        </div>
      </section>
    </main>
  )
}
