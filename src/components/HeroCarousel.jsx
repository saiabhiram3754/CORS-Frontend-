import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  "/images/s5.jpeg",
  "/images/s4.jpg",
  "/images/s1.png"
];

const HeroCarousel = () => {
  return (
    <section className="w-full h-[430px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        speed={1000}
        className="w-full h-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-1.5 rounded-full z-10 shadow">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-1.5 rounded-full z-10 shadow">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
