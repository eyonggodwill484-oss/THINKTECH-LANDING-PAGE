"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, TrendingUp } from "lucide-react"

export default function SectorFocus() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Sector-Specific <span className="text-primary">Solutions</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Sector */}
          <Card className="p-10 border border-border bg-card hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education Sector</h3>
            </div>
            <p className="text-muted-foreground mb-6 font-semibold">
              Maximizing profitability and pedagogical excellence
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground">Content Virtualization & Multimedia Repositories</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground">Advanced Automated Grading & Analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground">Learning Management Systems</span>
              </li>
            </ul>
          </Card>

          {/* Corporate Solutions */}
          <Card className="p-10 border border-border bg-card hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Corporate Solutions</h3>
            </div>
            <p className="text-muted-foreground mb-6 font-semibold">Streamlining operations for business scale</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground">Enterprise Process Automation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground">Data Sovereignty & Security</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground">Cloud Infrastructure & DevOps</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
