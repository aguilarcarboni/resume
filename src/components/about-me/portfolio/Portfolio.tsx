import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from 'next/image'
import { projects } from '@/lib/projects'

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    slidesToScroll: 1, 
    align: 'center'
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
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={isPrevButtonDisabled}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </motion.div>
      <div className="relative overflow-hidden w-full max-w-4xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 p-4"
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.images[0]}
                      alt={`${project.name} preview`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-primary">{project.name}</CardTitle>
                    <p className="text-sm text-muted-foreground italic">{project.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow overflow-y-auto max-h-[40vh] prose prose-sm dark:prose-invert">
                    {project.content}
                  </CardContent>
                  <div className="p-4 bg-muted/50 mt-auto">
                    <p className="text-sm font-medium">
                      Status: {project.state === 1 ? 'Completed' : 'In Progress'}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        variants={buttonVariants}
        transition={{ duration: 0.3 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={isNextButtonDisabled}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default Portfolio
