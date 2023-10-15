import { OfferData } from "../../Api/Home";

const Offer = () => {
  return (
    <>
      <section className="py-14">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 w-[90%] mx-auto pb-14">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="heading-3">WHAT WE OFFER</h3>
              <h2 className="heading-2 py-2">DEFINE YOUR GOAL</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 w-[90%] mx-auto">
            {OfferData.map((e) => {
              return (
                <>
                  <div className="flex flex-col justify-evenly items-center text-center gap-4">
                    <img
                      src={e.imgSrc}
                      className="h-11"
                      alt="IconImg"
                      loading="lazy"
                      width={53}
                      height={70}
                    />
                    <h3 className="heading-3 hover:text-[var(--primary-color)]">
                      {e.title}
                    </h3>
                    <p className="hover:text-[var(--primary-color)]">
                      {e.content}
                    </p>
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

export default Offer;
