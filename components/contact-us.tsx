"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label" // Added Label import
import { Mail, Phone, MapPin } from "lucide-react"
import { FadeIn } from "./animations/fade-in"

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="down">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
        </FadeIn>
        <FadeIn direction="down" delay={0.2}>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            We&apos;re here to help. Contact us for a free consultation.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn direction="right">
            <form className="space-y-6">
              <div>
                <Input type="text" id="name" placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" id="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea id="message" placeholder="Your Message" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </FadeIn>
          <FadeIn direction="left">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-muted-foreground">contact@thinktech.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold">Phone</h3>
                  <p className="text-muted-foreground">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold">Address</h3>
                  <p className="text-muted-foreground">
                    123 ThinkTech Avenue, Innovation City, 12345
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
