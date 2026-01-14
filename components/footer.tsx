"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">ThinkTech Solutions</h3>
            <p className="text-primary-foreground/80 mb-4">
              Strategic technology partner specializing in digital transformation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#methodology" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Methodology
                </a>
              </li>
              <li>
                <a href="/#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" aria-hidden="true" />
                <a
                  href="mailto:info@thinktech.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition"
                >
                  info@thinktech.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" aria-hidden="true" />
                <span className="text-primary-foreground/80">
                  123 Tech Street
                  <br />
                  San Francisco, CA 94102
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60">© 2026 ThinkTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
