import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/anims'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'

interface Repository {
    id: number
    name: string
    description: string
    html_url: string
    language: string
    pushed_at: string
}

function RepositoryCard({ repo }: { repo: Repository }) {
    return (
        <motion.div
        variants={itemVariants}
        className="group w-full"
        >
        <Card className="flex flex-col h-full transition-transform duration-300 group-hover:scale-105 border-primary/20">
            <CardHeader className="space-y-2">
            <CardTitle className="text-xl font-bold truncate text-foreground">{repo.name}</CardTitle>
            <CardDescription className="text-sm text-subtitle line-clamp-2">
                {repo.description || 'No description available'}
            </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
            <div className="flex items-center space-x-2 mb-4">
                {repo.language && (
                <Badge className="text-xs font-medium text-background">
                    {repo.language}
                </Badge>
                )}
                <span className="text-xs text-subtitle">
                Updated: {new Date(repo.pushed_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
            </div>
            <Button
                className="bg-muted text-foreground hover:text-foreground hover:bg-muted"
                size="sm"
                asChild
            >
                <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <FaGithub className="w-4 h-4 mr-2" />
                View on GitHub
                </a>
            </Button>
            </CardContent>
        </Card>
        </motion.div>
    )
    }

  export default RepositoryCard