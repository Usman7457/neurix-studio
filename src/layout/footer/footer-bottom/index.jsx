import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <>
      <div className="main-footer__bottom wow fadeInUp" data-wow-delay="300ms">
        <div className="container">
          <div className="main-footer__bottom__inner">
            <p className="main-footer__copyright">
              Copyrights &copy; <span className="dynamic-year"></span> 2026 Neurix
              Studio. All Rights Reserved.
            </p>
            <ul className="list-unstyled main-footer__bottom__links">
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Version 1.2.17</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
