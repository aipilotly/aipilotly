'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Globe } from 'lucide-react'

export default function ContactUs() {
  return (
    <section id="contact-us" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 mt-4">
            Let's build something intelligent together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20"
        >
          <div className="space-y-6">
            <motion.a
              href="mailto:ashokverse1605@gmail.com"
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-lg md:text-xl">ashokverse1605@gmail.com</span>
            </motion.a>

            <motion.a
              href="tel:+919035712688"
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-lg md:text-xl">+91-9035712688</span>
            </motion.a>

            <motion.a
              href="https://aipilotly.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-lg md:text-xl">aipilotly.com</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

