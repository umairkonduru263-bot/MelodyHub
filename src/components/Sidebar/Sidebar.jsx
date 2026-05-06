import { FaBookOpen, FaHome, FaListUl, FaSearch } from 'react-icons/fa'

const navItems = [
  { id: 'home', label: 'Home', icon: FaHome },
  { id: 'search', label: 'Search', icon: FaSearch },
  { id: 'library', label: 'Your Library', icon: FaBookOpen },
]

export default function Sidebar({ activePage, onNav, playlists, activePlaylistId, onSelectPlaylist }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">�</div>
        <div>
          <h1>Vibeify</h1>
          <p>Dark music streaming</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className={`nav-button ${activePage === item.id ? 'active' : ''}`}
              onClick={() => onNav(item.id)}
              aria-label={item.label}
            >
              <Icon />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="playlist-menu">
        <h2>Playlists</h2>
        {playlists.map((playlist) => (
          <button
            key={playlist.id}
            className={`playlist-button ${activePlaylistId === playlist.id ? 'selected' : ''}`}
            onClick={() => onSelectPlaylist(playlist.id)}
          >
            <FaListUl />
            <span>{playlist.title}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}
