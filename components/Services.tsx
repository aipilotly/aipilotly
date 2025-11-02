'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Zap, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning Development',
      items: [
        'Custom AI model design and training',
        'Predictive analytics and data modeling',
        'Chatbot and NLP solutions',
        'Computer vision applications',
        'AI workflow automation',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Web & App Development',
      items: [
        'Full-stack website and mobile app development',
        'Scalable backend APIs',
        'Cloud deployment and DevOps integration',
        'UI/UX Design',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Automation & Data Intelligence',
      items: [
        'Process automation for businesses',
        'Data cleaning, visualization & dashboards',
        'CRM & ERP integrations',
      ],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Lightbulb,
      title: 'Consulting & Strategy',
      items: [
        'AI transformation roadmap',
        'Feasibility analysis for AI adoption',
        'MVP development for startups',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
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
              Services
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-xl text-white`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

