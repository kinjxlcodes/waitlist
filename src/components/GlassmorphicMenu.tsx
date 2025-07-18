'use client'

import React, { useState, useEffect } from 'react'

interface MenuItem {
  id: string
  icon: React.ReactNode
  label: string
  action?: () => void
}

export default function GlassmorphicMenu() {
  const [activeItem, setActiveItem] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      document.documentElement.style.colorScheme = 'light'
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 'theme',
      label: isDarkMode ? 'Light Mode' : 'Dark Mode',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isDarkMode ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          )}
        </svg>
      ),
      action: toggleTheme,
    },
    {
      id: 'waitlist',
      label: 'Join Waitlist',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'community',
      label: 'Join Community',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6">
      <div className="flex justify-center">
        <div className="bg-gray-800/30 dark:bg-black/40 backdrop-blur-xl rounded-full p-1.5 border border-white/10 dark:border-cyan-500/20 shadow-2xl">
          <div className="flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item.id)
                  if (item.action) {
                    item.action()
                  }
                }}
                className={`relative rounded-full transition-all duration-300 ${
                  activeItem === item.id
                    ? 'w-14 h-14 bg-gray-100 dark:bg-cyan-400 text-gray-900 shadow-lg'
                    : 'w-14 h-14 text-gray-600 dark:text-white/70 hover:text-gray-800 dark:hover:text-white'
                }`}
                aria-label={item.label}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.icon}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="h-1 w-32 bg-gray-400/50 dark:bg-cyan-400/50 rounded-full mx-auto mt-4" />
    </div>
  )
}