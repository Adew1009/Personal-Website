import React from "react";
import { Link } from "react-router-dom";
import { ProjectsButton } from "@/components/ProjectsButton";

const HomePage = () => {
  return (
    <>
      <main className="fullpage">
        <div>
          <h1 className="heading text-8xl home-content animated-image">
            Hi, I'm Andrew Dew
          </h1>
          <br></br>
        </div>
        <section className="headingn text-4xl home-content animated-image">
          <article>Full-Stack Software Engineer</article>
        </section>
        <br></br>
        <ProjectsButton />
      </main>
    </>
  );
};

export default HomePage;
