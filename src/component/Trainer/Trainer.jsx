import "./Trainer.css";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "antd/es/typography/Link";
import axiosInstance from "../../interceptors/axiosInstance";
import Loader from "../Loaded/Loader";

const Trainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [TrainerData, setTrainerData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("trainer/all");
      setTrainerData(response.data.trainers);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <section className="py-14">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 w-[90%] mx-auto pb-14">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="heading-3">TRAIN WITH EXPERTS</h3>
              <h2 className="heading-2 py-2">OUR TEAM</h2>
            </div>
          </div>
          {isLoading ? (
            <div className="w-[100%] flex flex-col items-center justify-center">
              <Loader />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 h-[100%]">
              {TrainerData.map((e, index) => {
                return (
                  <>
                    <div key={index} className="card my-5">
                      <img className="img-img" src={e.imageLink} alt="GymImg" />

                      <div className="img-overlay">
                        <span>
                          <h3 className="img-overlay-name text-center">
                            {e.name}
                          </h3>
                        </span>
                        <span>
                          <h5 className="img-overlay-tilte text-center">
                            {e.trainerType}
                          </h5>
                        </span>
                        <span className="flex justify-center items-center gap-5 py-4">
                          <Link to={e.Link}>
                            <AiFillInstagram
                              style={{ fontSize: "21px" }}
                              className="hover:fill-[var(--primary-color)]"
                            />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Trainer;
