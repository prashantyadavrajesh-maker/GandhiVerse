import "./Gallery.css";
import galleryData from "../../data/galleryData";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2>Photo Gallery</h2>

      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;