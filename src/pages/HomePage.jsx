import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main>
        <div>
          <h1 className="heading text-8xl home-content">Hi, I'm Andrew Dew</h1>
          <br></br>
        </div>
        <section className="heading home-content">
          <article>I am Full-Stack Software Engineer</article>
        </section>
        <iframe
          src="/Users/andrew-dew/projects/Personal-Website/src/components/Andrew Dew Resume.pdf"
          width="100%"
          height="600px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </main>
    </>
  );
};

export default HomePage;
