"use client"

import { Mail, Phone, MapPin, Facebook, Linkedin, MessageCircle, X } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('ThinkTech Solutions')}</h3>
            <p className="text-primary-foreground/80 mb-4">
              {t('Strategic technology partner specializing in digital transformation solutions.')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('Quick Links')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  {t('About Us')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  {t('Services')}
                </a>
              </li>
              <li>
                <a href="#methodology" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  {t('Methodology')}
                </a>
              </li>
              <li>
                <a href="/#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  {t('Blog')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('Get In Touch')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" aria-hidden="true" />
                <a
                  href="mailto:info@thinktech-academy.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition"
                >
                  info@thinktech-academy.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <a
                  href="tel:+237693593817"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition"
                >
                  +237 693 59 38 17
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" aria-hidden="true" />
                <span className="text-primary-foreground/80">
                  362 Rue Boué de Lapeyrère Akwa Douala
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('Follow Us')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/people/ThinkTech-Solutions/61586212243812/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/thinktech-solutions-sarl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/237651918503"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/thinktechsol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <X className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60">{t('© 2026 ThinkTech Solutions. All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  )
}
