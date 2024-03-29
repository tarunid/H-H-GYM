import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "./About.css";
import { AboutImg, CommomHero, CommonTextBlackWrapper, DumbbellPlain, Poster, video2, WhiteBg } from "../../assets/img";
import { Link } from "react-router-dom";
import Trainer from "../Trainer/Trainer";

const About = () => {
  return (
    <>
      <section className="pb-14">
        <div className="bg-about-common w-[100%] h-[430px] flex flex-col justify-center items-start" style={{ backgroundImage: `url(${CommomHero})` }}>
          <div className="grid grid-cols-1 w-[70%] mx-auto py-16">
            <h1 className="contact-title">About us</h1>
            <p className="bg-black-rappper" style={{ backgroundImage: `url(${CommonTextBlackWrapper})` }}>
              H&H &ndash;
              <span className="text-[var(--primary-color)] uppercase">
                &#160;About
              </span>
            </p>
          </div>
        </div>
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-14">
            <div className="bg-about flex justify-center items-center" style={{ backgroundImage: `url(${AboutImg})` }}></div>
            <div className="flex flex-col justify-start">
              <div className="py-5 bg-heroSection-heading">
                <p className="text-[#fff]">Who We Are</p>
              </div>
              <h2 className="about-heading py-5">
                At H&H Fitness Studio
              </h2>
              <div className="py-3">
                <p className="about-paragraph">
                  we are your partners in health and strength. Our mission is to empower you with
                </p>
              </div>
              <div>
                <ul className="about-paragraph">
                  <li>- Expert Guidance: Certified trainers and nutritionists</li>
                  <li>- Top-Notch Facilities: State-of-the-art equipment and amenities</li>
                  <li>- Community Support: Join a vibrant fitness family.</li>
                  <li>- Wellness Focus: Holistic approach for a healthier you.</li>
                  <li>- Personalized Journey: Tailored programs for your goals.</li>
                </ul>
              </div>
              <div className="py-5">
                <Link to="/contact">
                  <button className="buttons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      viewBox="0 0 24 24"
                      height={24}
                      fill="none"
                      className="svg-icon"
                    >
                      <g strokeWidth={2} strokeLinecap="round" stroke="#fff">
                        <rect y={5} x={4} width={16} rx={2} height={16} />
                        <path d="m8 3v4" />
                        <path d="m16 3v4" />
                        <path d="m4 11h16" />
                      </g>
                    </svg>
                    <span className="lable">Contact US</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg" style={{ backgroundImage: `url(${WhiteBg})` }}>
            <div className="grid grid-cols-1 w-[90%] mx-auto py-14">
              <div className="flex justify-center rounded-xl">
                <Video
                  loop
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                  poster={Poster}>
                  <source
                    src={video2}
                    type="video/mp4"
                  />
                </Video>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-14 gap-5">
            <div className="flex justify-center items-center hover:scale-105">
              <div className="flex justify-between items-center w-[70%] p-6 shadow-lg rounded-xl shadow-slate-200">
                <span>
                  <h2 className="title-expert-count">10+</h2>
                  <h3 className="title-expert-info">Expert Trainers</h3>
                </span>
                <img
                  src={DumbbellPlain}
                  className="on-hover-img-11"
                  alt="IconImg"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex justify-center items-center hover:scale-105">
              <div className="flex justify-between items-center w-[70%] p-6 shadow-lg rounded-xl shadow-slate-200">
                <span>
                  <h2 className="title-expert-count">30+</h2>
                  <h3 className="title-expert-info">Modern Equipments</h3>
                </span>
                <img
                  src={DumbbellPlain}
                  className="on-hover-img-11"
                  alt="IconImg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <Trainer />
        </div>
      </section>
    </>
  );
};

export default About;
