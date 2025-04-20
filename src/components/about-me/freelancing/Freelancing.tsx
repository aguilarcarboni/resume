import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/anims'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Freelancing = () => {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('/?tab=contact')
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-6 max-w-4xl mt-5 mx-auto"
    >
      <motion.div variants={itemVariants}>
        <Card className="h-full flex flex-col">
          
          <CardContent className="flex-grow space-y-4">
            <p 
              className="leading-relaxed"
            >
              As a freelance software engineer and data scientist, I offer a range of services including:
            </p>
            
            <ul 
              className="list-disc pl-5 space-y-2"
            >
              {["Full-stack web development", "Custom software solutions", "Data analysis and visualization", "Custom machine learning model development and deployment", "Technical consulting"].map((service, index) => (
                <li 
                  key={index}
                >
                  {service}
                </li>
              ))}
            </ul>
            
            <p className="leading-relaxed">
              Im passionate about delivering high-quality, tailored solutions that meet your specific needs. Whether youre a startup looking to build your MVP or an established company seeking to optimize your processes, Im here to help.
            </p>
            <div className="pt-4">
              <Button
                className="bg-transparent hover:bg-muted"
                variant="ghost"
                onClick={handleContactClick}
              >
                <span className="shimmer-text-blue">Let's work together</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default Freelancing