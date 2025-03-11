import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeatureGrid from "@/components/feature-grid"
import AiFeatures from "@/components/ai-features"
import DemoSection from "@/components/demo-section"
import ExperienceSection from "@/components/experience-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import PartnersSection from "@/components/partners-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <HeroSection />
        <FeatureGrid />
        <AiFeatures />
        <DemoSection />
        <ExperienceSection />
        <TestimonialsSection />
        <PricingSection />
        <PartnersSection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  )
}

