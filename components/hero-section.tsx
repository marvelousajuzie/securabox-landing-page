"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import MarqueeSection from "./marquee-section"
import Logo from "./logo"

export default function HeroSection() {
  const [email, setEmail] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2,
        ease: [0.22, 1, 0.36, 1], // Custom bezier curve for smooth animation
      },
    }),
  }

  const glowVariants = {
    initial: { opacity: 0.5, scale: 0.8 },
    animate: {
      opacity: [0.4, 0.6, 0.4],
      scale: [0.8, 1.2, 0.8],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 8,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div ref={containerRef}>
      <section className="pt-40 pb-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Background glow effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent blur-3xl z-[-1]"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />

        {/* Small floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-green-500/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center max-w-4xl mx-auto px-4 z-10"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
        >
          {/* Hero badge */}
          <motion.div
            className="mb-6 flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-full px-5 py-2 backdrop-blur-sm border border-green-500/10"
            variants={textVariants}
            custom={0}
          >
            <Logo size={16} className="text-green-500" />
            <span className="text-sm font-medium text-green-400">Next-Gen Security Solution</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-6xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400"
            variants={textVariants}
            custom={1}
          >
            Secure Your Digital{" "}
            <span className="relative inline-block">
              <span className="relative z-10">life</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-green-500/40 to-emerald-500/40 rounded-full blur-sm z-0"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600"
            variants={textVariants}
            custom={2}
          >
            Trusted AI-enabled
          </motion.h2>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-zinc-300 mb-12 text-lg leading-relaxed"
            variants={textVariants}
            custom={3}
          >
            Store and manage passwords, social media, credentials, and personal information effortlessly in one place.
            With top-tier encryption, your data is always safe from prying eyes.
          </motion.p>

          {/* Email form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md mx-auto relative"
            variants={textVariants}
            custom={4}
          >
            <input
              type="email"
              placeholder="name@email.com"
              className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-lg shadow-zinc-900/50 transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium rounded-full transition-all duration-300 flex items-center gap-2 group"
            >
              Get notified
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.form>
        </motion.div>
      </section>

      <MarqueeSection />
    </div>
  )
}

