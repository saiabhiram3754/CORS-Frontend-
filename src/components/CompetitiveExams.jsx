import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const exams = [
  { name: 'CAT', url: 'https://iimcat.ac.in', icon: 'https://iimcat.ac.in/per/g06/pub/32842/ASM/WebPortal/1/images/CAT_2024_Logo.png' },
  { name: 'GMAT', url: 'https://www.mba.com/exams/gmat', icon: 'https://www.bing.com/th/id/OIP.fha1Ar0eVDytnXnIgcjwJgAAAA?w=177&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { name: 'GATE', url: 'https://gate2024.iisc.ac.in', icon: 'https://th.bing.com/th/id/OIP.yTUiQ0KC2klZ1oLqwfuhGAHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { name: 'BITSAT', url: 'https://www.bitsadmission.com', icon: 'https://th.bing.com/th/id/OIP.uODLmOtxxRtK0gHIyv11OQHaG-?w=257&h=242&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { name: 'IIFT', url: 'https://iift.ac.in', icon: 'https://th.bing.com/th/id/OIP.2H_nhMIoL1dYg_IR4m15RwHaE8?w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { name: 'IBSAT', url: 'https://www.ibsindia.org/ibsat/', icon: 'https://www.bing.com/th/id/OIP.grTx7E8j6yH8Fau_RAB9oQHaEK?w=276&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { name: 'MICAT', url: 'https://www.mica.ac.in', icon: 'https://bizbots.in/uploads/exams/exam_images/Biz_Events_Blogs_(29).jpg' },
  { name: 'TISSNET', url: 'https://www.tiss.edu', icon: 'https://tiss.ac.in/uploads/images/tiss-logo_uJSyK8O.png' },
  { name: 'MAT', url: 'https://mat.aima.in', icon: 'https://in5cdn.npfs.co/uploads/template/5520/3804/publish/images/logo.jpg?1748251283' },
  { name: 'MAHCET', url: 'https://cetcell.mahacet.org', icon: 'https://th.bing.com/th/id/OIP.yY9x0zbdiZI-cgMKct06ggHaEK?rs=1&pid=ImgDetMain' },
  { name: 'NEET', url: 'https://neet.nta.nic.in/', icon: 'https://resize.indiatvnews.com/en/resize/newbucket/730_-/2023/04/neet-ug-2023-registration-window-neet-ug-2023-neet-nta-nic-in-2023-1681140120.jpg' },
  { name: 'SNAP', url: 'https://www.snaptest.org', icon: 'https://www.snaptest.org/mobile/img/snap.png' },
  { name: 'KIITEE', url: 'https://kiitee.kiit.ac.in', icon: 'https://kiitee.kiit.ac.in/wp-content/uploads/2025/01/kiitee-mobile-logo.png'}
];


const CompetitiveExamsCarousel = () => {
  return (
    <section  id ="exams" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Competitive Exams
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="pt-4"
        >
          {exams.map((exam, index) => (
            <SwiperSlide key={index}>
              <a
                href={exam.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl shadow hover:shadow-md transition text-center p-4 border border-indigo-200 hover:border-indigo-500"
              >
                <img
                  src={exam.icon}
                  alt={`${exam.name} icon`}
                  className="w-12 h-12 mx-auto mb-2 object-contain"
                />
                <span className="text-indigo-700 font-semibold">{exam.name}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CompetitiveExamsCarousel;
