import React, { useState } from "react";

const faqData = [
  {
    question: "What digital marketing services does Neurix Studio offer?",
    content:
      "Neurix Studio specializes in Ad Creative Development, Conversion Rate Optimization (CRO), Digital Marketing Strategy, Marketing Automation, and ROAS Improvement. Our solutions are designed to help businesses attract qualified customers, improve conversions, and maximize marketing ROI.",
  },
  {
    question: "How can Conversion Rate Optimization (CRO) help my business?",
    content:
      "Conversion Rate Optimization focuses on improving your website or landing pages so that more visitors become customers. Through data analysis, testing, and user experience improvements, we help increase conversions without increasing your advertising budget.",
  },
  {
    question: "Do you create custom digital marketing strategies?",
    content:
      "Yes. Every business has unique goals and challenges. We develop customized digital marketing strategies based on your industry, target audience, and business objectives to drive sustainable growth and measurable results.",
  },
  {
    question: "What is Marketing Automation, and why is it important?",
    content:
      "Marketing Automation streamlines repetitive marketing tasks such as email campaigns, lead nurturing, customer follow-ups, and audience segmentation. It saves time, improves customer engagement, and helps convert more leads into loyal customers.",
  },
  {
    question: "Can you guarantee a specific ROAS or marketing results?",
    content:
      "While we apply proven strategies, data-driven optimization, and industry best practices to maximize campaign performance, marketing results depend on factors such as budget, competition, audience behavior, and market conditions. Therefore, specific results or ROAS cannot be guaranteed.",
  },
];

const SectionI = () => {
  const [activeIndex, setActiveIndex] = useState(2); // keeps your "active" default

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="faq-one faq-one--page section-space">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sec-title__tagline justify-content-center wow fadeInUp">
            <span className="sec-title__tagline__image">
              <img src="assets/images/shapes/header-shape-1.png" alt="shape" />
            </span>
            Our faq Now
            <span className="sec-title__tagline__image">
              <img src="assets/images/shapes/header-shape-1.png" alt="shape" />
            </span>
          </div>

          <h2 className="sec-title__title letters-fade-in">
            Frequently Asked Agency <br /> Business Questions.
            <span className="sec-title__title__shape">
              <img src="/assets/images/shapes/header-shape.png" alt="image-faq" />
            </span>
          </h2>
        </div>

        <div className="faq-one__content">
          <div
            className="faq-one__accordion bemox-accrodion"
            data-grp-name="bemox-accrodion"
          >
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`accrodion wow fadeInUp ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="accrodion-title"
                  onClick={() => toggle(index)}
                >
                  <span className="accrodion__number"></span>
                  <h3 className="accrodion-title__title">
                    {item.question}
                    <i className="accrodion-title__icon icon-angle-down"></i>
                  </h3>
                </div>

                {activeIndex === index && (
                  <div className="accrodion-content">
                    <div className="inner">
                      <p className="accrodion-text">{item.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionI;