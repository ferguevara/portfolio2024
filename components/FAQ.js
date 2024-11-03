"use client";

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is your preferred work style?',
    answer: 'I enjoy collaborating with cross-functional teams, using agile methodologies, and I thrive when I can communicate openly and iteratively with stakeholders.',
  },
  {
    question: 'What are your working hours and timezone?',
    answer: 'My working hours are generally within the European time zone (CET). I am flexible with my schedule, especially when collaborating with global teams, and can accommodate different time zones as needed for important meetings.',
  },
  {
    question: 'Are you open to working on-site or relocating?',
    answer: 'I enjoy working remotely as it helps me maintain quality family time and a healthy work-life balance. However, I am fully open to relocating for the right opportunity.',
  },
  {
    question: 'What types of projects do you enjoy working on the most?	',
    answer: 'I enjoy projects related to edtech, healthcare, and startups. I am passionate about creating products that have a positive impact on users, and I love working on products that solve real-world problems. Additionally projects involving AI, data-driven design, or meaningful user engagement are particularly fulfilling for me.',
  },
  {
    question: 'What is your work eligibility or availability to work in different countries?',
    answer: 'I am eligible to work in the European Union and am open to working with international clients as a remote contractor. I have experience working with clients from different countries and enjoy collaborating across cultures.',
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="pt-10 pb-20 bg-white">
      <div className="container mx-auto">
        <h2 className="font-bold mb-10 text-center text-3xl text-gray-800">Common questions potential employers ask me:</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-md mb-4 p-5 cursor-pointer transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-xl font-normal text-gray-800">{faq.question}</p>
                {activeIndex === index ? (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                )}
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="mt-4 text-gray-700"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className='text-lg text-gray-500 '>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
