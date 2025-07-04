"use client"

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowDown, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/anims'
import { toast } from '@/hooks/use-toast'
import RepositoryCard from './RepositoryCard'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  pushed_at: string
}

export function Repositories() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const REPOS_PER_PAGE = 12

  async function fetchRepos(pageNumber: number) {
    setIsLoading(true)
    try {
      const response = await fetch(`https://api.github.com/users/aguilarcarboni/repos?page=${pageNumber}&per_page=${REPOS_PER_PAGE}&sort=pushed&direction=desc`)
      if (!response.ok) {
        throw new Error('Failed to fetch repositories')
      }
      const data: Repository[] = await response.json()
      
      setRepos(prevRepos => {
        const updatedRepos = [...prevRepos, ...data]
        const uniqueRepos = updatedRepos.filter((repo, index, self) => 
          index === self.findIndex(r => r.id === repo.id)
        )
        return uniqueRepos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      })
      setHasMore(data.length === REPOS_PER_PAGE)
    } catch (err) {
      toast({
        title: 'Error fetching repositories',
        description: 'Please try again later.',
      })
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchRepos(1)
  }, [])

  function handleLoadMore() {
    const nextPage = page + 1
    setPage(nextPage)
    fetchRepos(nextPage)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {repos.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </motion.div>
            
      {hasMore && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            variant="ghost"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 
            <span className="flex items-center gap-2">
              <ArrowDown className="w-4 h-4" />
              Load More
            </span>
            }
          </Button>
        </motion.div>
      )}
    </div>
  )
}