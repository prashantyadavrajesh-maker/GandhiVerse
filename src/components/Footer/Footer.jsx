import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h2>GandhiVerse</h2>
          <p>
            Exploring the life, legacy, movements, books,
            museums and inspiration of Mahatma Gandhi.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#timeline">Timeline</a>
          <a href="#movements">Movements</a>
          <a href="#gallery">Gallery</a>
          <a href="#videos">Videos</a>
          <a href="#books">Books</a>
          <a href="#quiz">Quiz</a>
        </div>

        <div className="footer-contact">
          <h3>Developer</h3>
          <p>Prashant Yadav</p>

          <a
            href="https://www.linkedin.com/in/prashant-yadav-943456303/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/prashant6959yadav/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/917234980130"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 GandhiVerse | Developed with ❤️ by Prashant Yadav
        </p>
      </div>
    </footer>
  );
}

export default Footer;