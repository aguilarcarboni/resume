import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Quote, Gamepad, Code, Book } from 'lucide-react'
import Link from 'next/link'
import { containerVariants, itemVariants } from '@/lib/anims'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const coolItems = [
  {
    title: "Blog",
    description: "Explore my blog",
    icon: Book,
    href: "/blog"
  },
  {
    title: "Quotes",
    description: "Explore inspiring quotes",
    icon: Quote,
    href: "/quotes"
  },
  {
    title: "Hobbies",
    description: "Explore my hobbies",
    icon: Gamepad,
    href: "/hobbies"
  },
  {
    title: "Projects",
    description: "Explore all my projects",
    icon: Code,
    href: "/projects"
  },
]

const Other = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-fit w-full max-w-3xl justify-center items-center mx-auto"
      >
        <motion.div variants={itemVariants}>
          <Card className="w-full">
            <CardHeader className="flex flex-col justify-center items-center gap-2">
              <CardTitle className="text-3xl font-bold">Other Cool Stuff</CardTitle>
              <CardDescription>Discover more interesting content</CardDescription>
            </CardHeader>
            <CardContent className="px-12">
              <Carousel
                opts={{
                  align: "center",
                  loop: true
                }}
                className="w-full"
              >
                <CarouselContent>
                  {coolItems.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <motion.div variants={itemVariants} className="h-full">
                        <Button
                          asChild
                          variant="ghost"
                          className="w-full h-48 flex flex-col gap-4"
                        >
                          <Link href={item.href}>
                            <item.icon className="w-12 h-12" />
                            <span className="text-2xl font-semibold">{item.title}</span>
                            <span className="text-sm text-muted-foreground">{item.description}</span>
                          </Link>
                        </Button>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Other
