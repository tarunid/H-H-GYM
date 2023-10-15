import "./Features.css";
import { FeaturedData } from "../../api/Home";
import { Logo } from "../../assets/img";

const Featuers = () => {
  return (
    <>
      <section className="py-16" id="Offer">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="heading-3">Getting into Shape</h3>
              <h2 className="heading-2-feedback py-2">
                Regular Exercises in FitGym
              </h2>
              <h2 className="heading-3 py-5">offers 4 Key Benefits</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] mx-auto h-[100%] py-5 gap-5">
            {FeaturedData.map((e) => {
              return (
                <>
                  <div
                    className="box-features w-[270px] h-[327px] py-10 px-5 relative rounded-md"
                    id="p1"
                    key={e.id}>
                    <div className="feacture-bg-top" id="c1"></div>

                    <img src={e.image} className="rotate-in-center hover:rotate-in-center" width="70px" height="80px" alt="iconImg" />

                    <h4 className="py-2 feature-title">{e.title}</h4>

                    <p className="py-2 feature-content">{e.content}</p>

                    <div className="absolute bottom-0 right-0 pr-3 z-10">
                      <img src={Logo} width="110px" height="80px" className="p-5" alt="Logo"/>
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

export default Featuers;
