'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
  company: string
  location: string
}

export default function WhyChooseUs() {
  const features = [
    '10+ Years of Hands-On Development Experience',
    'End-to-End AI Project Support (from idea to deployment)',
    'Scalable Tech Stack (Python, TensorFlow, React, Node.js, AWS, etc.)',
    'Transparent Communication & Timely Delivery',
  ]

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Partnering with Raj's team was a game-changer for us. Their AI-based automation reduced our manual workload by 70%. The best part — they understood our vision and built exactly what we needed!",
      author: 'Ethan Collins',
      title: 'Tech Startup Founder',
      company: 'DataNest AI',
      location: 'California, USA',
    },
    {
      id: 2,
      quote: 'We were struggling with sales forecasting until this team built a custom ML model. Within two months, our accuracy improved dramatically, helping us plan inventory efficiently. Highly recommended!',
      author: 'Sarah Mitchell',
      title: 'E-Commerce Business Owner',
      company: 'StyleHub London',
      location: 'UK',
    },
    {
      id: 3,
      quote: 'Their simulation app for courtroom scenarios transformed how students and advocates learn legal proceedings. True innovators at work!',
      author: 'Adv. Karan Mehta',
      title: 'LawTech Founder',
      company: 'LawSim India',
      location: 'India',
    },
    {
      id: 4,
      quote: "Raj's expertise in data engineering and predictive modeling gave us a robust AI engine for patient outcome prediction. Their commitment to quality is unmatched.",
      author: 'Dr. Mia Thompson',
      title: 'Healthcare Analytics Startup',
      company: 'HealthPredict Inc.',
      location: 'USA',
    },
    {
      id: 5,
      quote: 'From prototype to production, they handled our full AI lifecycle. The integration was seamless, and performance exceeded expectations. Real professionals!',
      author: 'Daniel Wu',
      title: 'SaaS Product Founder',
      company: 'TaskIQ Solutions',
      location: 'Canada',
    },
    {
      id: 6,
      quote: 'They automated our property valuation system using computer vision and ML. Now, property assessments that took hours happen in seconds!',
      author: 'Rebecca Clarke',
      title: 'Real Estate Automation Firm',
      company: 'PropVision Analytics',
      location: 'UK',
    },
    {
      id: 7,
      quote: "I had zero tech background. Raj's team not only developed my business app but also guided me on scaling and digital marketing. They truly care about client success.",
      author: 'Ravi Kumar',
      title: 'Small Business Owner',
      company: 'GreenMart Supplies',
      location: 'India',
    },
    {
      id: 8,
      quote: 'Their AI models for fraud detection saved us countless hours of manual review. Exceptional accuracy and lightning-fast delivery!',
      author: 'Anjali Rao',
      title: 'FinTech Startup',
      company: 'FinSecure Asia',
      location: 'Singapore',
    },
    {
      id: 9,
      quote: 'They developed an intelligent recommendation system for our e-learning platform. Our user engagement jumped by 40% in the first quarter!',
      author: 'Jessica Rivera',
      title: 'Education Platform',
      company: 'Learnify Inc.',
      location: 'USA',
    },
    {
      id: 10,
      quote: 'We collaborated on multiple automation projects. Every time, they delivered high-quality code and AI solutions that delighted our clients. Absolute reliability!',
      author: 'Tom Edwards',
      title: 'Digital Agency',
      company: 'Nova Digital',
      location: 'Australia',
    },
    {
      id: 11,
      quote: 'Working with Raj on AI and backend integration projects was smooth and educational. His clarity and technical depth make him one of the best in the industry.',
      author: 'Lena Bauer',
      title: 'Freelancer Collaboration',
      company: 'Independent Data Scientist',
      location: 'Germany',
    },
    {
      id: 12,
      quote: 'They built a multilingual chatbot for our customer service — cutting response times by 60%. A great blend of innovation and practicality.',
      author: 'Ahmed Al-Zayed',
      title: 'Enterprise Client',
      company: 'GulfTrade Group',
      location: 'UAE',
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1)
    setCurrentTestimonial(index)
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentTestimonial])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section id="why-choose-us" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#0234aa] via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
        </motion.div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <CheckCircle className="w-6 h-6 text-[#0234aa] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            What Our Clients Say
          </h3>

          <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-4 left-4 w-16 h-16 text-[#0234aa]/10" />
            
            <div className="relative z-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="text-center"
                >
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center">
                    <div className="font-bold text-[#0234aa] text-lg mb-1">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-600 text-sm mb-1">
                      {testimonials[currentTestimonial].title}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-[#0234aa]" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-[#0234aa]" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-[#0234aa] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

