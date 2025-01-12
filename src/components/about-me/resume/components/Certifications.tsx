import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Certifications = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>
                <p className='text-3xl text-center font-bold'>Certificates, Positions and Awards</p>
            </CardTitle>
            <CardDescription className='text-center'>Winning.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 w-full h-full">
            <div className=" flex flex-col items-start rounded-md border p-4">
                <p className='text-xl font-bold'> Deans list</p>
                <p className='text-lf-gray text-sm'>Fall 2021, Fall 2022, Spring 2023 semesters</p>
            </div>
        </CardContent>
        <CardContent className="grid gap-4">
            <div className=" flex flex-col items-start rounded-md border p-4">
                <p className='text-xl font-bold'>Presidentials award</p>
                <p className='text-lf-gray text-sm'>Spring 2022 semester</p>
            </div>
        </CardContent>
        <CardContent className="grid gap-4">
            <div className=" flex flex-col items-start rounded-md border p-4">
                <p className='text-xl font-bold'>55% tuition scholarship</p>
                <p className='text-lf-gray text-sm'>Texas Tech Costa Rica</p>
            </div>
        </CardContent>
        <CardContent className="grid gap-4">
            <div className=" flex flex-col items-start rounded-md border p-4">
                <p className='text-xl font-bold'>President of Texas Tech Costa Rica</p>
                <p className='text-lf-gray text-sm'>February 2024 - Present</p>
            </div>
        </CardContent>
        <CardContent className="grid gap-4">
            <div className=" flex flex-col items-start rounded-md border p-4">
                <p className='text-xl font-bold'>Hosted Texas Tech Costa Ricas annual hackathon</p>
                <p className='text-lf-gray text-sm'>November 2023</p>
            </div>
        </CardContent>
        <CardContent className="grid gap-4">
            <div className=" flex flex-col items-start rounded-md border p-4">
                <p className='text-xl font-bold'>Hosted Texas Tech Costa Ricas annual hackathon</p>
                <p className='text-lf-gray text-sm'>November 2023</p>
            </div>
        </CardContent>
        <CardContent className="grid gap-4">
            <div className=" flex flex-col items-start rounded-md border p-4">
                <p className='text-xl font-bold'>President and founder of the Raiders Athletic Organization </p>
                <p className='text-lf-gray text-sm'>August 2023-present</p>
            </div>
        </CardContent>
        <CardContent className="grid gap-4">
            <div className=" flex flex-col items-start rounded-md border p-4">
                <p className='text-xl font-bold'>Co-founder of the Texas Tech Costa Rica Startup And Tech club </p>
                <p className='text-lf-gray text-sm'> (Sept 2023-present)</p>
            </div>
        </CardContent>
        <CardContent className="grid gap-4">
            <div className=" flex flex-col items-start rounded-md border p-4">
                <p className='text-xl font-bold'> Former Division 1 Volleyball Player in Costa Rica </p>
                <p className='text-lf-gray text-sm'> 2019-2021</p>
            </div>
        </CardContent>
    </Card>
  )
}

export default Certifications