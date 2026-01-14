"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label" // Added Label import
import { Mail, Phone, MapPin } from "lucide-react"
import { FadeIn } from "./animations/fade-in"
import { useTranslation } from "react-i18next"

export default function ContactUs() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="down">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            {t('Get in Touch')}
          </h2>
        </FadeIn>
        <FadeIn direction="down" delay={0.2}>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t("We're here to help. Contact us for a free consultation.")}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <FadeIn direction="right">
            <form className="space-y-4 sm:space-y-6">
              <div>
                <Input type="text" id="name" placeholder={t('Your Name')} className="h-12" />
              </div>
              <div>
                <Input type="email" id="email" placeholder={t('Your Email')} className="h-12" />
              </div>
              <div>
                <Textarea id="message" placeholder={t('Your Message')} className="min-h-[120px] resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold">
                {t('Send Message')}
              </Button>
            </form>
          </FadeIn>
          <FadeIn direction="left">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{t('Email')}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">info@thinktech-academy.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{t('Phone')}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">+237 651 91 85 03</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{t('Address')}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    362 Rue Boué de Lapeyrère Akwa Douala
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
