import "./Quotes.css";

function Quotes() {
  const quotes = [
    "Be the change that you wish to see in the world.",
    "My life is my message.",
    "An eye for an eye will only make the whole world blind.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  ];

  return (
    <section id="quotes" className="quotes">
      <h2 className="quotes-title">💬 Gandhi Quotes</h2>

      <div className="quotes-grid">
        {quotes.map((quote, index) => (
          <div className="quote-card" key={index}>
            <p>"{quote}"</p>
            <span>— Mahatma Gandhi</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Quotes;