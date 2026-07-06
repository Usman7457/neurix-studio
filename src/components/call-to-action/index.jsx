import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <>
      <div className="footer-cta section-space">
        <div className="container">
          <div className="footer-cta__inner">
            <div className="footer-cta__title">
              <p className="footer-cta__title-subtitle">
                <span className="footer-cta__subtitle__shape">
                  <img src="/assets/images/icon/header-icon-1.png" alt="icon" />
                </span>
                GET START THE PROJECTS
                <span className="footer-cta__subtitle__shape">
                  <img src="/assets/images/icon/header-icon-1.png" alt="icon" />
                </span>
              </p>
              <h2 className="footer-cta__title-title">LET’S TALK</h2>
              <div className="footer-cta__title__email">
                <a
                  href="mailto:bemox@gmail.com"
                  className="footer-cta__title__email-link"
                >
                  bemox@gmail.com
                </a>
              </div>
            </div>
            <div className="footer-cta__btn">
              <Link to="/contact-us" className="bemox-btn">
                <span className="bemox-btn__icon">
                  <i className="icon-arrow-left"></i>
                  <i className="icon-arrow-left"></i>
                </span>
                <span className="bemox-btn__text">START THE JourNEY</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-cta__logo">
          <img src="/assets/images/icon/logo-main.png" alt="cta-image" />
        </div>
        <div className="footer-cta__image-one">
          <img src="/assets/images/cta/cta-1-1.jpg" alt="cta-image" />
        </div>
        <div className="footer-cta__image-two">
          <img src="/assets/images/cta/cta-1-2.jpg" alt="cta-image" />
        </div>
      </div>
    </>
  );
};

export default CallToAction;
