import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"
import { awards } from '@/lib/resume/resume'

const Awards = () => {
  return (
    <Card className='h-full w-full'>
      <CardHeader>
        <div className='flex gap-2'>
          <Lightbulb className='text-primary'/>
          <CardTitle className="text-2xl font-bold">Other</CardTitle>
        </div>
        <CardDescription>
          Other accomplishments and achievements.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-rows-3 grid-cols-3 gap-4">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col bg-muted p-3 rounded-md items-start justify-center">
              <h3 className="font-semibold text-lg">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Awards