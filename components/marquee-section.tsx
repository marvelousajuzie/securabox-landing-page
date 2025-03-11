"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { FileText, Users, CreditCard, Globe, BookOpen, ShieldCheck } from "lucide-react"

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const items = [
    { icon: <FileText className="w-6 h-6" />, label: "Certificate" },
    { icon: <Users className="w-6 h-6" />, label: "Social Media" },
    { icon: <CreditCard className="w-6 h-6" />, label: "Identity Card" },
    { icon: <Globe className="w-6 h-6" />, label: "Online Banking" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Notebook" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "Credit Card" },
  ]

  // Duplicate the items for seamless looping
  const marqueeItems = [...items, ...items]

  return (
    <section
      ref={containerRef}
      className="py-10 overflow-hidden bg-gradient-to-r from-black via-zinc-900/30 to-black border-t border-b border-zinc-800/50"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { duration: 0.6 } },
        }}
        className="relative"
      >
        {/* First marquee row - left to right */}
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex space-x-8 md:space-x-16 py-4 animate-marquee whitespace-nowrap"
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((item, index) => (
              <MarqueeItem key={`forward-${index}`} icon={item.icon} label={item.label} />
            ))}
          </motion.div>
        </div>

        {/* Second marquee row - right to left */}
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex space-x-8 md:space-x-16 py-4 animate-marquee-reverse whitespace-nowrap"
            animate={{ x: [-2000, 0] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.reverse().map((item, index) => (
              <MarqueeItem key={`reverse-${index}`} icon={item.icon} label={item.label} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function MarqueeItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      className="inline-flex items-center gap-3 py-2 px-6 bg-gradient-to-br from-zinc-900 via-zinc-800/30 to-zinc-900 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-green-500/30 hover:from-zinc-900 hover:to-zinc-900/80 transition-all duration-300 group"
      whileHover={{
        y: -5,
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <div className="text-green-500 group-hover:text-green-400 transition-colors duration-300">{icon}</div>
      <span className="font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">{label}</span>
    </motion.div>
  )
}

