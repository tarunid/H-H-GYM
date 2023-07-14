import { galleryData } from "../../Api/Gallery";
import "./Gallery.css";

const All = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 w-[80%] mx-auto gap-5">
          {galleryData.map((e,index) => {
            return (
              <>
                <div key={index} className="card-gallery" >
                  <img
                    className="img-img"
                    src={e.imgSrc}
                    alt="GymImg"
                  />

                  <div className="img-overlay">
                    <span>
                      <h3 className="img-overlay-name text-center">{e.textName}</h3>
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default All;
