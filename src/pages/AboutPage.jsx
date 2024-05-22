const AboutPage = () => {
  return (
    <>
      <main className="fullpage">
        <div>
          <h1 className="heading text-4xl home-content animated-image">
            Recent graduate from Code Platoon's Full-Stack Software Engineering
            Immersive Course with Honors{" "}
          </h1>{" "}
          <a
            className="home-content"
            title="Code Platoon"
            href="https://www.codeplatoon.org/full-stack/"
            target="_blank"
          >
            <img
              height="100"
              width="200"
              src="https://www.codeplatoon.org/wp-content/uploads/2018/10/code-platoon-logo-black.png"
              alt="HTML icon"
            />
          </a>
          <br></br>
        </div>
        <section className="heading text-4xl home-content animated-image2">
          <br></br>
          <article>
            <br></br>A Special Forces Veteran with a Background in
            Communications and Project Management
          </article>
          <a
            className="home-content"
            title="Code Platoon"
            href="https://www.codeplatoon.org/full-stack/"
            target="_blank"
          >
            <img
              height="100"
              width="125"
              src="https://www.soc.mil/USASFC/Images/5th/vietnam%20w%20crest.png"
              alt="HTML icon"
            />
          </a>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
