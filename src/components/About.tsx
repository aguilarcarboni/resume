"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { rubik } from '@/lib/fonts'
import Image from 'next/image'
import { containerVariants, itemVariants } from '@/lib/anims'
import { useRouter, useSearchParams } from 'next/navigation'
import { location } from '@/lib/location'

interface AboutProps {
  name: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  tabs: {
    value: string;
    label: string;
    icon: React.ReactNode;
    content: React.ReactNode;
  }[];
}

const About: React.FC<AboutProps> = ({ name, title, imageUrl, tabs }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentTab = searchParams.get('tab') || 'bio'

  const handleTabChange = (value: string) => {
    if (value === 'bio') {
      router.push('/')
    } else {
      router.push(`/?tab=${value}`)
    }
  }

  return (
    <AnimatePresence>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="h-full w-full gap-y-5 flex flex-col"
      >
        <motion.div variants={itemVariants} className="flex w-full h-fit md:gap-x-10 gap-y-6 md:flex-row flex-col justify-center items-center">
          <div className={cn("w-40 h-40 shrink-0 grow-0 rounded-full relative overflow-hidden", !imageUrl ? 'bg-primary' : '')}>
            {imageUrl && <Image src={imageUrl} alt={''} fill className="object-cover" />}
          </div>
          <div className="w-fit h-full flex gap-2 flex-col justify-center items-center md:items-start">
            <p className={cn(rubik.className, "md:text-6xl text-3xl font-bold text-center md:text-start")}>{name}</p>
            <p className="text-lg text-subtitle text-center md:text-start">{title}</p>
            <div className="flex gap-2 items-center">
              <location.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground">{location.username}</span>
            </div>
          </div>
        </motion.div>

        <Tabs value={currentTab} onValueChange={handleTabChange} className="z-10 w-full h-fit flex flex-col justify-center items-center">
          <motion.div variants={itemVariants}>
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  <span className="md:block hidden">{tab.label}</span>
                  <span className="md:hidden block">{tab.icon}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          <div className='w-full h-fit flex flex-col justify-center items-center my-10'>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} className="w-full md:w-[80%] px-4 md:px-0" value={tab.value}>
                {tab.content}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </motion.div>
    </AnimatePresence>
  )
}

export default About
