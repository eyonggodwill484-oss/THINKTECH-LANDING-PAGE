"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ValueProposition from "@/components/value-proposition"
import CoreExpertise from "@/components/core-expertise"
import SectorFocus from "@/components/sector-focus"
import Methodology from "@/components/methodology"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ValueProposition />
      <CoreExpertise />
      <SectorFocus />
      <Methodology />
      <Footer />
    </main>
  )
}
