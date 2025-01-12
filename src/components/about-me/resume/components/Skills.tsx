import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from '@/lib/resume'
import { Lightbulb } from 'lucide-react'


const Skills = () => {
  return (
    <Card className='h-full w-full'>
      <CardHeader>
        <div className='flex gap-2'>
          <Lightbulb className='text-primary'/>
          <CardTitle className="text-2xl font-bold">My skills</CardTitle>
        </div>
        <CardDescription>
          What areas I shine in.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {skills.map((skill, index) => (
            <li key={index} className="flex border-b pb-4 items-center space-x-3">
              <skill.icon className="h-5 w-5 text-subtitle mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Skills