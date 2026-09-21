import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full flex justify-between items-center py-5 px-4 text-left text-gray-200 hover:text-[#5EEAD4] focus:outline-none transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg">{question}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#5EEAD4]" : "text-gray-400"
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="text-gray-400 px-4 pb-5 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const AboutPapervitran = () => {
  const faqs = [
    {
      question: "What is Papervitran?",
      answer:
        "Papervitran is a platform that provides previous year papers, study materials, and resources to help students prepare effectively for exams.",
    },
    {
      question: "How can I access previous year papers?",
      answer:
        "You can access papers by navigating to the 'Features' section and clicking on 'View PYQs'.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes, Papervitran provides free access to previous year papers and study resources.",
    },
    {
      question: "Can I download the materials?",
      answer:
        "Absolutely! All papers and resources can be downloaded for offline practice.",
    },
  ];

  return (
    <section className="bg-[#0b0f16] py-24 px-6 md:px-12">
      {/* Decorative Line */}
      <div className="max-w-6xl mx-auto mb-12">
        <hr className="border-[#1f2937]" />
      </div>

      {/* About Box */}
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#141820] to-[#1c1f27] border border-[#2d3748] rounded-3xl p-12 shadow-2xl text-gray-300 space-y-5 mb-20 transition-all duration-300 hover:shadow-[0_0_30px_#4FD1C5]/10">
        <h2 className="text-4xl font-bold text-[#c36a2f] text-center mb-8 tracking-wide">
          About Papervitran
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          Papervitran is your ultimate one-stop solution for academic excellence.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Our platform provides easy access to previous year question papers,
          helping students practice efficiently and understand exam patterns.
        </p>
        <p className="text-gray-400 leading-relaxed">
          We focus on enhancing both logical and analytical skills through
          curated resources.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Students can explore a wide range of materials from various subjects
          to prepare smarter for their exams.
        </p>
        <p className="text-gray-400 leading-relaxed">
          The interface is simple, intuitive, and designed to make study
          material easily accessible.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Papervitran encourages consistent practice, enabling students to
          improve problem-solving speed and accuracy.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-[#c36a2f] mb-8 text-center tracking-wide">
          Frequently Asked Questions
        </h3>

        <div className="bg-gradient-to-br from-[#141820] to-[#1c1f27] border border-[#2d3748] rounded-3xl shadow-2xl divide-y divide-gray-700 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_#4FD1C5]/10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPapervitran;
