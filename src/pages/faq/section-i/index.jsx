import React, { useState } from "react";

const faqData = [
  {
    question: "How do I know which service my business actually needs?",
    content:
      "Not every business needs the same marketing solution. That's why every project begins with a strategy consultation. We take time to understand your goals, current marketing performance and growth challenges before recommending the services that will create the greatest commercial impact.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    content:
      "Yes. We partner with startups, growing SMEs, established brands and enterprise businesses across a range of industries. Whether you're launching your first campaign or looking to scale an existing marketing system, we tailor our approach to your stage of growth.",
  },
  {
    question: "How long does it take to see results?",
    content:
      "The timeline depends on your objectives, industry and the services you choose. Some improvements, such as creative optimisation or conversion enhancements, can deliver early wins, while long-term strategies are designed to build sustainable growth over time.",
  },
  {
    question: "What makes Neurix Studio different from other agencies?",
    content:
      "We don't believe in one-size-fits-all marketing. Every recommendation is based on research, performance data and your commercial objectives. Instead of focusing on vanity metrics, we focus on improving customer acquisition, conversions and long-term business growth.",
  },
  {
    question: "Can you work with our existing marketing team?",
    content:
      "Absolutely. We regularly collaborate with in-house marketing teams, business owners and external partners. Whether you need strategic guidance, campaign support or a complete performance marketing solution, we work as an extension of your team.",
  },
  {
    question: "Do you provide ongoing optimisation after launch?",
    content:
      "Yes. Marketing is never a one-time project. We continuously monitor performance, test new opportunities and refine campaigns to ensure your marketing keeps improving as your business grows.",
  },
  {
    question: "Which industries do you work with?",
    content:
      "Our strategies are tailored to each business rather than a single sector. We've worked with startups, SaaS companies, healthcare providers, eCommerce brands, professional service businesses and B2B organisations, adapting our approach to each industry's goals and audience.",
  },
  {
    question: "How do you measure success?",
    content:
      "Success isn't measured by clicks or impressions alone. We focus on the metrics that directly influence business performance, including qualified leads, conversion rates, customer acquisition costs, return on ad spend and revenue growth.",
  },
  {
    question: "Do I need a large marketing budget to work with Neurix Studio?",
    content:
      "Not necessarily. A bigger budget doesn't always produce better results. We focus on using your available budget efficiently, identifying the highest-impact opportunities and building a strategy that delivers measurable value at your stage of growth.",
  },
  {
    question: "How do we get started?",
    content:
      "It starts with a conversation. We'll learn about your business, review your current marketing, identify growth opportunities and recommend a strategy tailored to your objectives. From there, we create a clear roadmap and guide you through every stage of the process.",
  },
];

const SectionI = () => {
  const [activeIndex, setActiveIndex] = useState(0); // keeps your "active" default

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="faq-one faq-one--page section-space">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sec-title__tagline justify-content-center wow fadeInUp">
            <span className="sec-title__tagline__image">
              <img src="/assets/images/shapes/header-shape-1.png" alt="shape" />
            </span>
            Our faq Now
            <span className="sec-title__tagline__image">
              <img src="/assets/images/shapes/header-shape-1.png" alt="shape" />
            </span>
          </div>

          <h2 className="sec-title__title letters-fade-in">
            Frequently Asked Agency <br /> Business Questions.
            <span className="sec-title__title__shape">
              <img
                src="/assets/images/shapes/header-shape.png"
                alt="image-faq"
              />
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
                <div className="accrodion-title" onClick={() => toggle(index)}>
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
