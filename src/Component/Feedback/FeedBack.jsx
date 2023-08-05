import "./FeedBack.css";
import { Carousel } from "antd";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const contentStyle = {
  height: "560px",
  color: "#000",
  textAlign: "center",
  borderradius: "50px",
};

const galleryData = [
  {
    imgSrc:
      "https://assets.website-files.com/5dd3758e77520f215548fb15/5dd375c777520f97db48fc20_profile-01.png",
    textName: "Name",
  },
  {
    imgSrc:
      "https://assets.website-files.com/5dd3758e77520f215548fb15/5dd375c777520f161f48fc23_profile-03.png",
    textName: "Name",
  },
  {
    imgSrc:
      "https://assets.website-files.com/5dd3758e77520f215548fb15/5dd375c777520f97db48fc20_profile-01.png",
    textName: "Name",
  },
  {
    imgSrc:
      "https://assets.website-files.com/5dd3758e77520f215548fb15/5dd375c777520f161f48fc23_profile-03.png",
    textName: "Name",
  },
];

const FeedBack = () => {
  let ref = useRef();
  let [slideNumber, setSlideNumber] = useState(0);

  let perv = () => {
    ref.current.prev();
    slideNumber === 0
      ? setSlideNumber(galleryData.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  let nex = () => {
    ref.current.next();
    slideNumber + 1 === galleryData.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      <section className="py-14 ">
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
                autoplay
                dots={true}
                pauseOnHover={true}
                pauseOnDotsHover={true}
                draggable
                easing
                className="rounded-full">
                <div className="grid grid-cols-1" style={contentStyle}>
                  <div className="py-10 grid grid-cols-2" style={contentStyle}>
                    <div className="flex justify-center items-center gap-5 px-2">
                      <div className="flex flex-col justify-start items-center h-[50%] min-w-[20%] py-2">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full"
                          alt="img"
                        />
                        <p className="py-5 symbol">&#34;</p>
                      </div>
                      <div className="flex flex-col justify-start items-start h-[50%] px-1">
                        <h3 className="py-2 feedBack-name">Name of Client</h3>
                        <p className="py-1 feedBack-job">Home Maker</p>
                        <p className="text-start py-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sunt sequi eos debitis quidem repudiandae illo
                          corporis quos aliquid natus ex reiciendis voluptates
                          dignissimos quam possimus asperiores aperiam, qui nam
                          voluptatibus.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-5 px-2">
                      <div className="flex flex-col justify-start items-center h-[50%] min-w-[20%] py-2">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full"
                          alt="img"
                        />
                        <p className="py-5 symbol">&#34;</p>
                      </div>
                      <div className="flex flex-col justify-start items-start h-[50%] px-1">
                        <h3 className="py-2 feedBack-name">Name of Client</h3>
                        <p className="py-1 feedBack-job">Home Maker</p>
                        <p className="text-start py-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sunt sequi eos debitis quidem repudiandae illo
                          corporis quos aliquid natus ex reiciendis voluptates
                          dignissimos quam possimus asperiores aperiam, qui nam
                          voluptatibus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1" style={contentStyle}>
                  <div className="py-10 grid grid-cols-2" style={contentStyle}>
                    <div className="flex justify-center items-center gap-5 px-2">
                      <div className="flex flex-col justify-start items-center h-[50%] min-w-[20%] py-2">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full"
                          alt="img"
                        />
                        <p className="py-5 symbol">&#34;</p>
                      </div>
                      <div className="flex flex-col justify-start items-start h-[50%] px-1">
                        <h3 className="py-2 feedBack-name">Name of Client</h3>
                        <p className="py-1 feedBack-job">Home Maker</p>
                        <p className="text-start py-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sunt sequi eos debitis quidem repudiandae illo
                          corporis quos aliquid natus ex reiciendis voluptates
                          dignissimos quam possimus asperiores aperiam, qui nam
                          voluptatibus.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-5 px-2">
                      <div className="flex flex-col justify-start items-center h-[50%] min-w-[20%] py-2">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full"
                          alt="img"
                        />
                        <p className="py-5 symbol">&#34;</p>
                      </div>
                      <div className="flex flex-col justify-start items-start h-[50%] px-1">
                        <h3 className="py-2 feedBack-name">Name of Client</h3>
                        <p className="py-1 feedBack-job">Home Maker</p>
                        <p className="text-start py-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sunt sequi eos debitis quidem repudiandae illo
                          corporis quos aliquid natus ex reiciendis voluptates
                          dignissimos quam possimus asperiores aperiam, qui nam
                          voluptatibus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1" style={contentStyle}>
                  <div className="py-10 grid grid-cols-2" style={contentStyle}>
                    <div className="flex justify-center items-center gap-5 px-2">
                      <div className="flex flex-col justify-start items-center h-[50%] min-w-[20%] py-2">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full"
                          alt="img"
                        />
                        <p className="py-5 symbol">&#34;</p>
                      </div>
                      <div className="flex flex-col justify-start items-start h-[50%] px-1">
                        <h3 className="py-2 feedBack-name">Name of Client</h3>
                        <p className="py-1 feedBack-job">Home Maker</p>
                        <p className="text-start py-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sunt sequi eos debitis quidem repudiandae illo
                          corporis quos aliquid natus ex reiciendis voluptates
                          dignissimos quam possimus asperiores aperiam, qui nam
                          voluptatibus.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-5 px-2">
                      <div className="flex flex-col justify-start items-center h-[50%] min-w-[20%] py-2">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full"
                          alt="img"
                        />
                        <p className="py-5 symbol">&#34;</p>
                      </div>
                      <div className="flex flex-col justify-start items-start h-[50%] px-1">
                        <h3 className="py-2 feedBack-name">Name of Client</h3>
                        <p className="py-1 feedBack-job">Home Maker</p>
                        <p className="text-start py-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sunt sequi eos debitis quidem repudiandae illo
                          corporis quos aliquid natus ex reiciendis voluptates
                          dignissimos quam possimus asperiores aperiam, qui nam
                          voluptatibus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
            {/* <div className="w-[90%] mx-auto order-1 md:order-2">
              <img src={galleryData[slideNumber].imgSrc} />
            </div> */}
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
