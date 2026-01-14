"use client"

import Marquee from "react-fast-marquee"
import Image from "next/image"

const partners = [
  { src: "/images/partners/logo1.svg", alt: "Partner 1" },
  { src: "/images/partners/logo2.svg", alt: "Partner 2" },
  { src: "/images/partners/logo3.svg", alt: "Partner 3" },
  { src: "/images/partners/logo4.svg", alt: "Partner 4" },
  { src: "/images/partners/logo5.svg", alt: "Partner 5" },
  { src: "/images/partners/logo6.svg", alt: "Partner 6" },
  { src: "/images/partners/logo7.svg", alt: "Partner 7" },
  { src: "/images/partners/logo8.svg", alt: "Partner 8" },
]

export default function ValuedPartners() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">
          Our <span className="text-primary">Valued Partners</span>
        </h2>
        <Marquee>
          {partners.map((partner, index) => (
            <div key={index} className="mx-8">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={150}
                height={50}
                className="grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
