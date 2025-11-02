'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import PortfolioGrid from '@/components/PortfolioGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Industries />
      <PortfolioGrid />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </main>
  )
}

