"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophia Martin",
      role: "Flutter Developer",
      quote:
        "SecuraBox provides an unmatched level of security. The encryption standards and AI integration offer a peace of mind that’s hard to find in other solutions.",
      rating: 5,
    },
    {
      name: "Joshua Ben",
      role: "Senior Developer",
      quote:
        "As someone who works with sensitive data daily, I needed a solution I could trust. SecuraBox's encryption and security features are top-notch, and the interface is intuitive.",
      rating: 5,
    },
    {
      name: "Ifiok Ambrose",
      role: "SoftWare Developer",
      quote:
        "SecuraBox is an awesome product. I really hope more people like this amazing team build amazing stuff like this to make the web a safer place to be in",
      rating: 4,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-24 overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-1 mb-6"
        >
          <Quote className="w-4 h-4 text-green-500" />
          <span className="text-green-500 text-sm font-medium">Testimonials</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          What our users are saying
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-500/30">
         
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating ? "text-green-500 fill-green-500" : "text-zinc-600"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl font-medium mb-6 relative">
                    <span className="absolute -top-6 -left-2 text-green-500/20 text-6xl">"</span>
                    {testimonials[currentIndex].quote}
                    <span className="absolute -bottom-10 -right-2 text-green-500/20 text-6xl">"</span>
                  </blockquote>

                  <div>
                    <div className="font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-zinc-400 text-sm">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-green-500" : "bg-zinc-700"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

