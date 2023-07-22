import { useState } from "react";
import { galleryData } from "../../Api/Gallery";
import "./Gallery.css";
// import LightGallery from 'lightgallery/react/Lightgallery.es5';
import { IoIosCloseCircle } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const All = () => {
  const galleryImages = [
    {
      imgSrc:
        "https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/port-img-9.jpg",
      textName: "Name",
    },
    {
      imgSrc:
        "https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/port-img-2.jpg",
      textName: "Name",
    },
    {
      imgSrc:
        "https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/port-img-3.jpg",
      textName: "Name",
    },
    {
      imgSrc:
        "https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/port-img-4.jpg",
      textName: "Name",
    },
    {
      imgSrc:
        "https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/port-img-5.jpg",
      textName: "Name",
    },
    {
      imgSrc:
        "https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/port-img-6.jpg",
      textName: "Name",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handeOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      {openModal && (
        <div className="sliderWrap">
          <IoIosCloseCircle className="btnClose" onClick={handleCloseModal} />
          <div className="btnPrev" onClick={prevSlide}>
            <p>Prev</p>
            <GrFormPreviousLink />
          </div>
          <div className="btnNext" onClick={nextSlide}>
            <p>Next</p>
            <GrFormNextLink />
          </div>

          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].imgSrc} alt="" />
          </div>
        </div>
      )}
      <div className="2xl:container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 w-[80%] mx-auto gap-5">
          {galleryData.map((e, index) => {
            return (
              <>
                <div
                  key={index}
                  className="card-gallery"
                  onClick={() => {
                    handeOpenModal(index);
                  }}>
                  <img className="img-img" src={e.imgSrc} alt="GymImg" />

                  <div className="img-overlay">
                    <span>
                      <h3 className="img-overlay-name text-center">
                        {e.textName}
                      </h3>
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
