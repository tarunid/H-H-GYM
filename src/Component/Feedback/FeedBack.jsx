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

  console.log(testimonials)

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

          <div className="container">
            <div className='grid grid-cols-1'>
          
            </div>
            <Swiper
              // effect={'coverflow'}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                    </svg>
                    <p className="leading-relaxed mb-6">{testimonial.feedback}</p>
                    <a className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={testimonial.imageLink}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900 leading-relaxed mb-6 text-sm md:text-base">
                          {testimonial.username}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {testimonial.date}
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
