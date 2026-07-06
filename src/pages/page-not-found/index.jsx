import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
        <title>404 - Page Not Found | Neurix Studio</title>
      </Helmet>
      <div className="error-area section-space">
        <div className="container">
          <div className="error-area__content">
            <div
              className="error-area__thumb wow pulse"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <img
                src="/assets/images/resources/404-error.png"
                alt="404 error"
              />
            </div>
            <h3
              className="error-area__title wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              Oops! Page Not Found
            </h3>
            <p
              className="error-area__text wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              Sorry This Page Not found take a look at our most popular
            </p>
            <div
              className="error-area__btns text-center wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <Link to="/contact-us" className="bemox-btn">
                <span className="bemox-btn__icon">
                  <i className="icon-arrow-left"></i>
                  <i className="icon-arrow-left"></i>
                </span>
                <span className="bemox-btn__text">Go to home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
