import React from "react";
import { Link } from "react-router-dom";

const SectionI = () => {
  return (
    <>
      <div className="hero-two section-space" id="hero">
        <div className="hero-two__inner">
          <div className="container">
            <div className="row gutter-y-30 align-items-end">
              <div className="col-xl-4">
                <div className="hero-two__thumb">
                  <div
                    className="hero-two__thumb__shape wow fadeInLeft"
                    data-wow-duration="1300ms"
                    data-wow-delay="600ms"
                  >
                    <img
                      src="/assets/images/shapes/hero-shape-2-4.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="hero-two__thumb__item wow fadeInLeft"
                    data-wow-duration="1800ms"
                    data-wow-delay="600ms"
                  >
                    <img
                      src="/assets/images/resources/hero-2-1.png"
                      alt="image-home"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="hero-two__content">
                  <h2 className="hero-two__title">
                    <span className="hero-two__title__text letters-fade-in">
                      We Are Best{" "}
                      <span className="title-border word">Marketing</span>
                    </span>{" "}
                    <br />
                    <span className="hero-two__title__box">
                      <span className="image">
                        <img
                          src="/assets/images/shapes/hero-shape-2-1-text.png"
                          alt="shape"
                        />
                      </span>
                      <span className="letters-fade-in">Business Solution.</span>
                    </span>
                  </h2>
                  <span
                    className="shape wow fadeInRight"
                    data-wow-duration="1500ms"
                    data-wow-delay="600ms"
                  ></span>
                  <p
                    className="hero-two__text wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="600ms"
                  >
                    Digital Marketing this work with partners or influencers who
                    promote your products for a commission fast this business
                    solution this company.
                  </p>
                  <div
                    className="hero-two__btn-box wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="600ms"
                  >
                    <Link to="/about-us" className="bemox-btn bemox-btn--white">
                      <span className="bemox-btn__icon">
                        <i className="icon-arrow-left"></i>
                        <i className="icon-arrow-left"></i>
                      </span>
                      <span className="bemox-btn__text">About Us</span>
                    </Link>
                    <Link to="/services" className="bemox-btn bemox-btn--black">
                      <span className="bemox-btn__icon">
                        <i className="icon-arrow-left"></i>
                        <i className="icon-arrow-left"></i>
                      </span>
                      <span className="bemox-btn__text">Our Services</span>
                    </Link>
                  </div>

                  <div
                    className="hero-two__text-round wow fadeIn"
                    data-wow-duration="1500ms"
                    data-wow-delay="500ms"
                  >
                    <div className="hero-two__text-image">
                      <img
                        src="/assets/images/shapes/round-text-2.png"
                        alt="imaghome"
                      />
                    </div>
                    <a
                      href="blog-details.html"
                      className="hero-two__text-round__link"
                    >
                      <img
                        src="/assets/images/shapes/logo-round.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-two__slider">
          <div className="hero-two__slider__inner">
            <div className="hero-two__slider__item">
              <span>
                <img src="/assets/images/shapes/slider-1-1.png" alt="icon" />
              </span>
              SUPPORT
            </div>
            <div className="hero-two__slider__item">
              <span>
                <img src="/assets/images/shapes/slider-1-2.png" alt="icon" />
              </span>
              AGENCY
            </div>
            <div className="hero-two__slider__item">
              <span>
                <img src="/assets/images/shapes/slider-1-1.png" alt="icon" />
              </span>
              Marketing
            </div>
            <div className="hero-two__slider__item">
              <span>
                <img src="/assets/images/shapes/slider-1-2.png" alt="icon" />
              </span>
              BUSINESS
            </div>
            <div className="hero-two__slider__item">
              <span>
                <img src="/assets/images/shapes/slider-1-1.png" alt="icon" />
              </span>
              Development
            </div>
            <div className="hero-two__slider__item">
              <span>
                <img src="/assets/images/shapes/slider-1-2.png" alt="icon" />
              </span>
              AGENCY
            </div>
            <div className="hero-two__slider__item">
              <span>
                <img src="/assets/images/shapes/slider-1-1.png" alt="icon" />
              </span>
              Marketing
            </div>
            <div className="hero-two__slider__item">
              <span>
                <img src="/assets/images/shapes/slider-1-2.png" alt="icon" />
              </span>
              BUSINESS
            </div>
            <div className="hero-two__slider__item">
              <span>
                <img src="/assets/images/shapes/slider-1-1.png" alt="icon" />
              </span>
              Development
            </div>
            <div className="hero-two__slider__item">
              <span>
                <img src="/assets/images/shapes/slider-1-2.png" alt="icon" />
              </span>
              AGENCY
            </div>
          </div>
        </div>
        <div
          className="hero-two__shape-one wow fadeIn"
          data-wow-duration="1500ms"
          data-wow-delay="500ms"
        >
          <img src="/assets/images/shapes/hero-shape-2-3.png" alt="shape" />
        </div>

        <div
          className="hero-two__shape-two wow fadeIn"
          data-wow-duration="1500ms"
          data-wow-delay="500ms"
        >
          <img src="/assets/images/shapes/hero-shape-2-1.png" alt="shape" />
        </div>

        <div
          className="hero-two__shape-three wow fadeIn"
          data-wow-duration="1500ms"
          data-wow-delay="500ms"
        >
          <img src="/assets/images/shapes/hero-shape-2-2.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default SectionI;
