"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight } from "lucide-react"
import Logo from "./logo"

interface NavDrawerProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (sectionId: string) => void
}

export default function NavDrawer({ isOpen, onClose, onNavigate }: NavDrawerProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const menuItems = [
    { label: "Security", id: "security", description: "Advanced encryption & protection" },
    { label: "Features", id: "features", description: "Powerful tools for digital safety" },
    { label: "Demo", id: "demo", description: "See SecuraBox in action" },
    { label: "Pricing", id: "pricing", description: "Plans for every security need" },
    { label: "FAQs", id: "faqs", description: "Common questions answered" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-zinc-900 shadow-xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center">
                <Logo size={32} className="text-green-500" />
                <span className="ml-2 text-xl font-bold">SecuraBox</span>
              </div>
              <motion.button
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"
                onClick={onClose}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-green-500" />
              </motion.button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    className="w-full p-4 text-left rounded-xl hover:bg-zinc-800/50 transition-colors group flex items-center justify-between"
                    onClick={() => {
                      onNavigate(item.id)
                      onClose()
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <div>
                      <div className="text-lg font-medium group-hover:text-green-500 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        {item.description}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-green-500 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zinc-800">
              <motion.button
                className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium transition-colors flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.a
                  href="https://drive.google.com/file/d/10YwZ4Q7oJPExSFB1MFLBcEWEPHfTMgXl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download APK
                </motion.a>
              </motion.button>

              <div className="mt-6 text-center text-zinc-500 text-sm">
                <p>© {new Date().getFullYear()} SecuraBox. All rights reserved.</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

