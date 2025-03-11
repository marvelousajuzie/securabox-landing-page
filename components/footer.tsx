"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Twitter, Instagram, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="py-16 border-t border-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-2"
        >
          <div className="flex items-center gap-2 mb-4">
            <Logo size={32} className="text-green-500" />
            <span className="text-xl font-bold">SecuraBox</span>
          </div>
          <p className="text-zinc-400 mb-6 max-w-md">
            Secure your digital life with AI-powered protection. Store passwords, credentials, and sensitive information
            with military-grade encryption.
          </p>
          <div className="flex space-x-4">
            <SocialIcon icon={<Twitter className="w-5 h-5" />} />
            <SocialIcon icon={<Instagram className="w-5 h-5" />} />
            <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
            <SocialIcon icon={<Github className="w-5 h-5" />} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-3">
            <FooterLink href="#security" label="Features" />
            <FooterLink href="#security" label="Security" />
            <FooterLink href="#pricing" label="Pricing" />
            <FooterLink href="/coming-soon" label="Roadmap" />
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <FooterLink href="/coming-soon" label="About" />
            <FooterLink href="/coming-soon" label="Blog" />
            <FooterLink href="/coming-soon" label="Careers" />
            <FooterLink href="/coming-soon" label="Contact" />
            <FooterLink href="/coming-soon" label="Privacy Policy" />
            <FooterLink href="/coming-soon" label="Terms of Service" />
          </ul>
        </motion.div>
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} SecuraBox. All rights reserved.</p>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-green-500/20 hover:text-green-500 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  // If the href starts with #, it's an anchor link on the home page
  // Otherwise, it's a page link
  const isAnchorLink = href.startsWith("#")

  if (isAnchorLink) {
    return (
      <li>
        <a href={href} className="text-zinc-400 hover:text-green-500 transition-colors">
          {label}
        </a>
      </li>
    )
  }

  return (
    <li>
      <Link href={href} className="text-zinc-400 hover:text-green-500 transition-colors">
        {label}
      </Link>
    </li>
  )
}

