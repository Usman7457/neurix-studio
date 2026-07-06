import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ================= MAIN HEADER ================= */}
      <div className="main-header main-header--one sticky-header sticky-header--normal">
        <div className="container">
          <div className="main-header__inner">
            {/* LOGO */}
            <div className="main-header__logo">
              <Link to="/">
                <img
                  src="/assets/images/logo-light.png"
                  alt="Logo"
                  width="125"
                />
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>

                <li className="dropdown">
                  <Link to="/services">Our Services</Link>
                  <ul className="sub-menu">
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
                </li>

                <li>
                  <Link to="/faq">FAQ's</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </nav>

            {/* RIGHT SIDE */}
            <div className="main-header__right">
              {/* MOBILE BUTTON */}
              <div
                className="mobile-nav__btn mobile-nav__toggler"
                onClick={() => setMobileOpen(true)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* CALL BUTTON */}
              <a
                href="tel:+447377578671"
                className="main-header__btn bemox-btn"
              >
                <span className="bemox-btn__icon">
                  <i className="icon-arrow-left"></i>
                  <i className="icon-arrow-left"></i>
                </span>
                <span className="bemox-btn__text">Let’s Talk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-nav__wrapper ${mobileOpen ? "expanded" : ""}`}>
        {/* OVERLAY */}
        <div
          className="mobile-nav__overlay"
          onClick={() => setMobileOpen(false)}
        ></div>

        {/* CONTENT */}
        <div className="mobile-nav__content">
          {/* CLOSE */}
          <button
            type="button"
            className="mobile-nav__close"
            onClick={() => setMobileOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>

          {/* LOGO */}
          <div className="logo-box">
            <Link to="/" aria-label="logo">
              <img src="/assets/images/logo-light.png" width="180" alt="logo" />
            </Link>
          </div>

          {/* MOBILE MENU LINKS */}
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li onClick={() => setMobileOpen(false)}>
                <Link to="/">Home</Link>
              </li>

              <li onClick={() => setMobileOpen(false)}>
                <Link to="/about-us">About Us</Link>
              </li>

              <li onClick={() => setMobileOpen(false)}>
                <Link to="/services">Our Services</Link>
              </li>

              <li onClick={() => setMobileOpen(false)}>
                <Link to="/faq">FAQ's</Link>
              </li>

              <li onClick={() => setMobileOpen(false)}>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:info@neurixstudio.com">info@neurixstudio.com</a>
            </li>

            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+447377578671">+44 7377 578671</a>
            </li>
          </ul>

          {/* SOCIAL */}
          <div className="mobile-nav__social">
            <a href="https://facebook.com">
              <i className="icon-facebook"></i>
            </a>
            <a href="https://twitter.com">
              <i className="icon-twitter"></i>
            </a>
            <a href="https://instagram.com">
              <i className="icon-instragram"></i>
            </a>
            <a href="https://youtube.com">
              <i className="icon-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
