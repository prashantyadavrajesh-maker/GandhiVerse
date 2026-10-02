import "./VideoLibrary.css";

function VideoLibrary() {
  const videos = [
    {
      title: "Dandi March Journey",
      src: "/video/dandi-march-journey.mp4",
      desc: "Experience Gandhi Ji's historic Dandi March of 1930.",
    },
    {
      title: "Gandhi Documentary",
      src: "/video/gandhi-documentary.mp4",
      desc: "A documentary covering Gandhi's life and philosophy.",
    },
    {
      title: "Gandhi Inspirational Speeches",
      src: "/video/gandhi-inspirational-speeches.mp4",
      desc: "Powerful speeches and messages of Mahatma Gandhi.",
    },
  ];

  return (
    <section id="videos" className="video-library">
      <h2 className="section-title">🎬 Gandhi Video Library</h2>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <video controls preload="metadata">
              <source src={video.src} type="video/mp4" />
            </video>

            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoLibrary;