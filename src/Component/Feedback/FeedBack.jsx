import "./FeedBack.css";
import { Carousel } from "antd";
import { useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import axiosInstance from "../../interceptors/axiosInstance";

const contentStyle = {
  height: "560px",
  color: "#000",
  textAlign: "center",
  borderradius: "50px",
};

const FeedBack = () => {
  let ref = useRef();
  let [slideNumber, setSlideNumber] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axiosInstance.get("/feedback/all")
      .then(response => {
        setTestimonials(response.data.TestimonialArray);
      })
      .catch(error => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  let perv = () => {
    ref.current.prev();
    slideNumber === 0
      ? setSlideNumber(testimonials.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  let nex = () => {
    ref.current.next();
    slideNumber + 1 === testimonials.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      <section className="py-14">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 w-[60%] mx-auto pb-14">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="heading-3 text-center">Getting into Shape</h3>
              <h2 className="heading-2-feedback py-2">
                What do our clients Says about us ?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="w-[90%] mx-auto rounded-3xl order-2 md:order-1">
              <Carousel
                ref={ref}
                dots={true}
                pauseOnHover={true}
                pauseOnDotsHover={true}
                draggable
                easing
                className="rounded-full"
              >
                {testimonials.map(testimonial => (
                  <div key={testimonial.id} className="grid grid-cols-1 md:grid-cols-2" style={contentStyle}>
                    <div className="py-10 flex justify-center items-center gap-5 px-2">
                      <div className="flex flex-col justify-start items-center h-[50%] min-w-[20%] py-2">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full w-full md:w-auto h-auto md:h-[50%] mx-auto"
                          alt={testimonial.username}
                        />
                        <p className="py-5 symbol">&#34;</p>
                      </div>
                      <div className="flex flex-col justify-start items-start h-[50%] px-1">
                        <h3 className="py-2 feedBack-name">{testimonial.username}</h3>
                        <p className="py-1 feedBack-job">{testimonial.userWork}</p>
                        <p className="text-start py-5">
                          {testimonial.feedback}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>

            </div>
          </div>


          <div className="grid grid-cols-1 w-[60%] mx-auto py-5">
            <div className="w-[90%] mx-auto flex justify-center items-center gap-5">
              <button
                onClick={() => {
                  perv();
                }}
                className="bg-[var(--primary-color)] p-4 rounded-xl text-[#fff]">
                <IoIosArrowBack />
              </button>
              <button
                onClick={() => {
                  nex();
                }}
                className="bg-[var(--primary-color)] p-4 rounded-xl text-[#fff]">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedBack;
