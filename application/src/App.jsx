import { useCallback, useMemo, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Player from './components/Player/Player'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Library from './pages/Library/Library'
import { playlists, songs } from './data/songs'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [activePlaylistId, setActivePlaylistId] = useState(playlists[0].id)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const activePlaylistSongs = useMemo(() => {
    const activePlaylist = playlists.find((playlist) => playlist.id === activePlaylistId)
    return activePlaylist
      ? songs.filter((song) => activePlaylist.songIds.includes(song.id))
      : songs
  }, [activePlaylistId])

  const currentIndex = useMemo(
    () => songs.findIndex((song) => song.id === currentSong.id),
    [currentSong],
  )

  const handlePlaySong = useCallback((song) => {
    setCurrentSong(song)
    setIsPlaying(true)
  }, [])

  const handleNav = useCallback((page) => {
    setActivePage(page)
  }, [])

  const handleSelectPlaylist = useCallback((playlistId) => {
    setActivePlaylistId(playlistId)
    setActivePage('library')
  }, [])

  const handlePrevious = useCallback(() => {
    const index = currentIndex === -1 ? 0 : currentIndex
    const prevIndex = index <= 0 ? songs.length - 1 : index - 1
    setCurrentSong(songs[prevIndex])
    setIsPlaying(true)
  }, [currentIndex])

  const handleNext = useCallback(() => {
    const index = currentIndex === -1 ? 0 : currentIndex
    const nextIndex = index >= songs.length - 1 ? 0 : index + 1
    setCurrentSong(songs[nextIndex])
    setIsPlaying(true)
  }, [currentIndex])

  const handleUploadAudio = useCallback((file) => {
    const localUrl = URL.createObjectURL(file)
    setCurrentSong({
      id: `local-${file.name}`,
      title: file.name,
      artist: 'Local File',
      album: 'Uploaded Audio',
      language: 'Local',
      img: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80',
      audioSrc: localUrl,
      duration: 'Unknown',
    })
    setIsPlaying(true)
  }, [])

  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        onNav={handleNav}
        playlists={playlists}
        activePlaylistId={activePlaylistId}
        onSelectPlaylist={handleSelectPlaylist}
      />

      <div className="content-layout">
        <Navbar activePage={activePage} />

        {activePage === 'home' && (
          <Home
            playlists={playlists}
            activePlaylistId={activePlaylistId}
            onSelectPlaylist={handleSelectPlaylist}
            playlistSongs={activePlaylistSongs}
            onPlay={handlePlaySong}
          />
        )}

        {activePage === 'search' && (
          <Search
            songs={songs}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onPlay={handlePlaySong}
          />
        )}

        {activePage === 'library' && (
          <Library
            playlists={playlists}
            activePlaylistId={activePlaylistId}
            onSelectPlaylist={handleSelectPlaylist}
            activePlaylistSongs={activePlaylistSongs}
            onPlay={handlePlaySong}
          />
        )}

        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          onNext={handleNext}
          onPrev={handlePrevious}
          onUploadAudio={handleUploadAudio}
        />
      </div>
    </div>
  )
}

export default App
