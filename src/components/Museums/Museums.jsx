import "./Museums.css";

function Museums() {
  const museums = [
    {
      name: "Gandhi Smriti",
      image: "/images/museums/gandhi-smriti.jpg",
      location: "New Delhi, India",
      link: "https://en.wikipedia.org/wiki/Gandhi_Smriti",
    },
    {
      name: "National Gandhi Museum",
      image: "/images/museums/national-gandhi-museum.jpg",
      location: "New Delhi, India",
      link: "https://en.wikipedia.org/wiki/National_Gandhi_Museum",
    },
    {
      name: "Sabarmati Ashram",
      image: "/images/museums/sabarmati-ashram.jpg",
      location: "Ahmedabad, Gujarat",
      link: "https://en.wikipedia.org/wiki/Sabarmati_Ashram",
    },
  ];

  return (
    <section id="museums" className="museums">
      <h2 className="museum-title">
        🏛 Gandhi Museums & Memorials
      </h2>

      <div className="museum-grid">
        {museums.map((museum, index) => (
          <div className="museum-card" key={index}>
            <img
              src={museum.image}
              alt={museum.name}
            />

            <div className="museum-content">
              <h3>{museum.name}</h3>
              <p>{museum.location}</p>

              <a
                href={museum.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
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

export default Museums;