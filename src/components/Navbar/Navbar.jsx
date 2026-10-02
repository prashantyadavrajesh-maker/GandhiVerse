import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">GandhiVerse</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
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
    </nav>
  );
}

export default Navbar;