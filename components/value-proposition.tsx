"use client"

import { useTranslation } from "react-i18next"

export default function ValueProposition() {
  const { t } = useTranslation()
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              {t('ValuePropositionTitle')}
            </h2>
          </div>

          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('ValuePropositionDescription')}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">{t('Eliminate vendor lock-in with proven open-source solutions')}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  {t('Reduce total cost of ownership with transparent, community-driven technology')}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">{t('Scale your operations while maintaining complete data sovereignty')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
