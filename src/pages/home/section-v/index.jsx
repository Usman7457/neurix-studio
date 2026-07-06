import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Michael Carter",
    role: "Founder, Elevate Commerce",
    text: "Their data-driven approach significantly improved our ROAS. Every recommendation was backed by real insights and results.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager, NovaTech Solutions",
    text: "Creative, reliable, and easy to work with. Neurix Studio helped us reach the right audience and grow our brand.",
    rating: 5,
  },
  {
    name: "Daniel Rodriguez",
    role: "CEO, BrightWave Media",
    text: "Neurix Studio transformed our campaigns with better creatives and smarter optimization. We've seen consistent growth and stronger returns.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Co-Founder, Urban Style Co.",
    text: "Professional, responsive, and results-driven. Their team helped us improve lead quality and overall campaign performance.",
    rating: 5,
  },
  {
    name: "James Anderson",
    role: "Director, Apex Digital Ventures",
    text: "A great marketing partner that focuses on measurable growth. Their strategies consistently deliver real business value.",
    rating: 5,
  },
];

const SectionV = () => {
  return (
    <div className="testimonials-two section-space">
      <div className="container">
        <div className="testimonials-two__top">
          <div className="row">
            <div className="col-xl-5">
              <div className="sec-title sec-title--two">
                <div className="sec-title__tagline wow fadeInUp">
                  <span className="sec-title__tagline__image">
                    <img
                      src="/assets/images/shapes/work-process-2-1.png"
                      alt="shape"
                    />
                  </span>
                  OUR TESTIMONIALS say
                </div>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="sec-title sec-title--two">
                <div className="sec-title__funfact">
                  <h2 className="sec-title__funfact__count count-box">
                    <span className="count-text">100</span>
                    <span>+</span>
                  </h2>
                </div>

                <h2 className="sec-title__title bw-split-text">
                  Real feedback from businesses we've helped grow through strategic digital marketing.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-two__inner-box">
          <div className="row gutter-y-30">
            <div className="col-lg-5">
              <div className="testimonials-two__thumb">
                <div className="testimonials-two__thumb__item">
                  <img
                    src="/assets/images/resources/testimonials-author-1-1.png"
                    alt=""
                  />
                </div>

                <span className="testimonials-two__thumb__shape" />

                <div className="shape-quite">
                  <img src="/assets/images/shapes/shape-quite.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="testimonials-two__inner">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  className="testimonials-swiper"
                >
                  {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                      <div className="testimonials-two__item">
                        <div className="testimonials-two__item__top">
                          <div className="star">
                            {Array.from({ length: t.rating }).map((_, idx) => (
                              <span className="icon" key={idx}>
                                <i className="icon-ster"></i>
                              </span>
                            ))}
                            <span className="testimonials-two__item__rating">
                              {t.rating}.0 Star Ratings
                            </span>
                          </div>

                          <div className="quite">
                            <i className="icon-quite"></i>
                          </div>
                        </div>

                        <p className="testimonials-two__item__text">
                          “{t.text}
                        </p>

                        <div className="testimonials-two__item__autor">
                          <h4 className="name">{t.name}</h4>
                          <p className="dectraption">{t.role}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper navigation styling hook (optional override) */}
      <style>{`
        .testimonials-swiper .swiper-button-prev,
        .testimonials-swiper .swiper-button-next {
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default SectionV;
