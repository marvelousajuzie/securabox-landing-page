"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-1 mb-6">
            <Sparkles className="w-4 h-4 text-green-500" />
            <span className="text-green-500 text-sm font-medium">AI-Powered Security</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience unrivaled security and simplicity with SecuraBox's AI-powered vault for your most sensitive data.
          </h2>

          <ul className="space-y-4">
            {[
              "Effective Security Solutions",
              "Biometric authentication for enhanced security",
              "Cross-platform synchronization",
              "AI-powered threat detection and prevention",
              "Secure password sharing with trusted contacts",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="bg-green-500 hover:bg-green-600 text-black font-medium rounded-full px-8 py-3 transition-colors">
              Join the Waitlist
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative h-[500px] w-full">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-green-500/20 to-transparent rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[250px] h-[500px] transform rotate-6">
                <div className="absolute inset-0 bg-black rounded-[40px] border-4 border-zinc-800"></div>
                <div className="absolute inset-[6px] bg-green-900/20 rounded-[36px] overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern"></div>
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500/30 rounded-full blur-xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              </div>
              <div className="relative w-[250px] h-[500px] transform -rotate-6 ml-[-30px]">
                <div className="absolute inset-0 bg-black rounded-[40px] border-4 border-zinc-800"></div>
                <div className="absolute inset-[6px] bg-green-900/20 rounded-[36px] overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern"></div>
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500/30 rounded-full blur-xl"></div>
                  <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

