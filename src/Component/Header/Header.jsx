import "./Header.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Logo from "../../assets/HH_Logo.png";
import { useAuth } from "../../hooks/useAuth";

let Header = () => {
  let { accessToken } = useAuth();
  let [isMobile, setisMobile] = useState(false);
  let [autoClosecomponent, setautoClosecomponent] = useState(false);
  let [isMinWidthReached, setIsMinWidthReached] = useState(
    window.innerWidth >= 964
  );
  let [colorChange, setcolorChange] = useState(false);

  function showSwitch() {
    setautoClosecomponent(!autoClosecomponent);
    setisMobile(!isMobile);
  }

  function autoClose() {
    setautoClosecomponent(false);
    setisMobile(false);
  }

  useEffect(() => {
    const handleResize = () => {
      const minWidthReached = window.innerWidth >= 964;
      setIsMinWidthReached(minWidthReached);
      setisMobile(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMinWidthReached]);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setcolorChange(true);
    } else {
      setcolorChange(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className={colorChange ? "stickyy active" : "stickyy"}>
        <div className="Nav-bar">
          <div className="Nav-logo-div">
            <Link to="/">
              <img src={Logo} className="h-[6vh]" />
            </Link>
          </div>

          <ul className={isMobile ? "Nav-ul-Active" : "Nav-ul"}>
            <li className="Nav-li" id="1">
              <Link to="/gallery" className="Nav-a" onClick={() => autoClose()}>
                Gallery View
              </Link>
            </li>

            <li className="Nav-li" id="2">
              <Link to="/about" className="Nav-a" onClick={() => autoClose()}>
                About us
              </Link>
            </li>
            <li className="Nav-li" id="3">
              <Link to="/contact" className="Nav-a" onClick={() => autoClose()}>
                Contact
              </Link>
            </li>

            <div className="a">
              {accessToken ? (<Link to="/dashboard">
                <button className="btn learn-more" onClick={() => autoClose()}>
                  <span className="btnn circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="btnn btn-text" >DashBoard</span>
                </button>
              </Link>):(<Link to="/login">
                <button className="btn learn-more" onClick={() => autoClose()}>
                  <span className="btnn circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="btnn btn-text" >Login</span>
                </button>
              </Link>)}

            </div>
          </ul>

          <button className="Nav-bar-icon" onClick={() => showSwitch()}>
            {isMobile ? (
              <AiOutlineClose className="Nav-Icon-Bar" />
            ) : (
              <AiOutlineMenu className="Nav-Icon-Cross" />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
