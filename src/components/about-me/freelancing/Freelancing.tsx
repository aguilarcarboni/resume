import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/anims'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Laptop } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Freelancing = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-6"
    >
      <motion.div variants={itemVariants}>
        <Card className="h-full flex flex-col">
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            <CardHeader>
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-2"
              >
                <Laptop className="w-6 h-6 text-primary" />
                <CardTitle>Freelancing Services</CardTitle>
              </motion.div>
              <motion.div variants={itemVariants}>
                <CardDescription>Tailored solutions for your needs</CardDescription>
              </motion.div>
            </CardHeader>
          </motion.div>
          
          <CardContent className="flex-grow space-y-4">
            <motion.p 
              variants={itemVariants}
              className="leading-relaxed"
            >
              As a freelance software engineer and data scientist, I offer a range of services including:
            </motion.p>
            
            <ul 
              className="list-disc pl-5 space-y-2"
            >
              {["Full-stack web development", "Custom software solutions", "Data analysis and visualization", "Machine learning model development", "Technical consulting"].map((service, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  custom={index}
                >{service}</motion.li>
              ))}
            </ul>
            
            <p className="leading-relaxed">
              Im passionate about delivering high-quality, tailored solutions that meet your specific needs. Whether youre a startup looking to build your MVP or an established company seeking to optimize your processes, Im here to help.
            </p>
            <div className="pt-4">
              <Button
                className="bg-transparent hover:bg-muted"
                variant="ghost"
              >
                <span className="animated-gradient-text">Contact me</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default Freelancing