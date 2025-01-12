"use client"
import React from 'react'
import About from '@/components/About'
import Resume from '@/components/about-me/resume/Resume'
import Portfolio from '@/components/about-me/portfolio/Portfolio'
import { Repositories } from '@/components/about-me/repositories/Repositories'
import Bio from '@/components/about-me/bio/Bio'
import Freelancing from '@/components/about-me/freelancing/Freelancing'
import Contact from '@/components/about-me/contact/Contact'

const AboutMe = () => {
  
  const tabs = [
    {
      value: "bio",
      label: "Bio",
      content: <Bio />
    },
    {
      value: "resume",
      label: "Resume",
      content: <Resume />
    },
    {
      value: "portfolio",
      label: "Portfolio",
      content: <Portfolio />
    },
    {
      value: "repos",
      label: "Repositories",
      content: <Repositories />
    },
    {
      value: "freelancing",
      label: "Freelancing",
      content: <Freelancing />
    },
    {
      value: "contact",
      label: "Contact",
      content: <Contact />
    }
  ]

  return (
    <About
      name="Andres Aguilar"
      title="Software Engineer & Data Scientist"
      subtitle="aguilarcarboni"
      imageUrl="/assets/headshots/headshot.jpg"
      tabs={tabs}
    />
  )
}

export default AboutMe