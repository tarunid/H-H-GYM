import "./Footer.css";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/img";
import {AiOutlineInstagram, AiFillPhone} from "react-icons/ai";
import {BiLogoGmail} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="py-20 bg-[#fff] text-[#040405]">
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-evenly">
            <div className="container-1 w-full lg:w-[25%]">
              <ul>
                <Link to="/">
                  <img src={Logo} alt="Logo" className="w-[165px] py-5"/>
                </Link>

                <p>
                  It was popularised in the 1960s with the release of Letraset
                  PageMaker including versions of Lorem Ipsum.
                </p>

                <div className="flex justify-start gap-5 py-5 w-[100%]">    
                  <span className="bg-[#efefef] rounded-full p-3"><AiOutlineInstagram/></span>
                  <span className="bg-[#efefef] rounded-full p-3"><AiOutlineInstagram/></span>
                  <span className="bg-[#efefef] rounded-full p-3"><AiOutlineInstagram/></span>
                  <span className="bg-[#efefef] rounded-full p-3"><AiOutlineInstagram/></span>
                </div>
              </ul>
            </div>
            <div className="container-2 w-full lg:w-[25%]">
              <h3 className="footer-heading">Our Classes</h3>
              <span className="bg-red-600 w-10 h-1 my-5"></span>
              <ul>
                <Link to="Fitness-Classes">
                  <li>Fitness Classes</li>
                </Link>
                <Link to="Power-Yoga">
                  <li>Power Yoga</li>
                </Link>
                <Link to="/123">
                <li>Error Page Demo</li>
                </Link>
              </ul>
            </div>
            <div className="container-3 w-full lg:w-[25%]">
              <h3 className="footer-heading">Quick Links</h3>
              <span className="bg-red-600 w-10 h-1 my-5"></span>
              <ul>
              <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="Contact">
                  <li>Contact us</li>
                </Link>
                <Link to="/gallery">
                  <li>Gallery View</li>
                </Link>
                <Link to="Terms-and-Condition">
                  <li>Terms and Condition</li>
                </Link>
                <Link to="Privacy-Policy">
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
            <div className="container-4 w-full lg:w-[25%]">
              <h3 className="footer-heading">LOCATION</h3>
              <span className="bg-red-600 w-10 h-1 my-5"></span>
              <ul>
                <Link to="https://g.co/kgs/dtpDDZ">
                  <li className="py-2">
                    NO.9, 2ND FLOOR, Ekambaram St, Gokulam Colony, Sambanthanar
                    Nagar, Pammal, Chennai, Tamil Nadu 600075
                  </li>
                </Link>

                <Link to="">
                  <li className="flex justify-start items-center gap-2 py-2"><AiFillPhone/>073050 14152</li>
                </Link>

                <Link to="">
                  <li className="flex justify-start items-center gap-2 py-2"><BiLogoGmail/>handhfitnessclub@gmail.com</li>
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
