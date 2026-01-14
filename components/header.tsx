"use client"

import { Menu, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslation } from "react-i18next"

export default function Header() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const firstMobileNavLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isOpen && firstMobileNavLinkRef.current) {
      firstMobileNavLinkRef.current.focus()
    }
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/thinktech-logo.png"
            alt="ThinkTech Solutions Logo"
            width={80}
            height={80}
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          />
          <span className="text-lg font-bold text-primary">ThinkTech</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            {t('About')}
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            {t('Services')}
          </a>
          <a href="#methodology" className="text-foreground hover:text-primary transition-colors">
            {t('Methodology')}
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            {t('Contact')}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div ref={mobileMenuRef} className="md:hidden border-t border-border">
          <div className="px-4 py-4 space-y-4">
            <a ref={firstMobileNavLinkRef} href="#about" className="block text-foreground hover:text-primary">
              {t('About')}
            </a>
            <a href="#services" className="block text-foreground hover:text-primary">
              {t('Services')}
            </a>
            <a href="#methodology" className="block text-foreground hover:text-primary">
              {t('Methodology')}
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary">
              {t('Contact')}
            </a>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
