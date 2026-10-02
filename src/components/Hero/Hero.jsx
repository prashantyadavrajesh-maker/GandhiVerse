import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h3>THE JOURNEY OF</h3>

          <h1>
            MAHATMA <br />
            GANDHI
          </h1>

          <h2>From Porbandar to a Better World</h2>

          <p>"My life is my message."</p>

          <div className="hero-buttons">
            <a href="#timeline" className="btn-primary">
              Explore Journey →
            </a>

            <button
              className="btn-secondary"
              onClick={() =>
                window.open("/video/1.mp4", "_blank")
              }
            >
              ▶ Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;