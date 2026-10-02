import "./Timeline.css";
import { timelineData } from "../../data/timelineData";

function Timeline() {
  return (
    <section className="timeline" id="timeline">
      <h2>Gandhi's Journey Timeline</h2>

      <div className="timeline-container">
        {timelineData.map((item) => (
          <div className="timeline-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="timeline-content">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;