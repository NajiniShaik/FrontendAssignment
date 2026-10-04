
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

const testimonials = [
  {
    quote:
      "TIS has provided a nurturing environment where my child has developed confidence and leadership qualities alongside high academic success.",
    author: "Namita Agarwal",
    role: "Parent of Grade X Student"
  },
  {
    quote:
      "The 16+ sports facilities and holistic focus on boarding life make Tulas International School stand far above other boarding options in Dehradun.",
    author: "Tashi Tsering",
    role: "Parent of Grade XII Student"
  },
  {
    quote:
      "The 6:1 student-teacher ratio ensures personalized attention. My daughter's overall focus and extracurricular skills have blossomed.",
    author: "Dr. Rajesh Sharma",
    role: "Parent of Grade VIII Student"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="section-container reviews-container">
        <h2 className="section-title">What Parents Say</h2>
        <p className="section-subtitle">
          Real experiences from our global community
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="reviews-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="reviews-slide-card">
                <p className="reviews-quote">"{item.quote}"</p>
                <h4 className="reviews-author">{item.author}</h4>
                <p className="reviews-role">{item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
