import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How do I track my monthly expenses in FinEase?",
    answer:
      "You can add all your income and expenses into FinEase. The dashboard automatically categorizes and shows visual charts of your spending trends.",
  },
  {
    id: 2,
    question: "Can I set monthly savings goals?",
    answer:
      "Yes! FinEase allows you to set multiple savings goals and track your progress over time with clear visual indicators.",
  },
  {
    id: 3,
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We use industry-standard encryption and secure authentication to ensure your data is safe.",
  },
  {
    id: 4,
    question: "Can I export my transactions?",
    answer:
      "Yes, you can export all your transactions in CSV format for personal records or tax purposes.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-base-100 dark:bg-neutral">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary dark:text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-secondary dark:text-secondary mb-12 leading-relaxed">
          Answers to common questions about managing your finances with FinEase.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-accent-content rounded-2xl shadow hover:shadow-lg transition border border-primary"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full px-6 py-4 flex justify-between items-center text-secondary dark:text-secondary font-semibold focus:outline-none"
              >
                {faq.question}
                <span className="text-xl">{openId === faq.id ? "-" : "+"}</span>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-4 text-gray-600 dark:text-info">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;