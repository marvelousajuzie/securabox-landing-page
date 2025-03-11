"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  const faqs = [
    {
      question: "How secure is SecuraBox?",
      answer:
        "We use end-to-end encryption and advanced security algorithms to ensure that your data is stored securely. All information is encrypted both in transit and at rest, ensuring the highest level of protection.",
    },
    {
      question: "Can I use SecuraBox across multiple devices?",
      answer:
        "Yes, SecuraBox is designed to work seamlessly across all your devices. Your encrypted data is synchronized in real-time, allowing you to access your passwords and secure information from your phone, tablet, or computer.",
    },
    {
      question: "How does the AI-powered security work?",
      answer:
        "Our AI security system continuously monitors for unusual activities and potential threats. It analyzes patterns to detect unauthorized access attempts, suggests stronger passwords, and provides personalized security recommendations based on your usage patterns.",
    },
    {
      question: "Is there a free version available?",
      answer:
        "Yes, SecuraBox offers a free tier that includes basic password management and encryption features. Premium plans provide additional features like advanced AI security, unlimited secure storage, and priority support.",
    },
    {
      question: "How can I recover my account if I forget my master password?",
      answer:
        "SecuraBox provides account recovery options including biometric authentication and secure recovery keys. We recommend setting up these recovery methods during account creation to ensure you never lose access to your data.",
    },
  ]

  return (
    <section id="faqs" className="py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Everything you need to know about SecuraBox and how it can protect your digital life.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
        ))}
      </div>
    </section>
  )
}

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-zinc-800 py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-xl font-medium">{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-green-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-zinc-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

