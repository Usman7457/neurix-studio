import React from "react";
import { Link } from "react-router-dom";

const SectionService = () => {
  return (
    <>
      <div className="service-one section-space">
        <div className="container">
          <div className="sec-title sec-title--white text-center">
            <div
              className="sec-title__tagline justify-content-center  wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <span className="sec-title__tagline__image">
                <img
                  src="/assets/images/shapes/header-shape-1-w.png"
                  alt="shape"
                />
              </span>
              Marketing That Moves Your Business Forward
              <span className="sec-title__tagline__image">
                <img
                  src="/assets/images/shapes/header-shape-1-w.png"
                  alt="shape"
                />
              </span>
            </div>
            <h2 className="sec-title__title letters-fade-in">
              Performance Marketing Solutions That <br /> Deliver Results.{" "}
              <span className="sec-title__title__shape">
                <img
                  src="/assets/images/shapes/header-shape-w.png"
                  alt="image-service"
                />
              </span>
            </h2>
          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-4 col-md-6">
              <div
                className="service-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                <div className="service-card__top">
                  <div className="service-card__icon">
                    <i className="icon-mobilemarkting"></i>
                  </div>
                  <span className="service-card__number">Service 01</span>
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">
                    <Link to="/services/ad-creative-development">
                      Ad Creative Development
                    </Link>
                  </h3>
                  <p className="service-card__text">
                    Create advertising that captures attention, builds trust and
                    encourages customers to take action.
                  </p>
                  <div className="service-card__btn">
                    <Link
                      to="/services/ad-creative-development"
                      className="bemox-btn"
                    >
                      <span className="bemox-btn__icon">
                        <i className="icon-arrow-left"></i>
                        <i className="icon-arrow-left"></i>
                      </span>
                      <span className="bemox-btn__text">Explore Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="service-card__top">
                  <div className="service-card__icon">
                    <i className="icon-digitalmarkting2"></i>
                  </div>
                  <span className="service-card__number">Service 02</span>
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">
                    <Link to="/services/conversion-rate-optimization">
                      Conversion Rate Optimisation
                    </Link>
                  </h3>
                  <p className="service-card__text">
                    Turn website visitors into qualified leads and customers by
                    improving every stage of the user journey.
                  </p>
                  <div className="service-card__btn">
                    <Link
                      to="/services/conversion-rate-optimization"
                      className="bemox-btn"
                    >
                      <span className="bemox-btn__icon">
                        <i className="icon-arrow-left"></i>
                        <i className="icon-arrow-left"></i>
                      </span>
                      <span className="bemox-btn__text">Explore Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="500ms"
              >
                <div className="service-card__top">
                  <div className="service-card__icon">
                    <i className="icon-affleate-markting2"></i>
                  </div>
                  <span className="service-card__number">Service 03</span>
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">
                    <Link to="/services/digital-marketing-strategy">
                      Digital Marketing Strategy
                    </Link>
                  </h3>
                  <p className="service-card__text">
                    Build a clear growth roadmap that aligns your marketing
                    investment with measurable business objectives.
                  </p>
                  <div className="service-card__btn">
                    <Link
                      to="/services/digital-marketing-strategy"
                      className="bemox-btn"
                    >
                      <span className="bemox-btn__icon">
                        <i className="icon-arrow-left"></i>
                        <i className="icon-arrow-left"></i>
                      </span>
                      <span className="bemox-btn__text">Explore Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                <div className="service-card__top">
                  <div className="service-card__icon">
                    <i className="icon-mobilemarkting"></i>
                  </div>
                  <span className="service-card__number">Service 04</span>
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">
                    <Link to="/services/marketing-automation">
                      Marketing Automation
                    </Link>
                  </h3>
                  <p className="service-card__text">
                    Automate repetitive tasks, streamline customer journeys and
                    create efficient systems that scale with your business.
                  </p>
                  <div className="service-card__btn">
                    <Link
                      to="/services/marketing-automation"
                      className="bemox-btn"
                    >
                      <span className="bemox-btn__icon">
                        <i className="icon-arrow-left"></i>
                        <i className="icon-arrow-left"></i>
                      </span>
                      <span className="bemox-btn__text">Explore Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="service-card__top">
                  <div className="service-card__icon">
                    <i className="icon-branding"></i>
                  </div>
                  <span className="service-card__number">Service 05</span>
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">
                    <Link to="/services/roas-improvement">
                      ROAS Improvement
                    </Link>
                  </h3>
                  <p className="service-card__text">
                    Improve campaign efficiency, reduce wasted spend and
                    maximise the return from every advertising investment.
                  </p>
                  <div className="service-card__btn">
                    <Link to="/services/roas-improvement" className="bemox-btn">
                      <span className="bemox-btn__icon">
                        <i className="icon-arrow-left"></i>
                        <i className="icon-arrow-left"></i>
                      </span>
                      <span className="bemox-btn__text">Explore Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-card__image wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="500ms"
              >
                <img
                  src="/assets/images/resources/service-1-1.jpg"
                  alt="image-service"
                />
              </div>
            </div>
          </div>
          <div
            className="service-one__bottom wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <p className="service-one__bottom__text">
              Digital Marketing is the modern approach to promoting - {" "}
              <Link to="/contact-us">CONTACT US</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionService;
