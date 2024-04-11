import React from 'react';
import './App.css';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="description" content="Jai Bhaarath's website showcasing projects, skills, and interests in software development and technology." />
        <link rel="preload" href="InterDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin />
        <link rel="stylesheet" type="text/css" href="src/app.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Jai Bhaarath</title>
      </head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9JMZVVEVW6"></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-9JMZVVEVW6');
        `}
      </script>
      <body>
        <header>
          <h1 id="my-name">Jai Bhaarath</h1>
        </header>
        <main>
          <div id="my-mail">
            <a href="mailto:jb@jaibhaarath.org">jb@jaibhaarath.org</a>
          </div>
        </main>
        <footer>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/jai-bhaarath" target="_blank" rel="noopener noreferrer">LinkedIn &#x2197;</a>
            <a href="https://www.instagram.com/jaibhaarath" target="_blank" rel="noopener noreferrer">Instagram &#x2197;</a>
            <a href="https://www.twitter.com/jaibz" target="_blank" rel="noopener noreferrer">Twitter &#x2197;</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default App;
