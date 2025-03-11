"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Key, Shield, FileText, Sparkles, ArrowUpRight } from "lucide-react"

export default function AiFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section id="glimpse" ref={containerRef} className="py-28 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-green-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl"></div>
      </div>

      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-full px-5 py-2 backdrop-blur-sm border border-green-500/10 mb-6"
        >
          <Sparkles className="w-4 h-4 text-green-500" />
          <span className="text-green-400 text-sm font-medium">Smart & Secure</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-300"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
          }}
        >
          Exclusive AI Driven Features for Your Protection
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        <FeatureCard
          icon={<Key className="w-8 h-8" />}
          title="Password Management"
          description="Generate, store, and autofill strong passwords across all your devices. Our AI suggests password improvements for better security."
          delay={0}
          controls={controls}
        />

        <FeatureCard
          icon={<Shield className="w-8 h-8" />}
          title="Advanced Security"
          description="Sit back as our cutting-edge encryption algorithms and secure protocols go to work, ensuring your sensitive data is stored safely ."
          delay={0.2}
          controls={controls}
        />

        <FeatureCard
          icon={<FileText className="w-8 h-8" />}
          title="Securely encrypt files or text"
          description="Share sensitive information securely such as passwords, credit cards, and other sensitive information through an end-to-end encrypted link."
          delay={0.4}
          controls={controls}
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
  controls,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  controls: any
}) {
  return (
    <motion.div
      className="group hover-3d relative"
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent rounded-2xl"></div>
      <div className="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="border border-green-500/20 group-hover:border-green-500/40 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden bg-zinc-900/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500/20 to-transparent flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 rounded-full animate-pulse-slow"></div>
          <div className="relative text-green-500 group-hover:text-green-400 transition-colors duration-300">
            {icon}
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
          {description}
        </p>

        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-black rounded-full p-2">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

