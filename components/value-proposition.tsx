"use client"

export default function ValueProposition() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Empowering growth through <span className="text-accent">Open-Source sovereignty</span>
            </h2>
          </div>

          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We bridge the gap between complex vision and technical reality. By leveraging world-class Open-Source
              technologies, we deliver scalable solutions that eliminate licensing traps and stop financial leakage.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">Eliminate vendor lock-in with proven open-source solutions</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  Reduce total cost of ownership with transparent, community-driven technology
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-foreground">Scale your operations while maintaining complete data sovereignty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
