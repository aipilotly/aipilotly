'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-gradient"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Transforming Ideas into
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            We build AI-driven apps, automation tools, and machine learning models that empower businesses to scale smarter and faster
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://wa.me/919035712688?text=Hi%20Aipilotly!%20I%27ve%20got%20an%20idea/project%20—%20let%27s%20talk%3F"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(2, 52, 170, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#0234aa] to-cyan-500 rounded-full text-white font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all duration-300 inline-block"
            >
              Let's Talk About Your Idea
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Our Services
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <ArrowDown className="w-8 h-8 text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

