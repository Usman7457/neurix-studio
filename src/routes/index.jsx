import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import {
  AboutUs,
  ADCreativeDevelopment,
  ContactUs,
  ConversionRateOptimization,
  DigitalMarketingStrategy,
  Disclaimer,
  FAQ,
  Home,
  MarketingAutomation,
  PageNotFound,
  PrivacyPolicy,
  RoasImprovement,
  Services,
  TermsAndConditions,
} from "../pages";

const RouterForm = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/ad-creative-development"
              element={<ADCreativeDevelopment />}
            />
            <Route
              path="/services/conversion-rate-optimization"
              element={<ConversionRateOptimization />}
            />
            <Route
              path="/services/digital-marketing-strategy"
              element={<DigitalMarketingStrategy />}
            />
            <Route
              path="/services/marketing-automation"
              element={<MarketingAutomation />}
            />
            <Route
              path="/services/roas-improvement"
              element={<RoasImprovement />}
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterForm;
