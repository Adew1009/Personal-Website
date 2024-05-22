import { Link } from "react-router-dom";
import { ModeToggle } from "./mode_toggle";

const NavBar = () => {
  return (
    <nav className="items-center justify-between hidden h-max w-full md:flex md:w-auto md:order-1">
      <ul className="flex flex-col font-xl md:flex-row md:mt-0">
        <li>
          <Link
            to="/"
            className="shadow-md rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Home Page
          </Link>
        </li>
        <li>
          <Link
            to="/project/"
            className="shadow-md rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about/"
            className="shadow-md rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            About
          </Link>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1ZczosSwEbLCMnCl2B6bCUmDoJKXPYb_g/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Resume
          </a>
        </li>
      </ul>
      <span className="flex space-x-4">
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/andrew-dew/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            height="30"
            width="30"
            src="https://skillicons.dev/icons?i=linkedin"
            alt="LinkedIn icon"
          />
        </a>
        <a
          title="GitHub"
          href="https://github.com/Adew1009"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            height="30"
            width="30"
            src="https://skillicons.dev/icons?i=github"
            alt="GitHub icon"
          />
        </a>
      </span>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
