"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Mobile Optimized */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll', // Better mobile performance
        }}
      />

      {/* Light Blue Blur Overlay */}
      <div className="absolute inset-0 bg-blue-500/30 backdrop-blur-[1px]" />

      {/* Content - Enhanced Mobile Layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-6 text-balance drop-shadow-2xl px-2">
            {t('Expertise that brings your ideas to life')}
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg px-2">
            {t('Strategic technology partner specialized in the design and implementation of robust digital transformation solutions.')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[44px] touch-manipulation"
            >
              {t('Get Started')}
              <ArrowRight className="ml-1.5 sm:ml-2 md:ml-3 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold bg-transparent shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[44px] touch-manipulation"
            >
              {t('Learn More')}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements - Hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-0.5 h-2 md:w-1 md:h-3 bg-white/50 rounded-full mt-1.5 md:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
