import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from 'lucide-react'
import { languages } from '@/lib/resume'

const Languages = () => {
  return (
    <Card className='h-full w-full'>
      <CardHeader>
        <div className='flex gap-2'>
          <Globe className='text-primary'/>
          <CardTitle className="text-2xl font-bold">Languages</CardTitle>
        </div>
        <CardDescription>
          Languages I speak and write.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-around items-center">
        {languages.map((language) => (
          <div key={language.name} className="flex flex-col items-center">
            <Image src={language.url} alt={language.name} width={40} height={40} className="mb-2" />
            <p className="font-semibold">{language.name}</p>
            <p className="text-sm text-muted-foreground">{language.level}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default Languages