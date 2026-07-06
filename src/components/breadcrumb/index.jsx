import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  return (
    <>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              'url("/assets/images/backgrounds/page-header-bg.jpg")',
          }}
        ></div>
        <div className="container">
          <div className="page-header__content">
            <ul className="bemox-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span className="letters-fade-in">{props.title}</span>
              </li>
            </ul>
            <h2 className="page-header__title letters-fade-in">
              {props.title}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
