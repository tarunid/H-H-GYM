import "./choose.css";
import video from "../../assets/video.mp4";

const Choose = () => {
  return (
    <>
      <section className="py-5 bg-choose">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto py-5">
            <div className="flex justify-center">
              <video height={"400px"} controls>
                <source src={video} />{" "}
              </video>
            </div>
            <div className="flex flex-col justify-start">
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
                <div className="flex gap-4 items-center">
                  <img
                    src="https://res.cloudinary.com/dsq5spft3/image/upload/v1689404278/dumbbell_de55ek.png"
                    className="bg-[#2b2b2b] rounded-full p-3"
                    alt="thumbImg"
                  />
                  <p className="choose-sub-para">Fitness Training</p>
                </div>
                <div className="flex gap-4 items-center">
                  <img
                    src="https://res.cloudinary.com/dsq5spft3/image/upload/v1689404278/dumbbell_de55ek.png"
                    className="bg-[#2b2b2b] rounded-full p-3"
                    alt="thumbImg"
                  />
                  <p className="choose-sub-para">Fitness Training</p>
                </div>
              </div>
              <div className="flex justify-between items-center py-5">
                <div className="flex gap-4 items-center">
                  <img
                    src="https://res.cloudinary.com/dsq5spft3/image/upload/v1689404278/dumbbell_de55ek.png"
                    className="bg-[#2b2b2b] rounded-full p-3"
                    alt="thumbImg"
                  />
                  <p className="choose-sub-para">Fitness Training</p>
                </div>
                <div className="flex gap-4 items-center">
                  <img
                    src="https://res.cloudinary.com/dsq5spft3/image/upload/v1689404278/dumbbell_de55ek.png"
                    className="bg-[#2b2b2b] rounded-full p-3"
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
