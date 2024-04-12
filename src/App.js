import React from 'react';
import './App.css';

function App() {
  return (
    <body>
      <div className="content">
        <p id="my-name">Jai Bhaarath</p>
        <a id="my-mail" href="mailto:jb@jaibhaarath.org">jb@jaibhaarath.org</a>
      </div>
      <footer>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jai-bhaarath" target="_blank" rel="noopener noreferrer">LinkedIn <span class="arrow">&#x2197;</span></a>
          <a href="https://www.instagram.com/jaibhaarath" target="_blank" rel="noopener noreferrer">Instagram <span class="arrow">&#x2197;</span></a>
          <a href="https://www.twitter.com/jaibz" target="_blank" rel="noopener noreferrer">Twitter <span class="arrow">&#x2197;</span></a>
        </div>
      </footer>
    </body>
  );
}

export default App;
