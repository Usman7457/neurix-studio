import React from "react";
import { Link } from "react-router-dom";

const SectionI = () => {
  return (
    <>
      <div className="service-details section-space-top">
        <div className="container">
          <div className="row gutter-y-50">
            <div className="col-xl-5 col-lg-5">
              <div
                className="service-sidebar wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="service-sidebar__single">
                  <h3 className="service-sidebar__single__title">
                    Offered Services:
                  </h3>
                  <ul className="list-unstyled service-sidebar__nav">
                    <li>
                      <Link to="/services/ad-creative-development">
                        {" "}
                        AD Creative Development{" "}
                        <span className="icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/conversion-rate-optimization">
                        {" "}
                        Conversion Rate Optimization{" "}
                        <span className="icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/digital-marketing-strategy">
                        {" "}
                        Digital Marketing Strategy{" "}
                        <span className="icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="current">
                      <Link to="/services/marketing-automation">
                        {" "}
                        Marketing Automation{" "}
                        <span className="icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/roas-improvement">
                        {" "}
                        ROAS Improvement{" "}
                        <span className="icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div
                className="service-details__image wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <img
                  src="/assets/images/services/service-d-1-1.jpg"
                  alt="service details"
                  style={{ height: "443px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionI;
