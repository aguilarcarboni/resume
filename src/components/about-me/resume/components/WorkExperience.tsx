import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from 'lucide-react'
import { experiences } from '@/lib/resume'

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
        {experiences.map((exp, index) => (
          <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
            <h3 className="font-semibold text-lg">{exp.title}</h3>
            <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
            <p className="mt-2 text-sm">{exp.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default WorkExperience