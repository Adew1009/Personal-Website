// import { Link } from "react-router-dom";
// import { ModeToggle } from "./mode_toggle";

// const NavBar = () => {
//   return (
//     <div className="container mx-auto px-6">
//       <div className="flex justify-around items-center">
//         <nav className="items-center justify-between hidden h-max w-full md:flex md:w-auto md:order-1">
//           <div style={{ display: "flex", justifyContent: "flex-end" }}>
//             <ModeToggle
//               style={{ display: "flex", justifyContent: "flex-end" }}
//             />
//           </div>
//           <ul className="flex flex-col font-xl md:flex-row md:mt-0">
//             <li>
//               <Link
//                 to="/"
//                 className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
//               >
//                 Home Page
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/project/"
//                 className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
//               >
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about/"
//                 className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
//               >
//                 {" "}
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <a
//                 // href="https://drive.google.com/file/d/1ZczosSwEbLCMnCl2B6bCUmDoJKXPYb_g/view?usp=drive_link"
//                 href="https://drive.google.com/file/d/1t8kHeEdChN7kfIsDKF3W80z6ev4cuqiM/view"
//                 rel="noopener noreferrer"
//                 className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
//               >
//                 Resume
//               </a>
//             </li>
//           </ul>
//           <span className="flex space-x-4">
//             <a
//               title="LinkedIn"
//               href="https://www.linkedin.com/in/andrew-dew/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//             >
//               <img
//                 height="50"
//                 width="50"
//                 src="https://skillicons.dev/icons?i=linkedin"
//                 alt="LinkedIn icon"
//               />
//             </a>

//             <a
//               title="GitHub"
//               href="https://github.com/Adew1009"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//             >
//               <img
//                 height="50"
//                 width="50"
//                 src="https://skillicons.dev/icons?i=github"
//                 alt="GitHub icon"
//               />
//             </a>
//           </span>
//           <h1>
//             <br></br>{" "}
//           </h1>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import { Link } from "react-router-dom";
import { ModeToggle } from "./mode_toggle";

const NavBar = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-around items-center">
        <nav className="items-center justify-between hidden h-max w-full md:flex md:w-auto md:order-1 p-4">
          {" "}
          {/* Existing padding */}
          <div className="flex justify-end mr-4">
            {" "}
            {/* Existing margin-right */}
            <ModeToggle />
          </div>
          <ul className="flex flex-col font-xl md:flex-row md:mt-0 mb-4 md:mb-0 md:space-y-0 md:space-x-4">
            {" "}
            {/* Added margin-bottom here */}
            <li>
              <Link
                to="/"
                className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Home Page
              </Link>
            </li>
            <li>
              <Link
                to="/project/"
                className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about/"
                className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {" "}
                About Me
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1_42gZ71cP_lf3E5lH8fcQVb5kje9qW8O/view?usp=drive_link"
                rel="noopener noreferrer"
                className="shadow-md text-3xl rounded-full pt-2 pb-2 pr-4 pl-4 no-underline flex justify-center text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Resume
              </a>
            </li>
            {/* </ul> */}
            {/* <span className="flex flex-col font-xl md:flex-row md:mt-0 mb-4 md:mb-0 md:space-y-0 md:space-x-4"> */}
            <li>
              <a
                title="LinkedIn"
                href="https://www.linkedin.com/in/andrew-dew/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  height="50"
                  width="50"
                  src="https://skillicons.dev/icons?i=linkedin"
                  alt="LinkedIn icon"
                />
              </a>
            </li>
            <li>
              <a
                title="GitHub"
                href="https://github.com/Adew1009"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img
                  height="50"
                  width="50"
                  src="https://skillicons.dev/icons?i=github"
                  alt="GitHub icon"
                />
              </a>
            </li>
            {/* </span> */}
          </ul>
          <h1>
            <br></br>{" "}
          </h1>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
