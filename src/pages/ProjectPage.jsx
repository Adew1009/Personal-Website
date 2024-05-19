import React from "react";
import calendarImage from "../images/calendar.png";
import budgetImage from "../images/Budgets.png";
import tableImage from "../images/Table.png";
import parkpage from "../images/ParkPage.jpeg";
import findpark from "../images/FindPark.png";
import visitedparks from "../images/visitedparks.png";
import { TBDCarousel } from "@/components/TBDCarousel";
// import { table } from "console";

const ProjectPage = () => {
  return (
    <>
      <br></br>
      <div className="gray-border padded-div">
        <h1 className="text-6xl border-b-4"> Personal Projects </h1>
        <p>
          Below are my current personal project with links the site and Github
          repository
        </p>
      </div>
      <br></br>
      <br></br>

      <div className="gray-border border-b-2 center-content padded-div">
        <h1 className="text-5xl">Transparent Budget Decisions</h1>
        <p>
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
        <h1 className="text-5xl">National Park Planner</h1>
        <img
          className="shadow-xl shadow-slate-600 rounded-2xl w-2/3"
          src={findpark}
          alt="budget table"
        />
        <img
          className="shadow-xl shadow-slate-600 rounded-2xl w-2/3"
          src={visitedparks}
          alt="budget table"
        />{" "}
        <img
          className="shadow-xl shadow-slate-600 rounded-2xl w-2/3"
          src={parkpage}
          alt="budget table"
        />
      </div>
    </>
  );
};

export default ProjectPage;
