import React from "react";
import calendarImage from "../images/calendar.png";
import budgetImage from "../images/Budgets.png";
import tableImage from "../images/Table.png";
import parkpage from "../images/ParkPage.jpeg";
import findpark from "../images/FindPark.png";
import visitedparks from "../images/visitedparks.png";
import { TBDCarousel } from "@/components/TBDCarousel";
import { NPPCarousel } from "@/components/NPPCarousel";
// import { table } from "console";

const ProjectPage = () => {
  return (
    <>
      <br></br>
      <div className="gray-border padded-div">
        <h1 className="text-8xl border-b-4"> Personal Projects </h1>
        <p className="text-4xl">
          Below are my current personal project with links the site and Github
          repository
        </p>
      </div>
      <br></br>
      <br></br>

      <div className="gray-border border-b-2 center-content padded-div">
        <h1 className="text-7xl">Transparent Budget Decisions</h1>
        <div class="icon-container text-center">
          <a
            title="VS Code"
            href="https://code.visualstudio.com"
            target="_blank"
          >
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=vscode"
              alt="VSCode icon"
            />
          </a>
          <a title="GitHub" href="https://github.com" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub icon"
            />
          </a>
          <a title="Git" href="https://git-scm.com" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=git"
              alt="git icon"
            />
          </a>
          <a
            title="Firebase"
            href="https://firebase.google.com/"
            target="_blank"
          >
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=firebase"
              alt="firebase icon"
            />
          </a>
          <a
            title="JavaScript"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=javascript"
              alt="javascript icon"
            />
          </a>
          <a
            title="HTML"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
          >
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=html"
              alt="HTML icon"
            />
          </a>
          <a
            title="CSS"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
          >
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=css"
              alt="css icon"
            />
          </a>
          <a title="Tailwind" href="https://tailwindcss.com/" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=tailwind"
              alt="tailwind icon"
            />
          </a>
          <a title="Vite" href="https://vitejs.dev/guide/" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=vite"
              alt="vite icon"
            />
          </a>
          <a title="React" href="https://react.dev" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=react"
              alt="react icon"
            />
          </a>
          <a title="shadcn/ui" href="https://ui.shadcn.com/" target="_blank">
            <img
              className="rounded-image"
              height="55"
              width="55"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAAAUElEQVR4Ae3RAQbAQAxE0QXYM4e5Ro7zrxQUgJRCoFCiaPMO8A2zxnhKErAamVlmuvsUf1vcewPNG49LczEiPlmU1FUswO3XVewC1NcvG+MEvqR7x4wP3WYAAAAASUVORK5CYII="
              alt="shadcn icon"
            />
          </a>
        </div>
        <p className="text-4xl">
          This is a personal finance tracker developed using React JS, Tailwind
          CSS, shad/cn, React-Bootstrap, React-Calendar, and the OpenAI API.
        </p>

        <a
          href="https://transparent-budget-decisions.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-md rounded-full pt-2 pb-2 pr-4 pl-4 underline flex justify-center text-blue dark:text-blue hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Site Link
        </a>
        <TBDCarousel
          tableImage={tableImage}
          calendarImage={calendarImage}
          budgetImage={budgetImage}
        />
      </div>
      <br></br>
      <div className="gray-border border-b-2 text-center center-content padded-div">
        <h1 className="text-7xl">National Park Planner</h1>
        <div class="icon-container text-center">
          <a
            title="VS Code"
            href="https://code.visualstudio.com"
            target="_blank"
          >
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=vscode"
              alt="VSCode icon"
            />
          </a>
          <a title="GitHub" href="https://github.com" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub icon"
            />
          </a>
          <a title="Git" href="https://git-scm.com" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=git"
              alt="git icon"
            />
          </a>
          <a title="Python" href="https://docs.python.org/3/" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=python"
              alt="python icon"
            />
          </a>
          <a
            title="JavaScript"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=javascript"
              alt="javascript icon"
            />
          </a>
          <a
            title="HTML"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
          >
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=html"
              alt="HTML icon"
            />
          </a>
          <a
            title="CSS"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
          >
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=css"
              alt="css icon"
            />
          </a>
          <a title="Tailwind" href="https://tailwindcss.com/" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=tailwind"
              alt="tailwind icon"
            />
          </a>
          <a title="Vite" href="https://vitejs.dev/guide/" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=vite"
              alt="vite icon"
            />
          </a>
          <a title="React" href="https://react.dev" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=react"
              alt="react icon"
            />
          </a>
          <a title="Bootstrap" href="https://getbootstrap.com/" target="_blank">
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=bootstrap"
              alt="bootstrap icon"
            />
          </a>
          <a
            title="postgres"
            href="https://www.postgresql.org/"
            target="_blank"
          >
            <img
              height="55"
              width="55"
              src="https://skillicons.dev/icons?i=postgres"
              alt="postgrewss icon"
            />
          </a>
        </div>
        <p className="text-4xl">
          The National Park Planner is a one-stop destination to plan and
          remember your visits to US National Parks. The application uses token
          authentication through a username and password to log entries and
          conditionally display user data. The application incorporates the
          National Park Service and Mapbox APIs.
        </p>
        <NPPCarousel
          parkpage={parkpage}
          findpark={findpark}
          visitedparks={visitedparks}
        />
      </div>
    </>
  );
};

export default ProjectPage;
