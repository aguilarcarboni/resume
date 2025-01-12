"use client"
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
  
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import Image from 'next/image'

type Props = {}

const WalletInfo = (props: Props) => {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className={cn("w-full h-[5vh] space-y-2", isOpen && 'h-fit')}
        >
            <div className="flex items-center justify-between space-x-4 px-4">
            <a href='https://portfolio.metamask.io/' target='_blank' className='hover:decoration-black hover:underline'>
                <h4 className="text-lg font-semibold">
                Pay me
                </h4>
            </a>
            <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
                </Button>
            </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-5">
                <div className="rounded-md border px-4 py-3 text-sm flex items-center justify-between space-x-6">
                    <div className='flex flex-col'>
                        <button className='w-fit text-lf-black hover:underline hover:decoration-lf-black'>Copy address</button>
                        <Popover>
                            <PopoverTrigger>
                                <p className='w-fit text-black text-sm hover:underline hover:decoration-black' >View QR</p>
                            </PopoverTrigger>
                            <PopoverContent className='w-[30vh] h-[30vh] rounded-3xl'>
                                <Image src='./assets/qr.png' alt='hola' width={50} height={50}/>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className='bg-black py-2 px-3.5 rounded-xl flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="2vh" className='fill-lf-white' viewBox="0 0 320 512">
                            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/>
                        </svg>
                    </div>
                </div>
            </CollapsibleContent>
        </Collapsible>
  )
}

export default WalletInfo