import React from "react";
import { Link } from "react-router-dom";

const SectionII = () => {
  return (
    <>
      <div className="about-two section-space" id="about">
        <div className="container">
          <div className="about-two__top">
            <div className="row">
              <div className="col-lg-5">
                <div className="sec-title sec-title--two text-start">
                  <div
                    className="sec-title__tagline justify-content-start  wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <span className="sec-title__tagline__image">
                      <img
                        src="/assets/images/shapes/work-process-2-1.png"
                        alt="shape"
                      />
                    </span>
                    WHO WE ARE
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="sec-title">
                  <h2
                    className="sec-title__title bw-split-text-two"
                    data-padding="93"
                  >
                    Digital Marketing Agency dedicated to helping brands grow
                    succeed in the digital This world.
                  </h2>
                </div>
                <p
                  className="sec-title__text wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  Digital marketing is a company that helps brands and
                  businesses grow providing services related quality only on
                  advertising, creative agencies
                </p>
              </div>
            </div>
          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-5">
              <div className="about-two__thumb">
                <div
                  className="about-two__funfat wow fadeInLeft"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  <div className="about-two__funfat__inner">
                    <h3 className="about-two__funfat__count count-box">
                      <span
                        className="count-text"
                        data-stop="32"
                        data-speed="1500"
                      ></span>
                      <span>+</span>
                    </h3>
                    <p className="about-two__funfat__text">YEARS OF</p>
                  </div>
                  <div className="about-two__funfat__letter bw__random-text">
                    EXPERIENCE
                  </div>
                </div>
                <div className="about-two__shape">
                  <svg
                    width="142"
                    height="169"
                    viewBox="0 0 142 169"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="about1"
                      d="M71 168.5L71 56.1667L85.8333 56.1667C116.853 56.1667 142 81.3134 142 112.333C142 143.353 116.853 168.5 85.8334 168.5L71 168.5Z"
                      fill="#040404"
                    />
                    <path
                      className="about2"
                      d="M71 112.333L71 4.57764e-05L56.1667 4.64248e-05C25.1467 4.77807e-05 3.55432e-06 25.1467 4.91024e-06 56.1667C6.26617e-06 87.1867 25.1467 112.333 56.1667 112.333L71 112.333Z"
                      fill="#C3EE18"
                    />
                  </svg>
                </div>
                <div className="about-two__thumb__item-small hover:shine img-reveal-top">
                  <img
                    src="/assets/images/about/about-s-2-1.jpg"
                    alt="about image-home"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-two__thumb about-two__thumb--two">
                <div className="about-two__thumb__item hover:shine img-reveal-left">
                  <img
                    src="/assets/images/about/about-2-1.jpg"
                    alt="image-home"
                  />
                </div>
                <div className="about-two__thumb__inner">
                  <div className="about-two__thumb__item__small-one hover:shine img-reveal-left">
                    <img
                      src="/assets/images/about/about-s-2-2.jpg"
                      alt="image-home"
                    />
                  </div>
                  <div
                    className="about-two__thumb__item__btn bemox-circle-btn__wrapper wow bounceInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <Link to="/about-us" className="bemox-circle-btn">
                      <span className="bemox-circle-btn__text">
                        More <br /> About Us
                      </span>
                      <span className="icon-arrow-top"></span>
                      <i className="bemox-circle-btn__dot"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionII;
