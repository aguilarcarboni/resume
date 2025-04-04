"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { rubik } from '@/lib/fonts'
import LinkScroller from './misc/LinkScroller'
import Image from 'next/image'
import { containerVariants, itemVariants } from '@/lib/anims'

interface AboutProps {
  name: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  tabs: {
    value: string;
    label: string;
    content: React.ReactNode;
  }[];
}

const About: React.FC<AboutProps> = ({ name, title, subtitle, imageUrl, tabs }) => {
  return (
    <AnimatePresence>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="h-full w-full gap-y-5 flex flex-col"
      >
        <motion.div variants={itemVariants} className="flex w-full h-fit gap-x-10 justify-center items-center">
          <div className={cn("w-40 h-40 shrink-0 grow-0 rounded-full relative overflow-hidden", !imageUrl ? 'bg-primary' : '')}>
            {imageUrl && <Image src={imageUrl} alt={''} fill className="object-cover" />}
          </div>
          <div className="w-fit h-full flex flex-col justify-center items-start md:text-start text-center">
            <p className={cn(rubik.className, "text-7xl font-bold")}>{name}</p>
            <p className="text-lg text-subtitle">{title}</p>
            <LinkScroller name={subtitle}/>
          </div>
        </motion.div>

        <Tabs defaultValue={tabs[0].value} className="z-10 w-full h-fit flex flex-col justify-center items-center">
          <motion.div variants={itemVariants}>
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          <div className='w-full h-fit flex flex-col justify-center items-center my-10'>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} className="w-[80%]" value={tab.value}>
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
