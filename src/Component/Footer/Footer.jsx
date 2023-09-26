import "./Footer.css";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="py-20 bg-[#fff] text-[#040405] bg-footer relative">
        <img
          src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/themes/gymat/assets/element/footer-2.png"
          className="absolute bottom-0"
        />
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-evenly relative z-[9999]">
            <div className="relative z-[9999] container-1 w-full lg:w-[25%] bg-footer-holder h-[100%]">
              <ul className="">
                <p>
                  Elevate your fitness journey with H2H Premium Gym. Top-tier equipment, expert trainers, and exclusive perks for an unparalleled workout experience
                </p>

                <div className="flex justify-start gap-5 py-5 w-[100%]">
                  <span className="bg-[#efefef] rounded-full p-3">
                    <AiOutlineInstagram style={{ color: "#000" }} />
                  </span>
                  <span className="bg-[#efefef] rounded-full p-3">
                    <AiOutlineInstagram style={{ color: "#000" }} />
                  </span>
                  <span className="bg-[#efefef] rounded-full p-3">
                    <AiOutlineInstagram style={{ color: "#000" }} />
                  </span>
                </div>
              </ul>
            </div>
            <div className="relative z-[9999] container-2 w-full lg:w-[25%]">
              <h3 className="footer-heading">Quick Links</h3>
              <span className="bg-[var(--primary-color)] w-10 h-1 my-5"></span>
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About us</li>
                </Link>
                <Link to="/gallery">
                  <li>Gallery View</li>
                </Link>
                <Link to="/error">
                  <li>Error Page Demo</li>
                </Link>
              </ul>
            </div>
            <div className="relative z-[9999] container-3 w-full lg:w-[25%]">
              <h3 className="footer-heading">Support</h3>
              <span className="bg-[var(--primary-color)] w-10 h-1 my-5"></span>
              <ul>
                <Link to="/contact">
                  <li>Contact us</li>
                </Link>
                <Link to="/terms-and-condition">
                  <li>Terms and Condition</li>
                </Link>
                <Link to="/privacy-policy">
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
            <div className="relative z-[9999] container-4 w-full lg:w-[25%]">
              <h3 className="footer-heading">LOCATION</h3>
              <span className="bg-[var(--primary-color)] w-10 h-1 my-5"></span>
              <ul>
                <Link to="https://g.co/kgs/dtpDDZ">
                  <li className="py-2">
                    NO.9, 2ND FLOOR, Ekambaram St, Gokulam Colony, Sambanthanar
                    Nagar, Pammal, Chennai, Tamil Nadu 600075
                  </li>
                </Link>

                <Link to="">
                  <li className="flex justify-start items-center gap-2 py-2">
                    <AiFillPhone />
                    073050 14152
                  </li>
                </Link>

                <Link to="mailto:handhfitnessclub@gmail.com">
                  <li className="flex justify-start items-center gap-2 py-2">
                    <BiLogoGmail />
                    handhfitnessclub@gmail.com
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
