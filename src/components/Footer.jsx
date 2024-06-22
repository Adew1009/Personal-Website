export default function Footer() {
  return (
    <>
      <footer className="nav-footer-background-color">
        <div className="w-full mx-auto flex justify-center mt-3">
          <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="no-underline text-gray-400 hover:underline">
              Andrew Dew
            </a>{" "}
            All Rights Reserved.
          </span>
          <ul className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="/"
                className="no-underline  text-gray-400 hover:underline me-4 md:me-6"
              >
                &emsp; Home
              </a>
            </li>
            <li>
              <a
                href="/about/"
                className="no-underline text-gray-400 hover:underline me-4 md:me-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="no-underline text-gray-400 hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
// import { Link } from "react-router-dom";
// import { ModeToggle } from "./mode_toggle";

// const NavBar = () => {
//   return (
//     <nav>
//       {/* <nav className="bg-gray-800 p-4 shadow-md"> */}
//       <div className="container mx-auto px-6">
//         <div className="flex justify-between items-center">
//           <div className="text-white font-bold text-lg">
//             {/* Logo or Brand Name */}
//             My Website
//           </div>
//           <div className="hidden md:flex space-x-4">
//             <Link
//               to="/"
//               className="hover:text-gray-300 transition duration-150 ease-in-out"
//             >
//               Home Page
//             </Link>
//             <Link
//               to="/project/"
//               className="hover:text-gray-300 transition duration-150 ease-in-out"
//             >
//               Projects
//             </Link>
//             <Link
//               to="/about/"
//               className="hover:text-gray-300 transition duration-150 ease-in-out"
//             >
//               About Me
//             </Link>
//           </div>
//           <div className="md:hidden">
//             {/* Hamburger Menu Icon */}
//             <button className="focus:outline-none">
//               <svg
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 010-2zm0 6h16a1 1 0 110 2H4a1 1 0 010-2z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//           <div className="hidden md:block space-x-4">
//             <a
//               href="https://drive.google.com/file/d/1ZczosSwEbLCMnCl2B6bCUmDoJKXPYb_g/view?usp=drive_link"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-300 transition duration-150 ease-in-out"
//             >
//               Resume
//             </a>
//             <a
//               title="LinkedIn"
//               href="https://www.linkedin.com/in/andrew-dew/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//             >
//               LinkedIn
//             </a>
//             <a
//               title="GitHub"
//               href="https://github.com/Adew1009"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="md:hidden">
//         {/* Mobile Navigation Links */}
//         <div className="pt-2 pb-3 space-y-1">
//           <Link
//             to="/"
//             className="block py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-700"
//           >
//             Home Page
//           </Link>
//           <Link
//             to="/project/"
//             className="block py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-700"
//           >
//             Projects
//           </Link>
//           <Link
//             to="/about/"
//             className="block py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-700"
//           >
//             About Me
//           </Link>
//         </div>
//       </div>
//       <div>
//         <ModeToggle />
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
