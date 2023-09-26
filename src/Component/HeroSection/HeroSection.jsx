import "../HeroSection/HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section className="mt-[9vh] bg-heroSection w-[100%] py-14">
        <div className="2xl:container mx-auto h-[100%] scroll-pt-2.5">
          <div className="grid grid-cols-1 w-[90%] h-[648px] mx-auto pb-14">
            <div className="flex flex-col justify-center items-start text-start h-[100%]">
              <div className="p-5">
                <div className="py-5 bg-heroSection-heading">
                  <p>Find Your Energy</p>
                </div>
                <h1 className="py-5 HeroHeading">
                REGULAR EXERCISES <br />
                H&H Fitness Studio
                </h1>
                <p className="HeroParagraph">
                Unlock Your Full Potential, Transform Your Body, and Find Wellness in Every Rep
                </p>
                <button className="button">
                  <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Get Started</span>
                  </span>
                </button>
                <div className="self-end">
                  <img
                    src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/themes/gymat/assets/element/gym-text.png"
                    alt="FitImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
