import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { containerVariants, itemVariants } from '@/lib/anims'
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    slidesToScroll: 1, 
    align: 'center',
    loop: true
  })

  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = React.useState(true)
  const [isNextButtonDisabled, setIsNextButtonDisabled] = React.useState(false)

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setIsPrevButtonDisabled(!emblaApi.canScrollPrev())
    setIsNextButtonDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-fit w-fit justify-center items-center mx-auto"
      >
        <motion.div variants={itemVariants}>
          <motion.div 
            className="h-full w-full flex justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              variants={buttonVariants}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollPrev}
                disabled={isPrevButtonDisabled}
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </motion.div>
            <div className="relative w-full max-w-4xl">
              <Card className="w-fit">
                <CardContent>
                <div className="flex">
                  {coolItems.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex-[0_0_100%] min-w-0 flex justify-center"
                      variants={fadeInVariants}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
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
                    </motion.div>
                  ))}
                </div>
                </CardContent>
              </Card>
            </div>
            <motion.div
              variants={buttonVariants}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollNext}
                disabled={isNextButtonDisabled}
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Other
