import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const exams = [
  { name: 'CAT', url: 'https://iimcat.ac.in', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/75/IIM_Calcutta_Logo.svg' },
  { name: 'GMAT', url: 'https://www.mba.com/exams/gmat', icon: 'https://www.bing.com/th/id/OIP.fha1Ar0eVDytnXnIgcjwJgAAAA?w=177&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { name: 'GATE', url: 'https://gate2024.iisc.ac.in', icon: 'https://th.bing.com/th/id/OIP.yTUiQ0KC2klZ1oLqwfuhGAHaHa?w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { name: 'BITSAT', url: 'https://www.bitsadmission.com', icon: 'https://th.bing.com/th/id/OIP.uODLmOtxxRtK0gHIyv11OQHaG-?w=257&h=242&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { name: 'IIFT', url: 'https://iift.ac.in', icon: 'https://th.bing.com/th/id/OIP.2H_nhMIoL1dYg_IR4m15RwHaE8?w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { name: 'IBSAT', url: 'https://www.ibsindia.org/ibsat/', icon: 'https://www.bing.com/th/id/OIP.grTx7E8j6yH8Fau_RAB9oQHaEK?w=276&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { name: 'MICAT', url: 'https://www.mica.ac.in', icon: 'https://www.mica.ac.in/images/mica-logo.svg' },
  { name: 'TISSNET', url: 'https://www.tiss.edu', icon: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Tata_Institute_of_Social_Sciences_Logo.png' },
  { name: 'MAT', url: 'https://mat.aima.in', icon: 'https://in5cdn.npfs.co/uploads/template/5520/3804/publish/images/logo.jpg?1748251283' },
  { name: 'MAHCET', url: 'https://cetcell.mahacet.org', icon: 'https://cetcell.mahacet.org/images/logo.png' },
  { name: 'NEET', url: 'https://neet.nta.nic.in/', icon: 'https://www.bing.com/images/search?q=neet%20exam%20logo&FORM=IQFRBA&id=36E2F2E060567B28166445C454CEC5A7FDA4F084' },
  { name: 'SNAP', url: 'https://www.snaptest.org', icon: 'https://www.snaptest.org/themes/custom/snap2020/images/snap_logo.svg' },
  { name: 'KIITEE', url: 'https://kiitee.kiit.ac.in', icon: 'https://www.bing.com/images/search?q=kiitee%20exam%20logo&FORM=IQFRBA&id=71F1AAEC0369EA9B6769101B8A2EBBDF492CC6F7'}
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
