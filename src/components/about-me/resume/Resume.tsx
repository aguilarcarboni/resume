import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Languages from './components/Languages'
import { containerVariants, itemVariants } from '@/lib/anims'
import GitHubContributions from './components/GitHubContributions'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { User } from 'lucide-react'
import Skills from './components/Skills'
import Awards from './components/Awards'
import { tagline } from '@/lib/resume/resume'

const Resume = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='h-fit w-full justify-center items-center mx-auto'
      >
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-4 gap-4"
        >
          <motion.div variants={itemVariants} className="col-span-4 row-span-1">
            <Card className="h-full flex flex-col transition-transform duration-300 group-hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <User className='text-primary'/>
                  <CardTitle>Get to know me</CardTitle>
                </div>
                <CardDescription>A little about myself</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{tagline}</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-2 row-start-2">
            <WorkExperience />
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-1 row-start-2">
            <Education />
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-1 row-start-2">
            <Skills />
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-1 row-start-3">
            <Languages />
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-3">
            <GitHubContributions />
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-4 row-start-4">
            <Awards />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Resume