import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  async function fetchQuote() {
    const res = await fetch("https://quote-generator-api-six.vercel.app/api/quotes/random");
    const data = await res.json();
    setQuote({ text: data.content, author: data.author });
    const colors = [
      // 🟢 Greens
      "#1abc9c", "#16a085", "#2ecc71", "#27ae60",

      // 🔵 Blues
      "#3498db", "#2980b9", "#48dbfb", "#54a0ff", "#00d2d3",

      // 🟣 Purples
      "#9b59b6", "#8e44ad", "#5f27cd", "#833471",

      // 🔴 Reds
      "#e74c3c", "#c0392b", "#ff6b6b", "#ffb8b8",

      // 🟠 Oranges & Yellows
      "#f39c12", "#e67e22", "#d35400", "#feca57", "#ff793f",

      // ⚫ Grays & Darks
      "#34495e", "#2c3e50", "#95a5a6", "#7f8c8d", "#576574", "#222f3e",

      // 🌸 Pinks
      "#ff9ff3"
    ];
    let color = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty("--color", color);
  }

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) fetchQuote();
    }, 0);
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div id="wrapper">
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"></i>
          <span id="text">{quote.text}</span>
        </div>
        <div className="quote-author">
          <>- </>
          <span id="author">{quote.author}</span>
        </div>
        <div className="buttons">
          <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22If%20you%20want%20to%20lift%20yourself%20up%2C%20lift%20up%20someone%20else.%22%20Booker%20T.%20Washington">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Booker%20T.%20Washington&amp;content=If%20you%20want%20to%20lift%20yourself%20up%2C%20lift%20up%20someone%20else.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button">
            <i className="fab fa-tumblr"></i>
          </a>
          <button onClick={fetchQuote} className="button" id="new-quote">New quote</button>
        </div>
      </div>
    </div>

  );
}

export default App;
