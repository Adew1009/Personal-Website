import { Link } from "react-router-dom";
import { ModeToggle } from "./mode_toggle";

const NavBar = () => {
  return (
    <nav className="items-center justify-between hidden h-max w-full md:flex md:w-auto md:order-1">
      <ul className="flex flex-col font-xl   md:flex-row md:mt-0">
        <li>
          <Link
            to="/"
            // className="shadow-md rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-gray-900 hover:bg-orange-100"
          >
            Home Page
          </Link>
        </li>
        <li>
          <Link
            to="/about/"
            // className="shadow-md rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-gray-900 hover:bg-orange-100"
          >
            &emsp; &emsp; About
          </Link>
        </li>
        <li>
          <Link
            to="https://drive.google.com/file/d/1ZczosSwEbLCMnCl2B6bCUmDoJKXPYb_g/view?usp=drive_link"
            // className="shadow-md rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-gray-900 hover:bg-orange-100"
          >
            &emsp; &emsp; Resume
          </Link>
        </li>
      </ul>{" "}
      <div className="">
        <a
          title="VS Code"
          href="https://www.linkedin.com/in/andrew-dew/"
          target="blank"
        >
          <img
            height="30"
            width="30"
            src="https://skillicons.dev/icons?i=linkedin"
            alt="LinkedIn icon"
          />
        </a>
        <a title="VS Code" href="https://github.com/Adew1009" target="blank">
          <img
            height="30"
            width="30"
            src="https://skillicons.dev/icons?i=github"
            alt="LinkedIn icon"
          />
        </a>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
