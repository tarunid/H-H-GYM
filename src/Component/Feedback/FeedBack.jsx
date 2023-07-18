import "./FeedBack.css";
import { Carousel } from "antd";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const contentStyle = {
  height: "560px",
  color: "#fff",
  textAlign: "center",
  borderradius: "50px",
};

const FeedBack = () => {
  let ref = useRef();
  return (
    <>
      <section className="py-5">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 w-[60%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="heading-3 text-center">Getting into Shape</h3>
              <h2 className="heading-2-feedback py-2">
                What do our clients Says about us ?
              </h2>
            </div>
          </div>

          <div className="py-5 mx-auto">
            <div className="grid grid-cols-1 w-[60%] mx-auto bg-black rounded-3xl">
              <div className="py-5 ">
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
                    <div
                      className="flex flex-col justify-center items-center h-[100%] py-10"
                      style={contentStyle}>
                      <div className="text-center">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full"
                          alt="img"
                        />
                      </div>
                      <div className="h-[10%] text-center py-5">
                        <h3 className="feedBack-name p-1">Name of Client</h3>
                        <p className="feedBack-job p-1">Home Maker</p>
                      </div>
                      <div className="flex flex-col justify-center items-center pt-10">
                        <div className="c pt-5"></div>
                      </div>
                      <div className="w-[100%] h-[50%]">
                        <q className="px-5 py-6 text-center">
                          Faucibus tincidunt. Sed fringilla mauris sit amet nibh
                          venenatis faucibus. Nullam quis ante. Etiam sit amet
                          orci eget eros.Donec sodales sagittis.
                        </q>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1" style={contentStyle}>
                    <div
                      className="flex flex-col justify-center items-center h-[100%] py-10"
                      style={contentStyle}>
                      <div className="text-center">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full"
                          alt="img"
                        />
                      </div>
                      <div className="h-[10%] text-center py-5">
                        <h3 className="feedBack-name p-1">Name of Client</h3>
                        <p className="feedBack-job p-1">Home Maker</p>
                      </div>
                      <div className="flex flex-col justify-center items-center pt-10">
                        <div className="c pt-5"></div>
                      </div>
                      <div className="w-[100%] h-[50%]">
                        <q className="px-5 py-6 text-center">
                          Faucibus tincidunt. Sed fringilla mauris sit amet nibh
                          venenatis faucibus. Nullam quis ante. Etiam sit amet
                          orci eget eros.Donec sodales sagittis.
                        </q>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1" style={contentStyle}>
                    <div
                      className="flex flex-col justify-center items-center h-[100%] py-10"
                      style={contentStyle}>
                      <div className="text-center">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full"
                          alt="img"
                        />
                      </div>
                      <div className="h-[10%] text-center py-5">
                        <h3 className="feedBack-name p-1">Name of Client</h3>
                        <p className="feedBack-job p-1">Home Maker</p>
                      </div>
                      <div className="flex flex-col justify-center items-center pt-10">
                        <div className="c pt-5"></div>
                      </div>
                      <div className="w-[100%] h-[50%]">
                        <q className="px-5 py-6 text-center">
                          Faucibus tincidunt. Sed fringilla mauris sit amet nibh
                          venenatis faucibus. Nullam quis ante. Etiam sit amet
                          orci eget eros.Donec sodales sagittis.
                        </q>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1" style={contentStyle}>
                    <div
                      className="flex flex-col justify-center items-center h-[100%] py-10"
                      style={contentStyle}>
                      <div className="text-center">
                        <img
                          src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/testim1.jpg"
                          className="rounded-full"
                          alt="img"
                        />
                      </div>
                      <div className="h-[10%] text-center py-5">
                        <h3 className="feedBack-name p-1">Name of Client</h3>
                        <p className="feedBack-job p-1">Home Maker</p>
                      </div>
                      <div className="flex flex-col justify-center items-center pt-10">
                        <div className="c pt-5"></div>
                      </div>
                      <div className="w-[100%] h-[50%]">
                        <q className="px-5 py-6 text-center">
                          Faucibus tincidunt. Sed fringilla mauris sit amet nibh
                          venenatis faucibus. Nullam quis ante. Etiam sit amet
                          orci eget eros.Donec sodales sagittis.
                        </q>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 w-[60%] mx-auto">
            <div className="w-[90%] mx-auto flex justify-center items-center gap-5">
              <button
                onClick={() => {
                  ref.current.prev();
                }}
                className="bg-[var(--primary-color)] p-4 rounded-xl text-[#fff]">
                <IoIosArrowBack />
              </button>
              <button
                onClick={() => {
                  ref.current.next();
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
