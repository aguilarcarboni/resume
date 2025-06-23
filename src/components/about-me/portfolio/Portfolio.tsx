import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Link, Info } from "lucide-react"
import { motion } from "framer-motion"
import Image from 'next/image'
import { PROJECT_STATE, projects } from '@/lib/resume/projects'
import { cn } from "@/lib/utils"
import useWindowDimensions from '@/hooks/useWindowDimensions'

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    slidesToScroll: 1, 
    align: 'center'
  })

  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = React.useState(true)
  const [isNextButtonDisabled, setIsNextButtonDisabled] = React.useState(false)
  
  const { width } = useWindowDimensions()
  const isMobile = (width || 1024) < 768

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
          variant="ghost"
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
                  <div className="flex flex-col h-full justify-between">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                      <project.icon className="h-6 w-6 text-primary" />
                      {project.name}
                    </CardTitle>
                    <p className="text-sm text-subtitle">{project.description}</p>
                  </CardHeader>
                  
                  {/* Mobile: Show Dialog Button */}
                  {isMobile && (
                    <div className="px-4 pb-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-2 text-sm"
                          >
                            <Info className="h-4 w-4" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] max-h-[80vh] rounded-lg">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                              <project.icon className="h-6 w-6 text-primary" />
                              {project.name}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="prose prose-sm dark:prose-invert max-w-none">
                            {project.content}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                  
                  {/* Desktop: Always show content */}
                  {!isMobile && (
                    <CardContent className="flex-grow overflow-y-auto max-h-[40vh] prose prose-sm dark:prose-invert">
                      {project.content}
                    </CardContent>
                  )}
                  </div>
                  
                  <div className="p-4 bg-muted/50 mt-auto flex justify-between items-center">
                    <p className="text-sm font-medium flex items-center">
                      <div className={cn(project.state === PROJECT_STATE.Completed ? 'bg-green-500' : project.state === PROJECT_STATE.InProgress ? 'bg-yellow-500' : 'bg-red-500', 'w-2 h-2 rounded-full mr-2')}></div>
                      {
                        project.state === PROJECT_STATE.Completed ? 'Completed' : 
                        project.state === PROJECT_STATE.InProgress ? 'In Progress' : 'Not Started'
                      }
                    </p>
                    {project.url ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "flex items-center bg-transparent hover:bg-subtitle/20",
                          isMobile ? "gap-0 px-2" : "gap-2"
                        )}
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <Link className="h-4 w-4" />
                        {!isMobile && "Visit Project"}
                      </Button>
                    ) : (
                      <p className="text-sm text-muted-foreground">No link available</p>
                    )}
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
  )
}

export default Portfolio
