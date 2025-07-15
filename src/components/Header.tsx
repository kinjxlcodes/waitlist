'use client'

import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-20">
          <Logo />
        </div>
      </div>
    </header>
  )
}