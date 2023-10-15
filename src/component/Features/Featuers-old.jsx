import "./Features.css";
import a from "../../assets/dd.svg";
const Featuer = () => {
  return (
    <>
      <section className="py-16">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="heading-3">Getting into Shape</h3>
              <h2 className="heading-2-feedback py-2">
                Regular Exercises in FitGym
              </h2>
              <h2 className="heading-3 py-5">offers 6 Key Benefits</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] mx-auto h-[100%] py-5 gap-5">
            <div
              className="box-features w-[270px] h-[327px] py-10 px-5 relative rounded-md"
              id="p1">
              <div className="feacture-bg-top" id="c1"></div>

              <img src={a} className="aa" />

              <h4 className="py-2">Workout</h4>

              <p className="py-2">
                They also provide insights about the profession’s most colorful
                personalities and powerful institutions, as ...
              </p>
            </div>

            <div className="box-features w-[270px] h-[327px] py-10 px-5 relative rounded-md">
              <div className="feacture-bg-top absolute right-[-50px]"></div>

              <img src={a} className="aa" />

              <h4 className="py-2">Workout</h4>

              <p className="py-2">
                They also provide insights about the profession’s most colorful
                personalities and powerful institutions, as ...
              </p>
            </div>

            <div className="box-features w-[270px] h-[327px] py-10 px-5 relative rounded-md">
              <div className="feacture-bg-top absolute right-[-50px]"></div>

              <img src={a} className="aa" />

              <h4 className="py-2">Workout</h4>

              <p className="py-2">
                They also provide insights about the profession’s most colorful
                personalities and powerful institutions, as ...
              </p>
            </div>
          </div>

          {/* 
          <div className="grid grid-cols-1 w-[90%] mx-auto bg-features h-[100%]">
            <div className="flex flex-col justify-center items-center gap-6 pt-10 visible md:invisible">
              <div className="flex justify-center items-center gap-6 py-2">
                <div>
                  <img
                    src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/ic4.png"
                    alt="img"
                  />
                </div>
                <div>
                  <p className="feature-title-style">Regulates Eating Habits</p>
                  <p>
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus
                    tincidunt. Sed fringilla.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center items-center gap-6 py-2">
                <div>
                  <img
                    src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/ic4.png"
                    alt="img"
                  />
                </div>
                <div>
                  <p className="feature-title-style">Regulates Eating Habits</p>
                  <p>
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus
                    tincidunt. Sed fringilla.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-6 py-2">
                <div>
                  <img
                    src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/ic4.png"
                    alt="img"
                  />
                </div>
                <div>
                  <p className="feature-title-style">Regulates Eating Habits</p>
                  <p>
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus
                    tincidunt. Sed fringilla.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-6 py-2">
                <div>
                  <img
                    src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/ic4.png"
                    alt="img"
                  />
                </div>
                <div>
                  <p className="feature-title-style">Regulates Eating Habits</p>
                  <p>
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus
                    tincidunt. Sed fringilla.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-6 py-2">
                <div>
                  <img
                    src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/ic4.png"
                    alt="img"
                  />
                </div>
                <div>
                  <p className="feature-title-style">Regulates Eating Habits</p>
                  <p>
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus
                    tincidunt. Sed fringilla.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-6 py-2">
                <div>
                  <img
                    src="https://maruthi.wpengine.com/wp-content/uploads/2017/12/ic4.png"
                    alt="img"
                  />
                </div>
                <div>
                  <p className="feature-title-style">Regulates Eating Habits</p>
                  <p>
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus
                    tincidunt. Sed fringilla.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Featuer;
