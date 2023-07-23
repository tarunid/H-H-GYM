import "./About.css";
import Trainer from "../Trainer/Trainer";

const About = () => {
  return (
    <>
      <section className="pb-14">
        <div className="bg-hero-common w-[100%] h-[430px] flex flex-col justify-center items-start">
          <div className="grid grid-cols-1 w-[70%] mx-auto py-16">
            <h1 className="contact-title">About us</h1>
            <p className="bg-black-rappper">
              H&H &ndash;
              <span className="text-[var(--primary-color)] uppercase">
                &#160;About
              </span>
            </p>
          </div>
        </div>
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-14">
            <div className="bg-about flex justify-center items-center"></div>
            <div className="flex flex-col justify-start">
              <div className="py-5 bg-heroSection-heading">
                <p className="text-[#fff]">Who We Are</p>
              </div>
              <h2 className="about-heading py-5">
                We Will Give You Strength and Health
              </h2>
              <div className="py-3">
                <p className="about-paragraph">
                  Gymat an unknown printer took a galley of type and scraey
                  aretea mbled it to make a type specimen book. May has survived
                  not only five centuries, but also the leap into electronic.
                </p>
              </div>
              <div>
                <ul className="about-paragraph">
                  <li>- Gymat an unknown printer</li>
                  <li>- Scraey aretea bled makea type</li>
                  <li>- Bookhas survived not onlyive</li>
                  <li>- Centuries but also the leap electronic.</li>
                </ul>
              </div>
              <div className="py-5">
                <button className="button-gallery flex">Contact US</button>
              </div>
            </div>
          </div>

          <div className="bg-choose">
            <div className="grid grid-cols-1 w-[90%] mx-auto py-14">
              <div className="text-start w-[90%] mx-auto">
                <div className="py-5 bg-heroSection-heading">
                  <p className="text-[#fff]">WHY CHOOSE US</p>
                </div>
                {/* <p className="about-paragraph w-[100%]">Demo Text</p> */}
              </div>
              <div className="flex justify-center">
                <video height={"400px"} controls>
                  <source src="https://res.cloudinary.com/dsq5spft3/video/upload/v1690112383/Video2_li33lq.mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-14">
            <div className="flex justify-center items-center hover:scale-105">
              <div className="flex justify-between items-center w-[70%] p-6 shadow-lg rounded-xl shadow-slate-200">
                <span>
                  <h2 className="title-expert-count">30+</h2>
                  <h3 className="title-expert-info">Expert Trainers</h3>
                </span>
                <img
                  src="https://res.cloudinary.com/dsq5spft3/image/upload/v1689404278/dumbbell_de55ek.png"
                  className="on-hover-img"
                />
              </div>
            </div>

            <div className="flex justify-center items-center hover:scale-105">
              <div className="flex justify-between items-center w-[70%] p-6 shadow-lg rounded-xl shadow-slate-200">
                <span>
                  <h2 className="title-expert-count">30+</h2>
                  <h3 className="title-expert-info">Expert Trainers</h3>
                </span>
                <img
                  src="https://res.cloudinary.com/dsq5spft3/image/upload/v1689404278/dumbbell_de55ek.png"
                  className="on-hover-img"
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
