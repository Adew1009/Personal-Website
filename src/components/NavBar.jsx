// import { Link } from "react-router-dom";
// import { ModeToggle } from "./mode_toggle";

// const NavBar = () => {
//   return (
//     <nav className="items-center justify-between hidden h-max w-full md:flex md:w-auto md:order-1">
//       <ul className="flex flex-col font-xl md:flex-row md:mt-0">
//         <li>
//           <Link
//             to="/"
//             className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
//           >
//             Home Page
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/project/"
//             className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
//           >
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/about/"
//             className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
//           >
//             {" "}
//             About Me
//           </Link>
//         </li>
//         <li>
//           <a
//             href="https://drive.google.com/file/d/1ZczosSwEbLCMnCl2B6bCUmDoJKXPYb_g/view?usp=drive_link"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
//           >
//             Resume
//           </a>
//         </li>
//       </ul>
//       <span className="flex space-x-4">
//         <a
//           title="LinkedIn"
//           href="https://www.linkedin.com/in/andrew-dew/"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="LinkedIn"
//         >
//           <img
//             height="50"
//             width="50"
//             src="https://skillicons.dev/icons?i=linkedin"
//             alt="LinkedIn icon"
//           />
//         </a>

//         <h1> </h1>
//         <a
//           title="GitHub"
//           href="https://github.com/Adew1009"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="GitHub"
//         >
//           <img
//             height="50"
//             width="50"
//             src="https://skillicons.dev/icons?i=github"
//             alt="GitHub icon"
//           />
//         </a>
//       </span>
//       <div>
//         <ModeToggle />
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode_toggle";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-lg">
            {/* Logo or Brand Name */}
            My Website
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-150 ease-in-out"
            >
              Home Page
            </Link>
            <Link
              to="/project/"
              className="hover:text-gray-300 transition duration-150 ease-in-out"
            >
              Projects
            </Link>
            <Link
              to="/about/"
              className="hover:text-gray-300 transition duration-150 ease-in-out"
            >
              About Me
            </Link>
          </div>
          <div className="md:hidden">
            {/* Hamburger Menu Icon */}
            <button className="focus:outline-none">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 010-2zm0 6h16a1 1 0 110 2H4a1 1 0 010-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:block space-x-4">
            <a
              href="https://drive.google.com/file/d/1ZczosSwEbLCMnCl2B6bCUmDoJKXPYb_g/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-150 ease-in-out"
            >
              Resume
            </a>
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/andrew-dew/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              title="GitHub"
              href="https://github.com/Adew1009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        {/* Mobile Navigation Links */}
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-700"
          >
            Home Page
          </Link>
          <Link
            to="/project/"
            className="block py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-700"
          >
            Projects
          </Link>
          <Link
            to="/about/"
            className="block py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-700"
          >
            About Me
          </Link>
        </div>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
