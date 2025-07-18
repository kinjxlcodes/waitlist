'use client'

import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-1 px-4 py-0.5 sm:px-5 sm:py-1 md:px-6 md:py-1 rounded-full glass-water-droplet backdrop-blur-xl backdrop-saturate-150 border border-white/30 dark:border-white/10 hover:scale-[1.02] transition-all duration-300 ${className}`}>
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
        <Image
          src="/orange_leaf.png"
          alt="MyDecisions Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span 
        className="text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-white"
        style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 400 }}
      >
        MyDecisions
      </span>
    </div>
  )
}