import "./Header.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

let Header = () => {
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
              <p className="text-xl">Logo</p>
            </Link>
          </div>

          <ul className={isMobile ? "Nav-ul-Active" : "Nav-ul"}>
            <li className="Nav-li" id="1">
              <Link to="/" className="Nav-a" onClick={() => autoClose()}>
                Pricing
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
              <Link to="/Login">
                <button className="btn learn-more">
                  <span className="btnn circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="btnn btn-text">Learn More</span>
                </button>
              </Link>
            </div>

            {/* <div className="Comb-Btn-Container">
              <div className="Login-Btn-Container-Mobile">
                <Link to="/Login" onClick={() => showSwitch()}>
                  <button className="Login-Btn-Style">
                    <AiOutlineLogin />
                    <h6 className="Btn-Text">Login</h6>
                  </button>
                </Link>
              </div>
            </div> */}
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
