"use client"

import { Card } from "@/components/ui/card"
import { Zap, Code, Users } from "lucide-react"
import { FadeIn } from "./animations/fade-in"
import { useTranslation } from "react-i18next"

export default function CoreExpertise() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Zap,
      title: t("Digital Strategy & Audit"),
      description: t("Identifying bottlenecks and mapping out your digital roadmap."),
    },
    {
      icon: Code,
      title: t("Custom Software Engineering"),
      description: t("Building high-performance tools (ERP, CRM, School Management) tailored to your workflows."),
    },
    {
      icon: Users,
      title: t("Change Management & Training"),
      description: t("Ensuring long-term adoption through dedicated team training and 24/7 support."),
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="down">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            {t('Core Expertise')}
          </h2>
        </FadeIn>
        <FadeIn direction="down" delay={0.2}>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t('We deliver comprehensive solutions tailored to your unique business needs')}
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <FadeIn key={index} direction="up" delay={index * 0.2}>
                <Card
                  className="p-6 sm:p-8 border border-border hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                </Card>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
