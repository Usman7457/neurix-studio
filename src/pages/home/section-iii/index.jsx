import React, { useState } from "react";

const SectionIII = () => {
  const [active, setActive] = useState("itemOne");

  const tabs = {
    itemOne: {
      title: "Our Mission",
      text: "We help businesses achieve sustainable growth through data-driven digital marketing, creative innovation, & performance strategies. We are committed to building campaigns that not only increase visibility but also generate measurable results & improve acquisition. By combining strategic thinking with continuous optimization, we empower brands to grow confidently in an ever-evolving digital landscape while creating long-term value for every client we serve.",
    },
    itemTwo: {
      title: "Our Vision",
      text: "A digital marketing partner known for transforming ambitious brands into industry leaders through innovation & creativity. We strive to set new standards in digital marketing by embracing emerging technologies, adapting to changing consumer behaviors, and delivering solutions that consistently exceed expectations. Our goal is to build lasting partnerships where every campaign contributes to sustainable business growth and long-term success.",
      points: [
        "Global digital leadership",
        "Innovation-first approach",
        "Client-focused growth strategies",
      ],
      link: "service-d-influencer-two.html",
    },
    itemThree: {
      title: "Core Values",
      text: "Everything is guided by integrity, innovation, transparency, & a relentless focus on results. We believe successful marketing is built on trust, collaboration, & continuous improvement. Every decision we make is supported by data, every strategy is tailored to our clients' goals, and every campaign is optimized for maximum impact. By putting our clients' success first, embracing creativity, & maintaining complete transparency throughout process.",
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
          backgroundImage: "url(assets/images/shapes/markting-soution.png)",
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

                    <p className="marketing-area__text">{current.text}</p>
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
