import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "./choose.css";
import { BlackBg, CommunitySupport, DumbellColored, Trainer, video1, Wellness } from "../../assets/img";

const Choose = () => {
  return (
    <>
      <section className="bg-choose py-14" style={{ backgroundImage: `url(${BlackBg})`}}>
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-14">
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
                  poster="">
                  <source
                    src={video1}
                    type="video/mp4"
                  />
                </Video>
            </div>
            <div className="flex flex-col justify-start mt-5">
              <div className="py-5 bg-heroSection-heading">
                <p className="text-[#fff]">WHY CHOOSE US</p>
              </div>
              <h2 className="choose-heading py-5">
                We Can Give A Shape Of Your Body Here
              </h2>
              <div className="py-3">
                <p className="choose-paragraph">
                  Absolutely, H&H STUDIO is the place to achieve your fitness
                  goals. Their experienced trainers and top-quality equipment
                  transformed my body. Let&#39;s start today!
                </p>
              </div>
              <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
                <div className="flex gap-4 items-center hover:scale-105 w-[100%]">
                  <img
                    src={Trainer}
                    className="bg-[var(--primary-color)] rounded-full p-3 rotate-in-diag-1"
                    loading="lazy"
                    alt="thumbImg"
                  />
                  <p className="choose-sub-para">Expert Trainers</p>
                </div>
                <div className="flex gap-4 items-center hover:scale-105 w-[100%]">
                  <img
                    src={DumbellColored}
                    className="bg-[var(--primary-color)] rounded-full p-3 rotate-in-diag-1 "
                    alt="thumbImg"
                    loading="lazy"
                  />
                  <p className="choose-sub-para">Equipment Power</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row justify-between items-center py-5">

                <div className="flex gap-4 items-center hover:scale-105 w-[100%]">
                  <img
                    src={Wellness}
                    className="bg-[var(--primary-color)] rounded-full p-3 rotate-in-diag-1  "
                    alt="thumbImg"
                    loading="lazy"
                  />
                  <p className="choose-sub-para">Holistic Wellness</p>
                </div>

                <div className="flex gap-4 items-center hover:scale-105 w-[100%]">
                  <img
                    src={CommunitySupport}
                    className="bg-[var(--primary-color)] rounded-full p-3 rotate-in-diag-1 w-[88.2px] h-[88.2px]"
                    alt="thumbImg"
                    loading="lazy"
                  />
                  <p className="choose-sub-para">Community Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
