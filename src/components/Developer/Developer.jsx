import "./Developer.css";

function Developer() {
  return (
    <section id="developer" className="developer">
      <div className="developer-overlay">

        <img
          src="/images/developer/prashant-yadav.jpg"
          alt="Prashant Yadav"
          className="developer-img"
        />

        <h1>Prashant Yadav</h1>

        <h3>Full Stack Developer • DSA Enthusiast</h3>

        <p>
          B.Tech Information Technology (2027)
          <br />
          Institute of Engineering & Technology, Ayodhya
          <br />
          Passionate about Web Development, DSA and Building Real-World Projects.
        </p>

        <div className="social-links">

          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/prashant-yadav-943456303/",
                "_blank"
              )
            }
          >
            💼 LinkedIn
          </button>

          <button
            onClick={() =>
              window.open(
                "https://www.instagram.com/prashant6959yadav/",
                "_blank"
              )
            }
          >
            📸 Instagram
          </button>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/917234980130",
                "_blank"
              )
            }
          >
            💬 WhatsApp
          </button>

        </div>
      </div>
    </section>
  );
}

export default Developer;