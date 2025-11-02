'use client'

import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 px-6 bg-gray-50">
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
              About Us
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-gray-700 leading-relaxed"
        >
          <p className="text-lg">
            At Aipilotly, we're a team of passionate technologists, developers, and innovators dedicated to building intelligent digital solutions. 
we believe technology should not just support business — it should accelerate it.
We specialize in crafting intelligent solutions powered by Artificial Intelligence, Machine Learning, and Automation that help organizations scale efficiently and make smarter decisions.
</p>
          <p className="text-lg">

Our multidisciplinary team combines expertise in software engineering, data science, product design, and business strategy to deliver solutions that are both technically powerful and commercially viable. From conceptualization to deployment, we work closely with our clients to ensure every project aligns with their goals, timelines, and growth vision.
</p>
<p className="text-lg">

Whether it’s building a next-gen AI chatbot, designing a predictive analytics model, or developing a custom web or mobile app, our focus remains the same — to transform complexity into clarity and innovation into impact.          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#0234aa] mb-4">Mission</h3>
            <p className="text-gray-700">
              To help businesses leverage the power of Artificial Intelligence, Machine Learning, and Automation for exponential growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#0234aa] mb-4">Vision</h3>
            <p className="text-gray-700">
              To become a global AI solutions partner known for creativity, reliability, and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

