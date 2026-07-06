import React, { useState } from "react";

const SectionIII = () => {
  const [active, setActive] = useState("itemOne");

  const tabs = {
    itemOne: {
      title: "Our Mission",
      text: "Our mission is to deliver high-quality digital marketing solutions that help businesses grow with modern strategies and performance-driven results.",
      points: [
        "Digital creativity and technology",
        "Branding to UI/UX Design",
        "Passionate designers & strategists",
      ],
      link: "service-d-affiliate.html",
    },
    itemTwo: {
      title: "Our Vision",
      text: "Our vision is to become a globally recognized digital agency driving innovation, transformation, and measurable business success.",
      points: [
        "Global digital leadership",
        "Innovation-first approach",
        "Client-focused growth strategies",
      ],
      link: "service-d-influencer-two.html",
    },
    itemThree: {
      title: "Core Values",
      text: "We believe in creativity, honesty, and performance. These values define every project we deliver.",
      points: [
        "Integrity & transparency",
        "Creativity & innovation",
        "Performance-driven execution",
      ],
      link: "service-d-digital.html",
    },
  };

  const current = tabs[active];

  return (
    <div className="marketing-solution section-space">
      <div
        className="marketing-solution__bg"
        style={{
          backgroundImage:
            "url(assets/images/shapes/markting-soution.png)",
        }}
      ></div>

      <div className="container">
        <div className="marketing-solution__top">
          <div className="row">
            <div className="col-xl-5">
              <div className="sec-title sec-title--two text-start">
                <div className="sec-title__tagline justify-content-start wow fadeInUp">
                  <span className="sec-title__tagline__image">
                    <img
                      src="/assets/images/shapes/work-process-2-1.png"
                      alt="shape"
                    />
                  </span>
                  Our Marketing Solution
                </div>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="sec-title sec-title--two text-start">
                <h2 className="sec-title__title bw-split-text">
                  Smart Marketing Solutions for Modern Business service.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="marketing-solution__inner tabs-box">
          <div className="tab-buttons">
            <ul className="marketing-solution__list list-unstyled">
              <li
                className={`marketing-solution__list__item tab-btn ${
                  active === "itemOne" ? "active-btn" : ""
                }`}
                onClick={() => setActive("itemOne")}
              >
                <div className="marketing-solution__list__box">
                  <span className="marketing-solution__list__item__icon">
                    <i className="icon-handsetting"></i>
                  </span>
                  <span className="marketing-solution__list__item__text">
                    Neurix Studio's - Mission Statement
                  </span>
                </div>
              </li>

              <li
                className={`marketing-solution__list__item tab-btn ${
                  active === "itemTwo" ? "active-btn" : ""
                }`}
                onClick={() => setActive("itemTwo")}
              >
                <div className="marketing-solution__list__box">
                  <span className="marketing-solution__list__item__icon">
                    <i className="icon-handsetting"></i>
                  </span>
                  <span className="marketing-solution__list__item__text">
                    Neurix Studio's - Vision Statement
                  </span>
                </div>
              </li>

              <li
                className={`marketing-solution__list__item tab-btn ${
                  active === "itemThree" ? "active-btn" : ""
                }`}
                onClick={() => setActive("itemThree")}
              >
                <div className="marketing-solution__list__box">
                  <span className="marketing-solution__list__item__icon">
                    <i className="icon-digitalgrth"></i>
                  </span>
                  <span className="marketing-solution__list__item__text">
                    Neurix Studio's - Core Values
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="marketing-solution__content tabs-content">
            <div className="marketing-solution__item tab active-tab">
              <div className="row gutter-y-30">
                <div className="col-xl-8 col-lg-7">
                  <div className="marketing-area__thumb hover:shine">
                    <img
                      src="/assets/images/services/service-d-1-2.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-xl-4 col-lg-5">
                  <div className="marketing-area__content">
                    <h3 className="marketing-area__title">
                      {current.title}
                    </h3>

                    <p className="marketing-area__text">
                      {current.text}
                    </p>

                    <ul className="marketing-area__list list-unstyled">
                      {current.points.map((p, i) => (
                        <li key={i}>
                          <i className="icon-angle-check"></i>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <a href={current.link} className="bemox-btn">
                      <span className="bemox-btn__icon">
                        <i className="icon-arrow-left"></i>
                        <i className="icon-arrow-left"></i>
                      </span>
                      <span className="bemox-btn__text">READ MORE</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END CONTENT */}
        </div>
      </div>
    </div>
  );
};

export default SectionIII;