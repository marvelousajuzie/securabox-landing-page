"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Shield, Lock, Zap } from "lucide-react"

export default function FeatureHighlights() {
  return (
    <section id="security" className="py-16">
      <motion.h3
        className="text-center text-green-500 text-xl font-medium mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Feature Highlights
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Shield className="w-10 h-10 text-green-500" />}
          title="Advanced Encryption"
          description="Your data is protected with military-grade encryption that keeps your information secure from unauthorized access."
          delay={0}
        />

        <FeatureCard
          icon={<Lock className="w-10 h-10 text-green-500" />}
          title="Password Manager"
          description="Generate strong passwords and store them securely. Auto-fill your credentials across all your devices."
          delay={0.2}
        />

        <FeatureCard
          icon={<Zap className="w-10 h-10 text-green-500" />}
          title="AI-Powered Security"
          description="Our AI constantly monitors for potential security threats and provides recommendations to enhance your digital security."
          delay={0.4}
        />
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}) {
  return (
    <motion.div
      className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(34, 197, 94, 0.2)",
      }}
    >
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-zinc-400">{description}</p>
    </motion.div>
  )
}

