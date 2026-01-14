"use client"

import { Card } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export default function Methodology() {
  const { t } = useTranslation()

  const steps = [
    {
      number: "01",
      title: t("Discovery"),
      description: t("We listen to your vision and audit your current challenges."),
    },
    {
      number: "02",
      title: t("Design"),
      description: t("We architect a tailor-made solution using the best Open-Source stacks."),
    },
    {
      number: "03",
      title: t("Implementation"),
      description: t("Agile development with transparent progress tracking."),
    },
    {
      number: "04",
      title: t("Evolution"),
      description: t("Continuous support and optimization to match your growth."),
    },
  ]

  return (
    <section id="methodology" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          {t('Our Proven Methodology')}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {t('A structured approach to ensure successful digital transformation')}
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 h-full border border-border bg-card hover:border-primary transition-all">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary/20 mb-2 block">{step.number}</span>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
