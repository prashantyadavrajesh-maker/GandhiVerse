import "./Legacy.css";

function Legacy() {
  const leaders = [
    {
      name: "Dalai Lama",
      image: "/images/legacy/dalai-lama.jpg",
      link: "https://en.wikipedia.org/wiki/14th_Dalai_Lama",
      quote:
        "Gandhi's message of peace and non-violence continues to inspire humanity.",
    },
    {
      name: "Martin Luther King Jr.",
      image: "/images/legacy/martin-luther-king.jpg",
      link: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.",
      quote:
        "Christ gave us the goals and Gandhi the tactics.",
    },
    {
      name: "Nelson Mandela",
      image: "/images/legacy/nelson-mandela.jpg",
      link: "https://en.wikipedia.org/wiki/Nelson_Mandela",
      quote:
        "Gandhi's ideas shaped the struggle for freedom and equality.",
    },
  ];

  return (
    <section id="legacy" className="legacy">
      <h2 className="legacy-title">
        🌍 Gandhi's Global Legacy
      </h2>

      <div className="legacy-grid">
        {leaders.map((leader, index) => (
          <div className="legacy-card" key={index}>
            <img
              src={leader.image}
              alt={leader.name}
            />

            <div className="legacy-content">
              <a
                href={leader.link}
                target="_blank"
                rel="noopener noreferrer"
                className="leader-link"
              >
                <h3>{leader.name}</h3>
              </a>

              <p>{leader.quote}</p>

              <a
                href={leader.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-btn"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Legacy;