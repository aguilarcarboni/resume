import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from 'lucide-react'
import { experiences } from '@/lib/resume/resume'
import { cn } from '@/lib/utils'

const WorkExperience = () => {
  return (
    <Card className='h-full w-full'>
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          Work Experience
        </CardTitle>
        <CardDescription>
          Real world problems solved.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp, index) => {
          // Check if the experience is an array (multiple positions at same company)
          if (Array.isArray(exp)) {
            return (
              <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                <div className="space-y-4 relative">
                  {/* Vertical line that connects all positions */}
                  <div className="absolute left-[-12px] top-[28px] bottom-0 w-[2px] bg-muted-foreground/20"></div>
                  {exp.map((position, posIndex) => (
                    <div key={posIndex} className="relative">
                      <h3 className="font-semibold text-lg">{position.title}</h3>
                      <p className="text-sm text-subtitle">{position.company} | {position.period}</p>
                      <p className="mt-2 text-sm">{position.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          } else {
            // Single position
            return (
              <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <p className="text-sm text-subtitle">{exp.company} | {exp.period}</p>
                <p className="mt-2 text-sm">{exp.description}</p>
              </div>
            )
          }
        })}
      </CardContent>
    </Card>
  )
}

export default WorkExperience