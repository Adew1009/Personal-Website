import { Link } from "react-router-dom";
import { ModeToggle } from "./mode_toggle";

const NavBar = () => {
  return (
    <nav className="items-center justify-between hidden h-max w-full md:flex md:w-auto md:order-1">
      <ul className="flex flex-col font-medium md:p-0 mt-2 pt-2 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0">
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
      </ul>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
