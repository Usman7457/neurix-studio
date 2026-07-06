import React from 'react'
import { Link } from 'react-router-dom'

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
              Our Services
              <span className="sec-title__tagline__image">
                <img
                  src="/assets/images/shapes/header-shape-1-w.png"
                  alt="shape"
                />
              </span>
            </div>
            <h2 className="sec-title__title letters-fade-in">
              We Offer a Wide Range of <br /> Services.{" "}
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
                      AD Creative Development
                    </Link>
                  </h3>
                  <p className="service-card__text">
                    Create high-performing ad creatives that capture attention
                    and increase conversions.
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
                      <span className="bemox-btn__text">READ MORE</span>
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
                      Conversion Rate Optimization
                    </Link>
                  </h3>
                  <p className="service-card__text">
                    Turn more website visitors into customers through
                    data-driven optimization.
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
                      <span className="bemox-btn__text">READ MORE</span>
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
                    Develop customized marketing strategies that accelerate
                    sustainable business growth.
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
                      <span className="bemox-btn__text">READ MORE</span>
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
                    Automate marketing workflows to improve efficiency and
                    customer engagement.
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
                      <span className="bemox-btn__text">READ MORE</span>
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
                    Optimize campaigns to maximize your advertising return on
                    every marketing dollar.
                  </p>
                  <div className="service-card__btn">
                    <Link to="/services/roas-improvement" className="bemox-btn">
                      <span className="bemox-btn__icon">
                        <i className="icon-arrow-left"></i>
                        <i className="icon-arrow-left"></i>
                      </span>
                      <span className="bemox-btn__text">READ MORE</span>
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
            <a href="index.html" className="service-one__tag-logo">
              <img src="/assets/images/loader.png" width="50" alt="logo" />
            </a>
            <p className="service-one__bottom__text">
              Digital Marketing is the modern approach to promoting{" "}
              <Link to="/contact-us">CONTACT US</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionService