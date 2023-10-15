import "./Footer.css";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FooterBg, FooterIcon } from "../../assets/img";

const Footer = () => {
  return (
    <>
      <footer className="py-20 bg-[#fff] text-[#040405] bg-footer relative" style={{ backgroundImage: `url(${FooterBg})`}}>
        <img
          src={FooterIcon}
          className="absolute bottom-0"
          alt="FooterIcon"
          loading="lazy"
        />
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-evenly relative z-[9999]">
            <div className="relative z-[9999] container-2 w-full lg:w-[25%]">
            <ul className="">
                <p className="text-sm ">
                  Elevate your fitness journey with H2H Premium Gym. Top-tier equipment, expert trainers, and exclusive perks for an unparalleled workout experience
                </p>
                <div className="flex justify-start gap-5 py-5 w-[100%]">
                  <span className="bg-[#efefef] rounded-full p-3 hover:bg-[#fa7e1e]">
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
                {/* <Link to="/error">
                  <li>Error Page Demo</li>
                </Link> */}
              </ul>
            </div>
            <div className="relative z-[9999] container-3 w-full lg:w-[25%]">
              <h3 className="footer-heading">Support</h3>
              <span className="bg-[var(--primary-color)] w-10 h-1 my-5"></span>
              <ul>
                <Link to="/contact">
                  <li>Contact us</li>
                </Link>
                {/* <Link to="/terms-and-condition">
                  <li>Terms and Condition</li>
                </Link>
                <Link to="/privacy-policy">
                  <li>Privacy Policy</li>
                </Link> */}
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
                    <Link to="tel:07305014152">73050 14152</Link>,<Link to="tel:7305014153">73050 14153</Link>
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
