import dew1 from "../images/dew1.jpg";
import dew2 from "../images/dew2.jpg";
import dew3 from "../images/dew3.jpg";
import dew4 from "../images/dew4.jpeg";
import dew5 from "../images/dew5.jpeg";
import dew6 from "../images/dew6.jpeg";
import dew7 from "../images/dew7.jpg";
import code1 from "../images/CodePlatoon1.png";
import code2 from "../images/CodePlatoon2.png";
import { DewCarousel } from "@/components/DewCarousel";
import { CodeCarousel } from "@/components/CodeCarousel";

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
          <h2>
            {" "}
            The rigorous full-time software engineering program at Code Platoon
            specialized in JavaScript, Python, Django, Microsoft Visual Studio
            Code, GitHub, Agile Methodologies, and React.js, with a focus on
            remote learning to develop proficiency in modern software
            development practices and tools.
          </h2>
          <CodeCarousel code1={code1} code2={code2}></CodeCarousel>
          <br></br>
        </div>
        <section className="SF">
          <section className="heading text-4xl home-content animated-image2">
            <br></br>
            <h1>
              <br></br>A Special Forces Veteran with a Background in
              Communications and Project Management
            </h1>
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
          <h2>
            {" "}
            I transitioned out of the Army at the top position, Operations
            Sergeant, for a Special Forces Soldier (Green Beret). I worked in a
            highly prized unit of Special Forces known as the Jedburghs. As a
            Jedburgh leader I was trusted to work independant from direct
            supervision to achieve goals and manage programs. The mission of
            Jedburghs closely translates to a project management consultant and
            relied heavily of building relationshships and effective
            communitcations.
          </h2>
          <DewCarousel
            dew1={dew1}
            dew2={dew2}
            dew3={dew3}
            dew4={dew4}
            dew5={dew5}
            dew6={dew6}
            dew7={dew7}
          ></DewCarousel>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
