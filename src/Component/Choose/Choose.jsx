import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "./choose.css";
import video from "../../assets/video.mp4";
import dub from "../../assets/dumbell.svg";

const Choose = () => {
  return (
    <>
      <section className="bg-choose py-14">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-14">
            <div className="flex justify-center">
              {/* <video height={"400px"} controls>
                <source src={video} />
              </video> */}
              <Video
                  autoPlay
                  loop
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                  poster={""}>
                  <source
                    src={video}
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
                  Gymat an unknown printer took a galley of type and scraey
                  aretea mbled it to make a type specimen book. May has survived
                  not only five centuries, but also the leap into electronic.
                </p>
              </div>
              <div className="flex justify-between items-center py-5">
                <div className="flex gap-4 items-center hover:scale-105">
                  <img
                    src={dub}
                    className="bg-[var(--primary-color)] rounded-full p-3 rotate-in-diag-1 "
                    alt="thumbImg"
                  />
                  <p className="choose-sub-para">Fitness Training</p>
                </div>
                <div className="flex gap-4 items-center hover:scale-105">
                  <img
                    src={dub}
                    className="bg-[var(--primary-color)] rounded-full p-3 rotate-in-diag-1 "
                    alt="thumbImg"
                  />
                  <p className="choose-sub-para">Fitness Training</p>
                </div>
              </div>
              <div className="flex justify-between items-center py-5">
                <div className="flex gap-4 items-center hover:scale-105">
                  <img
                    src={dub}
                    className="bg-[var(--primary-color)] rounded-full p-3 rotate-in-diag-1 "
                    alt="thumbImg"
                  />
                  <p className="choose-sub-para">Fitness Training</p>
                </div>
                <div className="flex gap-4 items-center hover:scale-105">
                  <img
                    src={dub}
                    className="bg-[var(--primary-color)] rounded-full p-3 rotate-in-diag-1 "
                    alt="thumbImg"
                  />
                  <p className="choose-sub-para">Fitness Training</p>
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
