import '../styles/Navbar.css'

function Navbar({ darkMode, setDarkMode }) {

  return (
    <nav>

      <div className="nav-top">

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <h2>Dewansh Ranbir</h2>

        <div></div>

      </div>

      <ul>

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar