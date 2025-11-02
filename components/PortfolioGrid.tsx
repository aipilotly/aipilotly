'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import PortfolioCard from './PortfolioCard'

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Portfolios
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((portfolio, index) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PortfolioCard portfolio={portfolio} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

