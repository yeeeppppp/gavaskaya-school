import React, { useState } from "react";
import './FAQ.css'
import OpenList from '../../assets/img/open-list.png';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <img src={OpenList} alt="" className="faq-arrow" />
      </div>
      {isOpen && <div className="faq-answer"><span>{answer}</span></div>}
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      question: "Что нужно, чтобы начать обучение?",
      answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.",
    },
    {
      question: "Дополнительные расходы",
      answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.",
    },
    {
      question: "Прохождение водительской медкомиссии",
      answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.",
    },
    {
        question: "Оплата госпошлины",
        answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content."
    },
    {
        question: "Минимальный возраст обучения в автошколе",
        answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content."
    },
    {
        question: "Иностранным гражданам",
        answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content."
    },
    {
        question: "Сроки обучения в автошколе",
        answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content."
    },
    {
        question: "Раписание автошколы",
        answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content."
    },
    {
        question: "Замена инструктора",
        answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content."
    },
    {
        question: "Сопровождение учеников в ГАИ",
        answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content."
    },
    {
        question: "Как забрать документы из автошколы?",
        answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content."
    },
    {
        question: "Налоговый вычет",
        answer: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content."
    }
  ];

  return (
    <div className="faq-header">
      <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
      <div className="questions">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;