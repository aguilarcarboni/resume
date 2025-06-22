import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, Quote } from 'lucide-react'
import Link from 'next/link'
import { containerVariants, itemVariants } from '@/lib/anims'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { FaQuoteRight } from 'react-icons/fa'

const coolItems = [
  {
    title: "Quotes",
    description: "Explore quotes that inspire me",
    icon: FaQuoteRight,
    href: "/quotes"
  }
]

const Other = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-fit w-fit justify-center items-center mx-auto"
      >
        <motion.div variants={itemVariants}>
          <Card className="w-fit px-10">
            <CardContent className="px-12 py-12">
              <div className="w-fit mx-auto relative">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true
                  }}
                  className="flex justify-center items-center"
                >
                  <CarouselContent className="w-fit">
                    {coolItems.map((item, index) => (
                      <CarouselItem key={index} className="flex justify-center">
                          <Button
                            asChild
                            variant="ghost"
                            className="w-[200px] h-48 flex flex-col gap-4"
                          >
                            <Link href={item.href}>
                              <item.icon className="w-12 h-12 text-primary" />
                              <span className="text-2xl font-semibold">{item.title}</span>
                              <span className="text-sm text-subtitle text-center">{item.description}</span>
                            </Link>
                          </Button>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute -left-12" />
                  <CarouselNext className="absolute -right-12" />
                </Carousel>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Other
