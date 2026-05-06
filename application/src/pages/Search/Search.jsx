import { useMemo } from 'react'
import SongCard from '../../components/SongCard/SongCard'

export default function Search({ songs, searchQuery, setSearchQuery, onPlay }) {
  const query = searchQuery.trim().toLowerCase()
  const filteredSongs = useMemo(
    () =>
      songs.filter((song) => {
        return (
          song.title.toLowerCase().includes(query) ||
          song.artist.toLowerCase().includes(query) ||
          song.language.toLowerCase().includes(query)
        )
      }),
    [query, songs],
  )

  return (
    <main className="page-content">
      <section className="search-panel">
        <div className="section-header">
          <h2>Search songs</h2>
          <p>Type any artist, song title, or language.</p>
        </div>
        <input
          type="search"
          placeholder="Search by song, artist, or language"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="search-input"
        />
      </section>

      <section className="song-grid">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => <SongCard key={song.id} song={song} onPlay={onPlay} />)
        ) : (
          <div className="empty-state">
            <p>No songs matched your search. Try another name.</p>
          </div>
        )}
      </section>
    </main>
  )
}
