// import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import './Navbar.css'; // Import CSS file for styling

// function Navbar() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showMenu, setShowMenu] = useState(true); // State to manage navbar items visibility

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   // Function to toggle visibility of navbar items based on viewport width
//   const handleResize = () => {
//     if (window.innerWidth < 800) {
//       setShowMenu(false);
//     } else {
//       setShowMenu(true);
//     }
//   };

//   // Add event listener to handle viewport resize
//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     // Cleanup the event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className='navbar'>
//       <nav>
//         <div className="logo">
//           <img src="/logo.jpg" height="80" width="auto" alt="Logo" />
//         </div>
//         {showMenu ? (
//           <ul className="nav-links">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About Us</a></li>
//             {/* <li><a href="#accommodation">Tariff</a></li> */}
//             <li className="dropdown">
//               <a href="#contact" onClick={toggleDropdown}>Tariff</a>
//               {showDropdown && (
//                 <div className="dropdown-content">
//                   <a href="#option1">Accamodation</a>
//                   <a href="#option2">Tariff Details</a>
//                 </div>
//               )}
//             </li>
//             {/* <li><a href="#things-to-do">Things to Do</a></li> */}
//             <li className="dropdown">
//               <a href="#contact" onClick={toggleDropdown}>Activities</a>
//               {showDropdown && (
//                 <div className="dropdown-content">
//                   <a href="#option1">In Kipling</a>
//                   <a href="#option2">Around Kipling</a>
//                 </div>
//               )}
//             </li>
//             <li className="dropdown">
//               <a href="#contact" onClick={toggleDropdown}>Contact Us</a>
//               {showDropdown && (
//                 <div className="dropdown-content">
//                   <a href="#option1">Option 1</a>
//                   <a href="#option2">Option 2</a>
//                   <a href="#option3">Option 3</a>
//                   <a href="#option4">Option 4</a>
//                 </div>
//               )}
//             </li>
//           </ul>
//         ) : (
//           <div className="menu-button-container">
//             <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
//               {/* Hamburger icon for mobile view */}
//               <FontAwesomeIcon icon={faBars} />
//             </button>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }


import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import CSS file for styling
function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(true); // State to manage navbar items visibility

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to toggle visibility of navbar items based on viewport width
  const handleResize = () => {
    if (window.innerWidth < 800) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  // Add event listener to handle viewport resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='navbar'>
      <nav>
        <div className="logo">
          <img src="/logo.jpg" height="80" width="auto" alt="Logo" />
        </div>
        {showMenu ? (
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li className="dropdown">
              <a href="#contact" onClick={toggleDropdown}>Tariff</a>
              {showDropdown && (
                <div className="dropdown-content">
                  {/* <a href="accommodation">Accommodation</a> */}
                  <Link to="/accommodation">Accommodation</Link>
                  <a href="#option2">Tariff Details</a>
                </div>
              )}
            </li>
            <li className="dropdown">
              <a href="#contact" onClick={toggleDropdown}>Activities</a>
              {showDropdown && (
                <div className="dropdown-content">
                  <a href="#option1">In Kipling</a>
                  <a href="#option2">Around Kipling</a>
                </div>
              )}
            </li>
            <li className="dropdown">
              <a href="#contact" onClick={toggleDropdown}>Contact Us</a>
              {showDropdown && (
                <div className="dropdown-content">
                  <a href="#option1">Option 1</a>
                  <a href="#option2">Option 2</a>
                  <a href="#option3">Option 3</a>
                  <a href="#option4">Option 4</a>
                </div>
              )}
            </li>
          </ul>
        ) : (
          <div className="menu-button-container">
            <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
              {/* Hamburger icon for mobile view */}
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
