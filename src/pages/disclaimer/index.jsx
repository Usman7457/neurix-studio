import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/breadcrumb";
import SectionI from "./section-i";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Disclaimer | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="Disclaimer" />
      <SectionI />
    </>
  );
};

export default Disclaimer;
