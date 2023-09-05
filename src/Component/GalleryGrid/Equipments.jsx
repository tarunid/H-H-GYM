import { useState } from "react";
// import { galleryData } from "../../Api/Gallery";
import "./Gallery.css";
// import LightGallery from 'lightgallery/react/Lightgallery.es5';
import { IoIosCloseCircle } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { useEffect } from "react";

const Equipments = () => {
  const [galleryData, setgalleryData] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  let FetchData = async () => {
    try {
      const response = await fetch("https://hh-gym-backend-production.up.railway.app/gallery-Equipments-limit", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik5ld3VzZXIiLCJpYXQiOjE2OTAzMDU0MTB9.JJTMne-C4s4fv_sVgKyFw1NX8_2m_YmrcGAcPQzYkVQ",
        },
      });
      const jsonData = await response.json();
      setgalleryData(jsonData);
      setGalleryImages(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let FetchAllData = async () => {
    try {
      const response = await fetch("http://localhost:5000/gallery-Equipments-all", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik5ld3VzZXIiLCJpYXQiOjE2OTAzMDU0MTB9.JJTMne-C4s4fv_sVgKyFw1NX8_2m_YmrcGAcPQzYkVQ",
        },
      });
      const jsonData = await response.json();
      console.log(jsonData)
      setgalleryData(jsonData);
      setGalleryImages(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

      <div className="grid grid-cols-1 w-[70%] mx-auto">
        <div className="flex justify-center items-center py-10">
          <button className="button-gallery" onClick={FetchAllData}>LOAD MORE</button>
        </div>
      </div>
    </>
  );
};

export default Equipments;
