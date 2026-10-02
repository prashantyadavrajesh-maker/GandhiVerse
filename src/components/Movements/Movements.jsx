import "./Movements.css";
import movementData from "../../data/movementData";

function Movements() {
  return (
    <section className="movements" id="movements">
      <h2>Major Freedom Movements</h2>

      <div className="movements-grid">
        {movementData.map((item) => (
          <div className="movement-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="movement-content">
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="movement-link"
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

export default Movements;