import React, { useState } from "react";

const SectionIII = () => {
  const [active, setActive] = useState("itemOne");

  const tabs = {
    itemOne: {
      title: "Our Mission",
      text: "Our mission is to transform the way businesses approach marketing by replacing assumptions with strategy and activity with measurable outcomes. We partner with ambitious organisations to develop tailored growth strategies that combine performance marketing, automation and customer psychology into one connected system. Through continuous optimisation, transparent communication and a relentless focus on commercial impact, we help businesses build stronger brands, acquire better customers and create sustainable long-term success.",
    },
    itemTwo: {
      title: "Our Vision",
      text: "Our vision is to redefine modern marketing by creating a future where businesses grow through informed decisions, meaningful customer relationships and continuous innovation. We strive to become a trusted strategic partner for organisations across the UK and beyond, delivering marketing systems that evolve with changing markets while consistently creating measurable commercial value.",
      points: [
        "Global digital leadership",
        "Innovation-first approach",
        "Client-focused growth strategies",
      ],
      link: "service-d-influencer-two.html",
    },
    itemThree: {
      title: "Core Values",
      text: "Our values shape every conversation, strategy and decision we make. We believe in putting our clients' success first, communicating openly and delivering work that creates genuine commercial impact. Innovation drives us to explore better ways of solving problems, while transparency ensures our clients always understand the reasoning behind every recommendation. Through collaboration, continuous improvement and an unwavering focus on results, we build lasting partnerships that create value far beyond individual marketing campaigns.",
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
                  Marketing Solutions Built for Measurable Growth
                </div>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="sec-title sec-title--two text-start">
                <h2 className="sec-title__title bw-split-text">
                  Smarter Marketing. Stronger Business Results.
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
                    The Mission That Drives Us
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
                    Our Vision for Business Growth
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
                    The Principles That Guide Us
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
