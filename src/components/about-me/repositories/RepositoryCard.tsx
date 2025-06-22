import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/anims'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

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
        <Card className="flex flex-col h-full">
            <CardHeader>
            <CardTitle>{repo.name}</CardTitle>
            <CardDescription>
                {repo.description || 'No description available'}
            </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-end h-full items-start">
                <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-full"
                >
                    <Link
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <FaGithub className="w-4 h-4 mr-2" />
                        View on GitHub
                    </Link>
                </Button>
            </CardContent>
        </Card>
        </motion.div>
    )
    }

  export default RepositoryCard