"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Bell, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [days, setDays] = useState(30)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate countdown - in a real app, calculate from a target date
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else if (hours > 0) {
        setHours(hours - 1)
        setMinutes(59)
        setSeconds(59)
      } else if (days > 0) {
        setDays(days - 1)
        setHours(23)
        setMinutes(59)
        setSeconds(59)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [days, hours, minutes, seconds])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle notification signup
    console.log("Email submitted:", email)
    alert("Thanks for signing up! We'll notify you when we launch.")
    setEmail("")
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-green-500 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-6"
            >
              <Image src={"./logo.png"} height={200} width={200} className="h-24 w-auto" alt="securabox" />
        
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Coming Soon
            </motion.h1>

            <motion.p
              className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We're working hard to bring you the ultimate security solution. Stay tuned for our launch.
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CountdownItem value={days} label="Days" />
              <CountdownItem value={hours} label="Hours" />
              <CountdownItem value={minutes} label="Minutes" />
              <CountdownItem value={seconds} label="Seconds" />
            </motion.div>

            {/* Notification Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-1 mb-6">
                <Bell className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Get Notified</span>
              </div>

              <form onSubmit={handleSubmit} className="flex w-full relative">
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
                  Notify me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 py-6 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} SecuraBox. All rights reserved.</p>
      </div>
    </main>
  )
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 backdrop-blur-sm">
      <div className="text-3xl md:text-4xl font-bold text-green-500">{value.toString().padStart(2, "0")}</div>
      <div className="text-zinc-400 text-sm">{label}</div>
    </div>
  )
}

