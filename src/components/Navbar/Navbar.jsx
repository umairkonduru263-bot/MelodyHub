import { FaMusic } from 'react-icons/fa'

export default function Navbar({ activePage }) {
  return (
    <header className="navbar">
      <div>
        <span className="navbar-pill">{activePage === 'home' ? 'Home' : activePage === 'search' ? 'Search' : 'Library'}</span>
        <h2>Discover your next vibe</h2>
      </div>
      <div className="navbar-meta">
        <FaMusic />
        <span>Streaming now</span>
      </div>
    </header>
  )
}
