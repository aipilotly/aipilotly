'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { Portfolio } from '@/types/portfolio'

interface PortfolioCardProps {
  portfolio: Portfolio
}

export default function PortfolioCard({ portfolio }: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Image overlay with gradient or image */}
      <div className="relative h-64 overflow-hidden">
        {portfolio.imageUrl ? (
          <>
            <Image
              src={portfolio.imageUrl}
              alt={portfolio.title}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 bg-gradient-to-br bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
              style={{
                backgroundImage: `linear-gradient(135deg, ${portfolio.gradientStart}, ${portfolio.gradientEnd})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
          </>
        )}
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
            {portfolio.category}
          </span>
        </div>

        {/* Hover overlay with icons - only show if liveUrl exists */}
        {portfolio.liveUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center z-10"
          >
            <motion.a
              href={portfolio.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-cyan-500 rounded-full hover:bg-cyan-400 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.a>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {portfolio.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {portfolio.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {portfolio.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl" />
      </div>
    </motion.div>
  )
}

