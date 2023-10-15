import './FeedBack.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'; // Import Swiper modules

import { useEffect, useState } from 'react';
import axiosInstance from '../../interceptors/axiosInstance';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const FeedBack = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    axiosInstance
      .get('/feedback/all')
      .then((response) => {
        setTestimonials(response.data.TestimonialArray);
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 640) {
            setSlidesPerView(1);
        } else {
            setSlidesPerView(2);
        }
    };

    // Call once to set initial state
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  const prevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
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

          <div className="container w-[90%] mx-auto">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={slidesPerView}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 2.5,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              onSwiper={(swiper) => setSwiper(swiper)}
              className="swiper_container"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full  bg-gray-100 p-8 rounded">
                    <p className="leading-relaxed mb-6">{testimonial.feedback}</p>
                    <a className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={testimonial.imageLink}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900 leading-relaxed text-sm md:text-base">
                          {testimonial.username}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {testimonial.userWork}
                        </span>
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="grid grid-cols-1 w-[60%] mx-auto py-5">
              <div className="w-[90%] mx-auto flex justify-center items-center gap-5">
                <button
                  onClick={prevSlide}
                  className="bg-[var(--primary-color)] p-4 rounded-xl text-[#fff]"
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-[var(--primary-color)] p-4 rounded-xl text-[#fff]"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedBack;
