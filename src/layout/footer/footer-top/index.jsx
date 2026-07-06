import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <>
      <div className="main-footer__top">
        <div className="container">
          <div className="main-footer__top__inner">
            <div className="row gutter-y-30">
              <div
                className="col-md-6 col-xl-3 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget footer-widget--about">
                  <Link to="/" className="footer-widget__logo">
                    <img
                      src="/assets/images/logo-light.png"
                      width="212"
                      alt="Bemox HTML Template"
                    />
                  </Link>
                  <p className="footer-widget__text">
                    We help businesses grow with ad creatives, CRO, digital
                    marketing strategies, marketing automation, & ROAS
                    optimization.
                  </p>
                  {/*<div className="footer-widget__social">
                    <div className="footer-widget__social__box">
                      <a href="#">
                        <i className="icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon-instragram"></i>
                      </a>
                      <a href="#">
                        <i className="icon-youtube"></i>
                      </a>
                    </div>
                  </div>*/}
                </div>
              </div>
              <div
                className="col-md-6 col-xl-3 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget footer-widget--links">
                  <h2 className="footer-widget__title">Useful Links</h2>
                  <ul className="list-unstyled footer-widget__links">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ's</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-3 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="footer-widget footer-widget--links-two">
                  <h2 className="footer-widget__title">Services We Offer</h2>
                  <ul className="list-unstyled footer-widget__links">
                    <li>
                      <Link to="/services/ad-creative-development">
                        AD Creative Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/conversion-rate-optimization">
                        Conversion Rate Optimization
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/digital-marketing-strategy">
                        Digital Marketing Strategy
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/marketing-automation">
                        Marketing Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/roas-improvement">
                        ROAS Improvement
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-3 wow fadeInUp"
                data-wow-delay="700ms"
              >
                <div className="footer-widget footer-widget--list">
                  <h2 className="footer-widget__title">Contact Us</h2>
                  <ul className="list-unstyled footer-widget__info__list">
                    <li className="footer-widget__info__item">
                      <div className="footer-widget__info__icon">
                        <i className="icon-phone"></i>
                      </div>
                      <div className="footer-widget__info__content">
                        <p className="footer-widget__info__text">
                          <a href="tel:+ 44 7377 578671">+ 44 7377 578671</a>
                        </p>
                        <p className="footer-widget__info__text">
                          <a href="tel:+ 44 7377 578672">+ 44 7377 578672</a>
                        </p>
                      </div>
                    </li>
                    <li className="footer-widget__info__item">
                      <div className="footer-widget__info__icon">
                        <i className="icon-mail"></i>
                      </div>
                      <div className="footer-widget__info__content">
                        <p className="footer-widget__info__text">
                          <a href="mailto:info@neurixstudio.com">
                            info@neurixstudio.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="footer-widget__info__item">
                      <div className="footer-widget__info__icon">
                        <i className="icon-pin"></i>
                      </div>
                      <div className="footer-widget__info__content">
                        <p className="footer-widget__info__text">
                          4517 Washington London Road No: 65, Queen's land,
                          United Kingdom.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
