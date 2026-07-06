import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/breadcrumb";
import SectionService from "./section-i";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Services | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="Services" />
      <SectionService />
    </>
  );
};

export default Services;
