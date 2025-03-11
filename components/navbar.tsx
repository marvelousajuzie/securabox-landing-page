"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import NavDrawer from "./navbar-drawer"
import Logo from "./logo"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 py-4 md:py-6 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md shadow-lg shadow-green-500/5" : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Logo size={40} className="text-green-500" />
            <span className="ml-2 text-xl font-bold">SecuraBox</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="bg-zinc-900/80 rounded-full px-6 py-3 backdrop-blur-sm border border-zinc-800/30">
              <ul className="flex space-x-6">
                <NavItem label="Security" sectionId="security" onClick={scrollToSection} />
                <NavItem label="Features" sectionId="features" onClick={scrollToSection} />
                <NavItem label="Demo" sectionId="demo" onClick={scrollToSection} />
                <NavItem label="Pricing" sectionId="pricing" onClick={scrollToSection} />
                <NavItem label="FAQs" sectionId="faqs" onClick={scrollToSection} />
              </ul>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
              <motion.a
                href="https://drive.google.com/file/d/10YwZ4Q7oJPExSFB1MFLBcEWEPHfTMgXl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-6 py-2 rounded-full transition-colors duration-300 font-medium"
              >
                Download APK
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-white shadow-lg shadow-black/20"
              onClick={() => setMobileMenuOpen(true)}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-5 h-5 text-green-500" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <NavDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} onNavigate={scrollToSection} />
    </>
  )
}

function NavItem({ label, sectionId, onClick }: { label: string; sectionId: string; onClick: (id: string) => void }) {
  return (
    <li>
      <motion.button
        onClick={() => onClick(sectionId)}
        className="text-gray-300 hover:text-green-500 transition relative group"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
      </motion.button>
    </li>
  )
}

