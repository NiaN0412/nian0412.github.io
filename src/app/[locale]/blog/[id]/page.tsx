import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Calendar, Tag, Clock } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { posts } from '@/lib/blog'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

interface BlogPageProps {
  params: {
    locale: string
    id: string
  }
}

export default function BlogPage({ params: { locale, id } }: BlogPageProps) {
  const post = posts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-frost-50 dark:bg-platinum-950">
      <Navbar />
      
      <div className="pt-24 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link 
            href={`/${locale}#blog`}
            className="inline-flex items-center gap-2 text-platinum-500 hover:text-gold-600 transition-colors mb-8 group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>返回列表</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-platinum-400 dark:text-platinum-500 mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-platinum-100 dark:bg-platinum-800 text-platinum-500 dark:text-platinum-400">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-light text-platinum-900 dark:text-platinum-50 text-balance leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-platinum dark:prose-invert max-w-none 
            prose-headings:font-light prose-headings:tracking-tight
            prose-p:text-platinum-600 dark:prose-p:text-platinum-300 prose-p:leading-relaxed
            prose-li:text-platinum-600 dark:prose-li:text-platinum-300
            prose-strong:text-platinum-900 dark:prose-strong:text-platinum-100 prose-strong:font-medium
            prose-hr:border-platinum-200 dark:prose-hr:border-platinum-800">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Footer of article */}
          <footer className="mt-16 pt-8 border-t border-platinum-200 dark:border-platinum-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-600 dark:text-gold-400 text-sm font-medium">
                  q
                </div>
                <div>
                  <p className="text-sm font-medium text-platinum-800 dark:text-platinum-200">嚴郁琇 (q_nnn412)</p>
                  <p className="text-xs text-platinum-500">DLLM 研究員 / 開發者</p>
                </div>
              </div>
            </div>
          </footer>
        </article>
      </div>

      <Footer />
    </main>
  )
}
