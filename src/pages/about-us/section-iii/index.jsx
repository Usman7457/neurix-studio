import React from "react";

const SectionIII = () => {
  return (
    <>
      <div className="banner-image">
        <div className="banner-image__image">
          <img
            src="/assets/images/backgrounds/banner-1-1.jpg"
            alt="image-about"
          />
        </div>
        <div className="container">
          <div className="banner-image__box">
            <div
              className="banner-image__social wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <p className="banner-image__social__title">follow us:</p>
              <div className="banner-image__social__inner">
                <a href="/">
                  <span className="banner-icon">
                    <i className="icon-facebook"></i>
                  </span>
                  <span className="banner-icon-text">
                    <i className="icon-facebook"></i>
                    <span>facebook</span>
                  </span>
                </a>
                <a href="/">
                  <span className="banner-icon">
                    <i className="icon-twitter"></i>
                  </span>
                  <span className="banner-icon-text">
                    <i className="icon-twitter"></i>
                    <span>Twitter</span>
                  </span>
                </a>
                <a href="/">
                  <span className="banner-icon">
                    <i className="icon-instragram"></i>
                  </span>
                  <span className="banner-icon-text">
                    <i className="icon-instragram"></i>
                    <span>instagram</span>
                  </span>
                </a>
                <a href="/">
                  <span className="banner-icon">
                    <i className="icon-youtube"></i>
                  </span>
                  <span className="banner-icon-text">
                    <i className="icon-youtube"></i>
                    <span>LinkedIn</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionIII;
