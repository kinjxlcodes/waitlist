'use client'

import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-1 px-4 py-0.5 sm:px-5 sm:py-1 md:px-6 md:py-1 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-lg ${className}`}>
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
        <Image
          src="/orange_leaf.png"
          alt="MyDecisions Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white font-raleway">
        MyDecisions
      </span>
    </div>
  )
}