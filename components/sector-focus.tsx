"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, TrendingUp } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function SectorFocus() {
  const { t } = useTranslation()
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          {t('Sector-Specific Solutions')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education Sector */}
          <Card className="p-6 sm:p-8 lg:p-10 border border-border bg-card hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">{t('Education Sector')}</h3>
            </div>
            <p className="text-muted-foreground mb-4 sm:mb-6 font-semibold text-sm sm:text-base">
              {t('Maximizing profitability and pedagogical excellence')}
            </p>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                <span className="text-foreground text-sm sm:text-base">{t('Content Virtualization & Multimedia Repositories')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                <span className="text-foreground text-sm sm:text-base">{t('Advanced Automated Grading & Analytics')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                <span className="text-foreground text-sm sm:text-base">{t('Learning Management Systems')}</span>
              </li>
            </ul>
          </Card>

          {/* Corporate Solutions */}
          <Card className="p-6 sm:p-8 lg:p-10 border border-border bg-card hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">{t('Corporate Solutions')}</h3>
            </div>
            <p className="text-muted-foreground mb-4 sm:mb-6 font-semibold text-sm sm:text-base">{t('Streamlining operations for business scale')}</p>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                <span className="text-foreground text-sm sm:text-base">{t('Enterprise Process Automation')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                <span className="text-foreground text-sm sm:text-base">{t('Data Sovereignty & Security')}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                <span className="text-foreground text-sm sm:text-base">{t('Cloud Infrastructure & DevOps')}</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
