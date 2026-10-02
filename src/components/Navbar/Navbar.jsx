import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        GandhiVerse
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#movements">Movements</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#books">Books</a></li>
        <li><a href="#legacy">Legacy</a></li>
        <li><a href="#museums">Museums</a></li>
        <li><a href="#quiz">Quiz</a></li>
        <li><a href="#developer">Developer</a></li>
      </ul>

      <div className="developer-info">
        <img
          src="/images/developer/prashant.jpeg"
          alt="Prashant Yadav"
          className="navbar-profile"
        />

        <span className="developer-name">
          Developed by Prashant Yadav
        </span>
      </div>
    </nav>
  );
}

export default Navbar;