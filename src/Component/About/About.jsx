import "./About.css";
import Trainer from "../Trainer/Trainer";

const About = () => {
  return (
    <>
      <section className="py-5">
        <div className="bg-hero-common w-[100%] h-[430px] mt-[5vh] flex flex-col justify-center items-start">
          <div className="grid grid-cols-1 w-[70%] mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-5">
            <div className="bg-about flex justify-center items-center">
              <div className="relative">
                {/* <h3 className="strok-text-about bg-slate-400 absolute mr-5">
                  Since 1995
                </h3> */}
              </div>

              {/* <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/about-5.jpg" /> */}
            </div>
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
                <button className="btn-about">
                  <div className="btn-circle"></div>
                  <div className="btn-circle"></div>
                  <p className="btn-text">Contact us</p>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-5 ">
            <div className="flex justify-center items-center">
              <div className="flex justify-between items-center w-[70%] p-6 shadow-lg rounded-xl shadow-slate-200">
                <span>
                  <h2 className="title-expert-count">30+</h2>
                  <h3 className="title-expert-info">Expert Trainers</h3>
                </span>
                <img src="https://res.cloudinary.com/dsq5spft3/image/upload/v1689404278/dumbbell_de55ek.png" />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="flex justify-between items-center w-[70%] p-6 shadow-lg rounded-xl shadow-slate-200">
                <span>
                  <h2 className="title-expert-count">30+</h2>
                  <h3 className="title-expert-info">Expert Trainers</h3>
                </span>
                <img src="https://res.cloudinary.com/dsq5spft3/image/upload/v1689404278/dumbbell_de55ek.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Trainer />
    </>
  );
};

export default About;
