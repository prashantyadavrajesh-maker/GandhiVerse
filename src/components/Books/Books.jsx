import "./Books.css";

function Books() {
  const books = [
    {
      title: "Constructive Programme",
      image: "/images/books/constructive-programme.jpg",
      pdf: "/images/books/constructive-programme.pdf",
    },
    {
      title: "My Experiments With Truth",
      image: "/images/books/experiments-with-truth.jpg",
      pdf: "/images/books/experiments-with-truth.pdf",
    },
    {
      title: "Hind Swaraj",
      image: "/images/books/hind-swaraj.jpg",
      pdf: "/images/books/hind-swaraj.pdf",
    },
    {
      title: "Satyagraha in South Africa",
      image: "/images/books/satyagraha-south-africa.jpg",
      pdf: "/images/books/satyagraha-south-africa.pdf",
    },
  ];

  return (
    <section id="books" className="books">
      <h2 className="books-title">📚 Books by Mahatma Gandhi</h2>

      <div className="books-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.image} alt={book.title} />

            <div className="book-content">
              <h3>{book.title}</h3>

              <a
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="book-btn"
              >
                📖 Read Book
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Books;