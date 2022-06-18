import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Logo from "../assets/images/Vodafone_2017_logo.svg.webp";
import "../assets/style/navbar.scss";

const Navbar = () => {
  const { theme, setTheme } = useContext(TodoContext);
  return (
    <div>
      <header>
        <nav className={`navbar ${theme === false ? "light" : "soft-night"}`}>
          <div>
            <a
              href="https://www.vodafone.com.tr/"
              rel="nofollow"
              target="_blank"
            >
              <img className="image" src={Logo} alt="vodafone" />
            </a>
          </div>
          {theme === false ? (
            <WbSunnyIcon onClick={() => setTheme(true)} />
          ) : (
            <Brightness2Icon onClick={() => setTheme(false)} />
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
