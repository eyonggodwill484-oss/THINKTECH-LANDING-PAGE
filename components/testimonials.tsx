"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FadeIn } from "./animations/fade-in"

const testimonials = [
  {
    quote:
      "ThinkTech transformed our operations with a custom ERP system. Their team's expertise and dedication were outstanding.",
    name: "John Doe",
    title: "CEO, Innovate Inc.",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "The change management support from ThinkTech was crucial for our team's adoption of the new software. Highly recommended.",
    name: "Jane Smith",
    title: "COO, Future Enterprises",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "We saw a significant improvement in efficiency after implementing the CRM built by ThinkTech. Their solutions are top-notch.",
    name: "Peter Jones",
    title: "Director of Sales, Growth Co.",
    avatar: "/placeholder-user.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="down">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </FadeIn>
        <FadeIn direction="up">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="p-6">
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  )
}
