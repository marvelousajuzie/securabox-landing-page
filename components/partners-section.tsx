"use client"

import { motion } from "framer-motion"
import { PlayIcon as PlayStore, Download, Smartphone } from "lucide-react"

export default function PartnersSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-1 mb-6"
        >
          <Smartphone className="w-4 h-4 text-green-500" />
          <span className="text-green-500 text-sm font-medium">Android App</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Download for Android
        </motion.h2>

        <motion.p
          className="text-zinc-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Secure your digital life on the go with our Android app
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Play Store Coming Soon */}
        <motion.div
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 30px -10px rgba(34, 197, 94, 0.2)",
            borderColor: "rgba(34, 197, 94, 0.3)",
          }}
        >
          <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
            <PlayStore className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Google Play Store</h3>
          <p className="text-zinc-400 text-center mb-6">Coming soon to the Google Play Store</p>
          <button
            className="bg-zinc-800 text-zinc-300 px-6 py-3 rounded-full flex items-center gap-2 opacity-70 cursor-not-allowed"
            disabled
          >
            <PlayStore className="w-5 h-5" />
            Coming Soon
          </button>
        </motion.div>

        {/* Direct APK Download */}
        <motion.div
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 30px -10px rgba(34, 197, 94, 0.2)",
            borderColor: "rgba(34, 197, 94, 0.3)",
          }}
        >
          <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
            <Download className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Direct Download</h3>
          <p className="text-zinc-400 text-center mb-6">Download the APK file directly to your device</p>
          <motion.a
            href="https://drive.google.com/file/d/10YwZ4Q7oJPExSFB1MFLBcEWEPHfTMgXl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium px-6 py-3 rounded-full flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download APK
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-zinc-400 text-sm">
          Note: To install the APK directly, you'll need to enable "Install from Unknown Sources" in your Android
          settings.
          <br />
          <a href="#" className="text-green-500 hover:underline">
            Learn how to enable unknown sources
          </a>
        </p>
      </motion.div>
    </section>
  )
}

