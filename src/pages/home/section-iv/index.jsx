import React from "react";

const SectionIV = () => {
  return (
    <>
      <section className="funfact-three section-space">
        <div
          className="funfact-three__bg"
          style={{
            backgroundImage: "url('/assets/images/shapes/funfact-3-1.png')",
          }}
        ></div>
        <div className="container">
          <ul
            className="funfact-three__list list-unstyled wow bounceInUp"
            data-owl-duration="1300ms"
            data-wow-delay="500ms"
          >
            <li>
              <div className="funfact-three__list__item">
                <h2 className="funfact-three__item__count count-box">
                  <span
                    className="count-text"
                    data-stop="85"
                    data-speed="1500"
                  ></span>
                  <span>1K+</span>
                </h2>
                <p className="funfact-three__item__text">Success Project</p>
              </div>
            </li>
            <li>
              <div className="funfact-three__list__item">
                <h2 className="funfact-three__item__count count-box">
                  <span
                    className="count-text"
                    data-stop="9"
                    data-speed="1500"
                  ></span>
                  <span>3K+</span>
                </h2>
                <p className="funfact-three__item__text">Clients satisfied</p>
              </div>
            </li>
            <li>
              <div className="funfact-three__list__item">
                <h2 className="funfact-three__item__count count-box">
                  <span
                    className="count-text"
                    data-stop="35"
                    data-speed="1500"
                  ></span>
                  <span>100%</span>
                </h2>
                <p className="funfact-three__item__text">24/7 Support Team </p>
              </div>
            </li>
            <li>
              <div className="funfact-three__list__item">
                <h2 className="funfact-three__item__count count-box">
                  <span
                    className="count-text"
                    data-stop="20"
                    data-speed="1500"
                  ></span>
                  <span>10+</span>
                </h2>
                <p className="funfact-three__item__text">Awards Winning </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="funfact-three__shape-one">
          <img src="/assets/images/shapes/funfact-shape-1-2.png" alt="shape" />
        </div>
        <div className="funfact-three__shape-two">
          <img src="/assets/images/shapes/funfact-shape-1-1.png" alt="shape" />
        </div>
      </section>
    </>
  );
};

export default SectionIV;
