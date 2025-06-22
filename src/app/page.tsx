"use client"
import React, { Suspense } from 'react'
import About from '@/components/About'
import Resume from '@/components/about-me/resume/Resume'
import Portfolio from '@/components/about-me/portfolio/Portfolio'
import { Repositories } from '@/components/about-me/repositories/Repositories'
import Bio from '@/components/about-me/bio/Bio'
import Freelancing from '@/components/about-me/freelancing/Freelancing'
import Contact from '@/components/about-me/contact/Contact'
import Other from '@/components/about-me/other/Other'
import { Mail, File, User, Briefcase, Code } from 'lucide-react'

const AboutMe = () => {
  
  const tabs = [
    {
      value: "bio",
      label: "Bio",
      content: <Bio />,
      icon: <User />
    },
    {
      value: "resume",
      label: "Resume",
      content: <Resume />,
      icon: <File />
    },
    {
      value: "portfolio",
      label: "Portfolio",
      content: <Portfolio />,
      icon: <Briefcase />
    },
    {
      value: "repos",
      label: "Repositories",
      content: <Repositories />,
      icon: <Code />
    },
    {
      value: "freelancing",
      label: "Freelancing",
        content: <Freelancing />,
      icon: <Briefcase />
    },
    {
      value: "contact",
      label: "Contact",
      content: <Contact />,
      icon: <Mail />
    },
    {
      value: "other",
      label: "Other",
      content: <Other />,
      icon: <Code />
    }
  ]

  return (
    <Suspense>
      <About
        name="Andrés Aguilar Carboni"
        title="Software Engineer & Data Scientist"
        subtitle="aguilarcarboni"
        imageUrl="/assets/headshots/headshot.jpg"
        tabs={tabs}
      />
    </Suspense>
  )
}

export default AboutMe