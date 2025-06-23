"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex items-center justify-between w-full h-fit'>
        <Link href="/" className='cursor-pointer'>
          <Image src="/assets/brand/icon.png" alt="@laserfocus" width={75} height={75}/>
        </Link>
    </div>
  )
}

export default Header