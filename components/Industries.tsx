'use client'

import { motion } from 'framer-motion'

export default function Industries() {
  const industries = [
    'Legal Tech',
    'Healthcare',
    'Finance',
    'E-commerce',
    'Education',
    'Real Estate',
    'SaaS & Automation Startups',
  ]

  return (
    <section id="industries" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#0234aa] via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver customized AI and software solutions across sectors like:
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <span className="text-gray-900 font-semibold">{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

