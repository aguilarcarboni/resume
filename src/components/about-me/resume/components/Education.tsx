import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/resume/resume'

const Education = () => {
  return (
    <Card className='h-full w-full'>
      <CardHeader>
        <div className='flex gap-2'>
          <GraduationCap className='text-primary'/>
          <CardTitle className="text-2xl font-bold">Education</CardTitle>
        </div>
        <CardDescription>
          Accrediting myself.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        {education.map((education, index) => (
            <div key={index} className='border-b pb-4'>
                <h3 className="font-semibold text-lg">{education.degree}</h3>
                <p className="text-sm text-muted-foreground">{education.institution}</p>
                <p className="text-sm">{education.period}</p>
            </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default Education