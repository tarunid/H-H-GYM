import "./Trainer.css";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TrainerData } from "../../Api/Home";

const Trainer = () => {
  return (
    <>
      <section className="py-5">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="heading-3">TRAIN WITH EXPERTS</h3>
              <h2 className="heading-2 py-2">OUR TEAM</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 h-[100%]">
            {TrainerData.map((e, index) => {
              return (
                <>
                  <div key={index} className="card my-5">
                    <img className="img-img" src={e.imgSrc} alt="GymImg" />

                    <div className="img-overlay">
                      <span>
                        <h3 className="img-overlay-name text-center">
                          {e.trainerName}
                        </h3>
                      </span>
                      <span>
                        <h5 className="img-overlay-tilte text-center">
                          {e.trainDescription}
                        </h5>
                      </span>
                      <span className="flex justify-center items-center gap-5 py-4">
                        <AiFillInstagram
                          style={{ fontSize: "21px" }}
                          className="hover:fill-red-600"
                        />
                        <BsFacebook
                          style={{ fontSize: "18px" }}
                          className="hover:fill-red-600"
                        />
                        <AiFillTwitterCircle
                          style={{ fontSize: "21px" }}
                          className="hover:fill-red-600"
                        />
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainer;
