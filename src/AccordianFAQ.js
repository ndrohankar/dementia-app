import React, { useState } from 'react';

const AccordionFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'what is db?', answer: 'db is deutsche bank' },
    { question: 'what is you name?', answer: 'My Name is John Cena' },
    { question: 'barca or madrid?', answer: 'Always Barcelona' },
    { question: 'what is db?', answer: 'db is deutsche bank' },
    { question: 'what is you name?', answer: 'My Name is John Cena' },
    { question: 'barca or madrid?', answer: 'Always Barcelona' },
    { question: 'what is db?', answer: 'db is deutsche bank' },
    { question: 'what is you name?', answer: 'My Name is John Cena' },
    { question: 'barca or madrid?', answer: 'Always Barcelona' },
  ];

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion-faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-faq-item">
          <button
            className="accordion-question"
            onClick={() => handleClick(index)}
          >{openIndex === index ? "-":"+"}
            {faq.question}
          </button>
          {openIndex === index && <p className="accordion-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default AccordionFAQ;
