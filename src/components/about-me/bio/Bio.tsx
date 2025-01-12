import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { containerVariants, itemVariants } from '@/lib/anims'
import { bio } from '@/lib/bio'

const Bio = () => {
  return (
    <motion.div 
    variants={containerVariants}
    className="flex flex-col gap-6"
  >
    {bio.map((item) => (
      <motion.div 
        key={item.title}
        variants={itemVariants}
        className="group w-full max-w-5xl mx-auto"
      >
        <Card className="h-full flex flex-col transition-transform duration-300 group-hover:scale-105">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <item.icon className="w-6 h-6 text-primary" />
              <CardTitle>{item.title}</CardTitle>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </motion.div>
  )
}

export default Bio