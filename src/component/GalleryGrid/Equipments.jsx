import { useState } from "react";
import "./Gallery.css";
import { IoIosCloseCircle } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { useEffect } from "react";
import axiosInstance from "../../interceptors/axiosInstance";
import Loader from "../Loaded/Loader";

const Dumbbell = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [galleryData, setgalleryData] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  let FetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/gallery/gallery-type-limit/Equipments");
      setgalleryData(response.data.galleryArray);
      setGalleryImages(response.data.galleryArray);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let FetchAllData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/gallery/gallery-type-all/Equipments");
      setgalleryData(response.data.galleryArray);
      setGalleryImages(response.data.galleryArray);
      setIsLoading(false);
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
            <GrFormPreviousLink className="h-11 w-10"/>
          </div>
          <div className="btnNext" onClick={nextSlide}>
            <GrFormNextLink className="h-11 w-10"/>
          </div>

          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].imgSrc} alt="" />
          </div>
        </div>
      )}

      <div className="2xl:container mx-auto">
      {isLoading ? (<div className="w-[100%] flex flex-col items-center justify-center">
          <Loader /></div>) :
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
        </div>}
      </div>

      <div className="grid grid-cols-1 w-[70%] mx-auto">
        <div className="flex justify-center items-center py-10">
          <button className="button-gallery" onClick={FetchAllData}>LOAD MORE</button>
        </div>
      </div>
    </>
  );
};

export default Dumbbell;
