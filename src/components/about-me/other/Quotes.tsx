"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { quotes } from "@/lib/quotes"

interface BookProps {
  pages?: Array<{ text: string; author: string }>
}

interface PageContentProps {
  content: { text: string; author: string } | null;
  pageNumber: number;
  totalPages: number;
}

export default function Quotes({ pages = quotes }: BookProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(1)
  const bookRef = useRef<HTMLDivElement>(null)

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1)
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setDirection(-1)
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="w-full max-w-2xl h-fit flex items-center justify-center p-4">
      <div className="relative w-full h-full aspect-[3/4]" ref={bookRef}>
        {/* Book binding and cover */}
        <div className="absolute inset-0 bg-card rounded-xl shadow-2xl border border-border/20">
          {/* Book spine */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-primary/20 shadow-inner"></div>

          {/* Book edge (pages thickness) */}
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-card shadow-inner">
            {/* Page lines */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 h-px bg-muted"
                style={{ top: `${(i + 1) * 5}%` }}
              ></div>
            ))}
          </div>

          {/* Book cover texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>

          {/* Title */}
          <div className="absolute top-10 left-0 right-0 text-center text-2xl font-serif tracking-wider text-primary">
            Book of Quotes
          </div>

          {/* Book pages container */}
          <div className="absolute inset-[20px] bg-card rounded-lg shadow-inner overflow-hidden border border-border/10">
            {/* Page turning controls */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 0}
                className="p-2 rounded-full bg-background/80 text-primary hover:bg-muted/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-border/10"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
              <button
                onClick={goToNextPage}
                disabled={currentPage === pages.length - 1}
                className="p-2 rounded-full bg-background/80 text-primary hover:bg-muted/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-border/10"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Book content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 30 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 * direction }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-8 bg-card"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              >
                <PageContent
                  content={pages[currentPage]}
                  pageNumber={currentPage + 1}
                  totalPages={pages.length}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

function PageContent({ content, pageNumber, totalPages }: PageContentProps) {
  if (!content) return null;

  return (
    <div className="h-full flex flex-col justify-between">

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md p-10">
          <p className="text-xl font-serif leading-relaxed text-foreground italic">"{content.text}"</p>
          <p className="mt-6 text-right text-primary font-serif">— {content.author}</p>
        </div>
      </div>

      <div className="flex justify-between text-primary/30 font-serif">
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
      </div>
      
      <div className="text-center text-sm text-muted-foreground font-serif">
        Page {pageNumber} of {totalPages}
      </div>
    </div>
  )
}