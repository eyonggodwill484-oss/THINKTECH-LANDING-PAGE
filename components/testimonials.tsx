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
import { useTranslation } from "react-i18next"

export default function Testimonials() {
  const { t } = useTranslation()

  const testimonials = [
    {
      quote: t("testimonial1_quote"),
      name: t("testimonial1_name"),
      title: t("testimonial1_title"),
      avatar: "/placeholder-user.jpg",
    },
    {
      quote: t("testimonial2_quote"),
      name: t("testimonial2_name"),
      title: t("testimonial2_title"),
      avatar: "/placeholder-user.jpg",
    },
    {
      quote: t("testimonial3_quote"),
      name: t("testimonial3_name"),
      title: t("testimonial3_title"),
      avatar: "/placeholder-user.jpg",
    },
  ]
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="down">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            {t('What Our Clients Say')}
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
