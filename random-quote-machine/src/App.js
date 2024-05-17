import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div id="quote-box" className="container">
      <div className="card">
        <div className="card-body">
          <p id="text">{quote}</p>
          <p id="author">- {author}</p>
          <div className="buttons">
            <button
              id="new-quote"
              className="btn btn-primary"
              onClick={fetchQuote}
            >
              New Quote
            </button>
            <a
              id="tweet-quote"
              href="#"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={tweetQuote}
            >
              Tweet Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
