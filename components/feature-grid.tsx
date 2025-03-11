"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView, useTransform, useScroll } from "framer-motion"
import { LineChart, ArrowUpRight, Sparkles } from "lucide-react"

export default function FeatureGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom bezier curve for smooth animation
      },
    },
  }

  return (
    <section id="features" ref={containerRef} className="py-28 relative">
      {/* Background elements */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-green-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl"></div>
      </motion.div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-full px-5 py-2 backdrop-blur-sm border border-green-500/10 mb-4">
            <Sparkles className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-400">Custom Security Solutions</span>
          </div>
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-300">
            build solutions around you
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Health Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl"
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent rounded-2xl z-0"></div>
            <div className="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <div className="absolute inset-0 border border-green-500/20 rounded-2xl z-20"></div>
            <div className="relative p-6 z-30">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-green-400 transition-colors duration-300">
                  Health
                </h3>
              </div>
              <div className="mt-4 h-32 flex items-center justify-center">
                <motion.div
                  className="w-full h-full text-green-500 opacity-80"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                  }}
                >
                  <LineChart className="w-full h-full" strokeWidth={1.5} />
                </motion.div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-green-500 text-black rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tailor-Made Security Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl"
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent rounded-2xl z-0"></div>
            <div className="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <div className="absolute inset-0 border border-green-500/20 rounded-2xl z-20"></div>
            <div className="relative p-6 z-30">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-green-400 transition-colors duration-300">
                  Tailor-Made Security Features
                </h3>
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  Customize your security settings to match your needs and comfort level.
                </p>
              </div>
              <div className="mt-4 h-20 flex items-center justify-center">
                <div className="w-full h-8 bg-black rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 h-full w-8 bg-white opacity-30"
                      animate={{ x: [50, -100] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-green-500 text-black rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scalable Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl"
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent rounded-2xl z-0"></div>
            <div className="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <div className="absolute inset-0 border border-green-500/20 rounded-2xl z-20"></div>
            <div className="relative p-6 z-30">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-green-400 transition-colors duration-300">
                  Scalable as you grow
                </h3>
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  Seamlessly scale your security solutions as your needs evolve.
                </p>
              </div>
              <div className="mt-4 h-20 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 left-0 w-1/4 h-8 bg-green-900/50 rounded"></div>
                  <div className="absolute bottom-0 left-1/4 w-1/4 h-12 bg-green-900/50 rounded"></div>
                  <div className="absolute bottom-0 left-2/4 w-1/4 h-16 bg-green-900/50 rounded"></div>
                  <div className="absolute bottom-0 right-0 w-1/4 h-20 bg-green-500/50 rounded">
                    <motion.div
                      className="absolute -top-4 right-4 w-3 h-3 bg-green-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    />
                    <motion.div
                      className="absolute -top-4 right-4 w-3 h-3 bg-green-500 rounded-full"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0.2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: 0.3,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-green-500 text-black rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Workflow Integration Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl md:col-span-2 lg:col-span-1"
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent rounded-2xl z-0"></div>
            <div className="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <div className="absolute inset-0 border border-green-500/20 rounded-2xl z-20"></div>
            <div className="relative p-6 z-30">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-green-400 transition-colors duration-300">
                  Workflow Integration
                </h3>
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  Seamlessly integrate with your existing workflow and tools.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-start space-x-4">
                {["X", "G", "S", "+"].map((letter, i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 group-hover:border-green-500/50 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  >
                    <span className="text-white font-bold">{letter}</span>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-green-500 text-black rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Waitlist Card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl md:col-span-2 lg:col-span-2"
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent rounded-2xl z-0"></div>
            <div className="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <div className="absolute inset-0 border border-green-500/20 rounded-2xl z-20"></div>
            <div className="relative p-6 z-30">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-green-400 transition-colors duration-300">
                  1000+ Joined Waitlist
                </h3>
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  Join our growing community of security-conscious users.
                </p>
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/50 flex items-center justify-center"
                      whileHover={{ scale: 1.2, zIndex: 50 }}
                      transition={{ type: "spring", stiffness: 500, damping: 10 }}
                    >
                      <span className="text-xs text-green-500">{i}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="ml-4 bg-green-500/20 rounded-full px-3 py-1">
                  <span className="text-xs text-green-500">+995</span>
                </div>
                <div className="ml-auto">
                  <motion.button
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium rounded-full px-4 py-2 text-sm transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Now
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-green-500 text-black rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

