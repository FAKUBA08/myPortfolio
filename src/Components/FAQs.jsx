import React, { useState } from 'react';
import Styles from '../Styles/FAQ.module.css';

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What programming languages and technologies will I learn?",
      answer:
        "You'll master HTML, CSS, JavaScript, React, Node.js, databases (MongoDB/PostgreSQL), and modern development tools. Our curriculum covers both frontend and backend technologies to make you a complete fullstack developer.",
    },
    {
      question: "Do I need any prior programming experience to start?",
      answer:
        "No prior experience is required! Our course is designed for complete beginners. We start from the basics and gradually build up your skills. All you need is dedication and willingness to learn.",
    },
    {
      question: "What career opportunities are available after completion?",
      answer:
        "Graduates can work as Frontend Developers, Backend Developers, Fullstack Engineers, Software Engineers, or start freelancing. Many of our students get hired by tech companies or build their own successful businesses.",
    },
    {
      question: "How long does it take to become job-ready?",
      answer:
        "Our intensive 6-month program is designed to make you job-ready. With consistent practice and dedication, you'll have a strong portfolio and the skills needed to land your first tech job or start freelancing.",
    },
    {
      question: "What will I need to start?",
      answer:
        "You only need your personal laptop and a reliable internet connection. Everything else will be provided in the course materials and mentorship.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={Styles.FAQ}>
      <div className={Styles.faqContainer}>
        <div className={Styles.header}>
          <h2 className={Styles.title}>Frequently Asked Questions</h2>
          <p className={Styles.subtitle}>
            Everything you need to know about starting your software engineering journey
          </p>
        </div>

        <div className={Styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={Styles.faqItem}>
              <button
                className={Styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`${Styles.icon} ${
                    openIndex === index ? Styles.rotate : ''
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`${Styles.faqAnswer} ${
                  openIndex === index ? Styles.open : ''
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
