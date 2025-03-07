'use client'

import React from 'react'
import Quotes from '@/components/about-me/other/Quotes'

const page = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex w-full max-w-5xl justify-center items-center">
        <Quotes />
      </div>
    </div>
  )
}

export default page