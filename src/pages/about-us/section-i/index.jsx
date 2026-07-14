import React from "react";
import { Link } from "react-router-dom";

const SectionI = () => {
  return (
    <>
      <div className="about-one section-space" id="about">
        <div className="container">
          <div className="row gutter-y-30">
            <div className="col-lg-6">
              <div className="about-one__thumb">
                <div className="about-one__text-round">
                  <div className="about-one__text-image">
                    <img
                      src="/assets/images/shapes/round-text.png"
                      alt="image-about"
                    />
                  </div>
                  <Link
                    to="/contact-us"
                    className="about-one__text-round__link"
                  >
                    <i className="icon-arrow-top"></i>
                  </Link>
                </div>
                <div className="about-one__thumb__item img-reveal-left">
                  <img
                    src="/assets/images/about/about-1-1.jpg"
                    alt="about image-about"
                  />
                </div>
                <div className="about-one__thumb__item-small img-reveal-top">
                  <img
                    src="/assets/images/about/about-s-1-1.jpg"
                    alt="about image-about"
                  />
                </div>
                <div
                  className="about-one__thumb__exprince wow fadeInLeft"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  <div className="about-one__thumb__funfact count-box">
                    <h3 className="about-one__thumb__count">
                      <span
                        className="count-text"
                        data-stop="29"
                        data-speed="1500"
                      ></span>
                      <span>10+</span>
                    </h3>
                    <p className="about-one__thumb__funfact__text">
                      Years Of EXPERIENCE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="sec-title text-start">
                  <h2 className="sec-title__title letters-fade-in">
                    Performance Marketing That Creates Real Business Growth
                    <span className="sec-title__title__shape">
                      <img
                        src="/assets/images/shapes/header-shape.png"
                        alt="image-about"
                      />
                    </span>
                  </h2>
                </div>
                <div className="about-one__content__inner">
                  <p
                    className="about-one__text wow fadeInUp mt-5"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    Marketing should do more than generate clicks—it should
                    generate customers. We help businesses attract the right
                    audience, improve conversion rates and increase return on
                    every marketing investment through tailored strategies,
                    compelling creatives and continuous performance
                    optimisation. Every decision is driven by commercial
                    objectives, ensuring your marketing contributes directly to
                    sustainable business growth.
                  </p>
                  <Link
                    to="/contact-us"
                    className="bemox-btn wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <span className="bemox-btn__icon">
                      <i className="icon-arrow-left"></i>
                      <i className="icon-arrow-left"></i>
                    </span>
                    <span className="bemox-btn__text">Get Free Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-one__shape bw-animate-rotate" data-speed="3">
          <img src="/assets/images/shapes/shape-1-1.png" alt="image-about" />
        </div>
      </div>
    </>
  );
};

export default SectionI;
