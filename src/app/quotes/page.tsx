'use client'

import React from 'react'
import Quotes from '@/components/about-me/other/Quotes'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full relative">
      <Button variant="ghost" className="absolute top-4 left-4" asChild>
        <Link 
          href="/?tab=other"
          className="absolute top-4 left-4 px-4 py-2 text-sm font-medium transition-colors"
        >
          ← Back
        </Link>
      </Button>
      <div className="flex w-full max-w-5xl justify-center items-center">
        <Quotes />
      </div>
    </div>
  )
}

export default page