'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  showSubline?: boolean
  size?: 'sm' | 'md' | 'lg'
  isScrolled?: boolean
}

export default function Logo({ showSubline = false, size = 'md', isScrolled = false }: LogoProps) {
  const sizes = {
    sm: { logo: 32, text: 'text-lg' },
    md: { logo: 48, text: 'text-2xl' },
    lg: { logo: 64, text: 'text-3xl' },
  }

  const currentSize = sizes[size]

  return (
    <div className="flex items-center gap-3">
      {/* Logo Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative flex-shrink-0"
        style={{ width: '300px', height: currentSize.logo }}
      >
        <Image
          src={isScrolled ? '/logo.png' : '/logo-light.png'}
          alt="Aipilotly Logo"
          width={200}
          height={currentSize.logo}
          className="object-contain transition-opacity duration-300"
          priority
          unoptimized
        />
      </motion.div>

      {/* Brand name and subline */}
      {/* <div className="flex flex-col">
        <div className={`font-bold text-white ${currentSize.text}`}>
          Aipilotly
        </div>
        {showSubline && (
          <div className="text-xs text-gray-300 font-normal -mt-1">
            ai. automation. apps
          </div>
        )}
      </div> */}
    </div>
  )
}

