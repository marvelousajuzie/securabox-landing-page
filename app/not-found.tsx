"use client"

import { motion } from "framer-motion"
import { Home, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/logo"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="relative">
                <Logo size={64} className="text-zinc-700" />
                <AlertTriangle className="w-8 h-8 text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-400 to-zinc-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              404
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Page Not Found
            </motion.h2>

            <motion.p
              className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              The page you're looking for doesn't exist or has been moved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <Link
                href="/coming-soon"
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Logo size={32} className="text-white" />
                Explore Features
              </Link>
            </motion.div>

            {/* Glitch effect */}
            <div className="relative mt-16">
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-green-500/0 via-green-500/50 to-green-500/0"
                animate={{
                  height: ["0%", "100%", "0%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-px bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0"
                animate={{
                  width: ["0%", "100%", "0%"],
                  opacity: [0, 1, 0],
                  left: ["0%", "100%", "0%"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "linear",
                }}
              />
            </div>
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

