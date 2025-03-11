"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section id="pricing" className="py-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-1 mb-6"
        >
          <Star className="w-4 h-4 text-green-500" />
          <span className="text-green-500 text-sm font-medium">Simple Pricing</span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose the perfect plan for your security needs
        </motion.h2>

        <motion.p
          className="text-zinc-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>

        <motion.div
          className="inline-flex items-center p-1 bg-zinc-900 rounded-full mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              !isAnnual ? "bg-green-500 text-black" : "text-zinc-400"
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              isAnnual ? "bg-green-500 text-black" : "text-zinc-400"
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Annual <span className="text-xs opacity-80">Save 20%</span>
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingCard
          title="Basic"
          description="Essential security for individuals"
          price={isAnnual ? 4.99 : 5.99}
          period={isAnnual ? "/month, billed annually" : "/month"}
          features={[
            "Password management",
            "Secure notes",
            "Two-factor authentication",
            "1 GB encrypted storage",
            "Cross-platform sync",
          ]}
          buttonText="Start Free Trial"
          delay={0}
          popular={false}
        />

        <PricingCard
          title="Pro"
          description="Advanced security for professionals"
          price={isAnnual ? 9.99 : 12.99}
          period={isAnnual ? "/month, billed annually" : "/month"}
          features={[
            "Everything in Basic",
            "AI-powered security alerts",
            "Dark web monitoring",
            "10 GB encrypted storage",
            "Priority support",
            "Secure file sharing",
          ]}
          buttonText="Start Free Trial"
          delay={0.2}
          popular={true}
        />

        <PricingCard
          title="Enterprise"
          description="Complete security for teams"
          price={isAnnual ? 19.99 : 24.99}
          period={isAnnual ? "/month, billed annually" : "/month"}
          features={[
            "Everything in Pro",
            "Team management",
            "Admin console",
            "Advanced reporting",
            "100 GB encrypted storage",
            "API access",
            "Dedicated support",
          ]}
          buttonText="Contact Sales"
          delay={0.4}
          popular={false}
        />
      </div>
    </section>
  )
}

function PricingCard({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  delay,
  popular,
}: {
  title: string
  description: string
  price: number
  period: string
  features: string[]
  buttonText: string
  delay: number
  popular: boolean
}) {
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden ${
        popular
          ? "bg-gradient-to-b from-green-500/20 to-zinc-900 border-2 border-green-500/30 shadow-lg shadow-green-500/10"
          : "bg-zinc-900 border border-zinc-800"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -10,
        boxShadow: popular ? "0 20px 40px -20px rgba(34, 197, 94, 0.3)" : "0 20px 40px -20px rgba(0, 0, 0, 0.2)",
      }}
    >
      {popular && (
        <div className="bg-green-500 text-black text-xs font-bold uppercase tracking-wider py-1 text-center">
          Most Popular
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-zinc-400 ml-1">{period}</span>
        </div>

        <button
          className={`w-full py-3 rounded-full font-medium mb-8 ${
            popular ? "bg-green-500 hover:bg-green-600 text-black" : "bg-zinc-800 hover:bg-zinc-700 text-white"
          } transition-colors`}
        >
          {buttonText}
        </button>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full ${
                  popular ? "bg-green-500 text-black" : "bg-green-500/20 text-green-500"
                } flex items-center justify-center flex-shrink-0 mt-0.5`}
              >
                <Check className="w-3 h-3" />
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

