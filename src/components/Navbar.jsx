import '../styles/Navbar.css'

function Navbar({ darkMode, setDarkMode }) {

  return (
    <nav>

      <h2>Dewansh Ranbir</h2>

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

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

    </nav>
  )
}

export default Navbar