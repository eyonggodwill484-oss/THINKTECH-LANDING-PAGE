"use client"

import { Card } from "@/components/ui/card"
import { Zap, Code, Users } from "lucide-react"

export default function CoreExpertise() {
  const services = [
    {
      icon: Zap,
      title: "Digital Strategy & Audit",
      description: "Identifying bottlenecks and mapping out your digital roadmap.",
    },
    {
      icon: Code,
      title: "Custom Software Engineering",
      description: "Building high-performance tools (ERP, CRM, School Management) tailored to your workflows.",
    },
    {
      icon: Users,
      title: "Change Management & Training",
      description: "Ensuring long-term adoption through dedicated team training and 24/7 support.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Our <span className="text-primary">Core Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          We deliver comprehensive solutions tailored to your unique business needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-8 border border-border hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
