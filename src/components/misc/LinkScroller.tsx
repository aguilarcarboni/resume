"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { personalLinks } from '@/lib/links'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from '@radix-ui/react-tooltip'

const LinkScroller = ({ name }: { name: string }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % personalLinks.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="link" className='m-0 p-0'>@{name}</Button>
        </TooltipTrigger>
        <TooltipContent className="flex p-4 w-fit overflow-hidden bg-background">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              className='flex w-full justify-between items-center gap-2'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {React.createElement(personalLinks[index].icon, { className: 'w-6 h-6 text-primary' })}
              <p className='text-sm font-medium'>{personalLinks[index].username}</p>
            </motion.div>
          </AnimatePresence>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default LinkScroller