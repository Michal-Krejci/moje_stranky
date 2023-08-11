import "./Navbar.css";
import logo from "../images/logo3.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    return setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };
  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="uvod"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
          onClick={closeMenu}
          className="logo"
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="uvod"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              onClick={closeMenu}
            >
              Úvod
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="tech-stack"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              onClick={closeMenu}
            >
              Tech-stack
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              onClick={closeMenu}
            >
              Vzdělání a Praxe
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="kontakt"
              spy={true}
              smooth={true}
              offset={-85}
              duration={800}
              onClick={closeMenu}
            >
              Kontakt
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="ukazky"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              onClick={closeMenu}
            >
              Ukázky
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
