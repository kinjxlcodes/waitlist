'use client'

import React from 'react'
import Image from 'next/image'

export default function HeroContent() {
  return (
    <div className="relative min-h-screen lg:h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 md:pt-12 py-12 pb-32 lg:py-0 lg:pb-0">
      {/* Top Right Decoration - Desktop Only */}
      <div className="hidden lg:block absolute top-8 right-8 w-64 h-64 opacity-50">
        <Image
          src="/abstract.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Bottom Left Decoration - Desktop Only */}
      <div className="hidden lg:block absolute bottom-8 left-8 w-64 h-64 opacity-50">
        <Image
          src="/abstract.png"
          alt=""
          fill
          className="object-contain transform rotate-180"
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 lg:gap-16 relative">
        {/* Left Section - Main Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-gray-900 dark:text-white">
            <span style={{ 
              fontFamily: '"Funnel Display", sans-serif', 
              fontWeight: 300,
              letterSpacing: '-0.02em',
              WebkitFontSmoothing: 'antialiased'
            }}>
              reshaping how<br />
            </span>
            <span className="inline-block" style={{ fontFamily: '"Tangerine", cursive', fontWeight: 400, fontSize: '1.2em' }}>decisions</span>
            <span style={{ 
              fontFamily: '"Funnel Display", sans-serif', 
              fontWeight: 300,
              letterSpacing: '-0.02em',
              WebkitFontSmoothing: 'antialiased'
            }}> are made</span>
          </h1>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              className="px-8 py-3 rounded-full bg-black dark-orange-button text-white hover:bg-gray-800 dark:hover:bg-red-700 transition-colors duration-300"
              style={{ 
                fontFamily: 'var(--font-ibm-plex-sans)', 
                fontWeight: 200,
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
                fontVariationSettings: '"wdth" 100'
              }}
            >
              Join Waitlist
            </button>
            <button 
              className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white dark-orange hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              style={{ 
                fontFamily: 'var(--font-ibm-plex-sans)', 
                fontWeight: 200,
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
                fontVariationSettings: '"wdth" 100'
              }}
            >
              Join Community
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              className="text-gray-600 dark-orange"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p 
              className="text-lg text-gray-600 dark:text-gray-300"
              style={{ 
                fontFamily: 'var(--font-ibm-plex-sans)', 
                fontWeight: 200,
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
                fontVariationSettings: '"wdth" 100'
              }}
            >
              Beta Launch Mid-August
            </p>
          </div>
        </div>

        {/* Right Section - Description */}
        <div className="lg:pl-12 lg:pt-62">
          <div 
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4"
            style={{ 
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 400
            }}
          >
            <p>
              Tired of asking <span className="font-bold dark-orange" style={{ fontWeight: 700 }}>ChatGPT</span>?
            </p>
            <p>
              <span className="font-bold dark-orange" style={{ fontWeight: 700 }}>MyDecisions</span> is the <em>first AI</em> designed only to{' '}
              <span style={{ fontWeight: 400 }}>help you decide</span> — <em>not decide for you</em>.
            </p>
            <p>
              It <span style={{ fontWeight: 400 }}>sharpens how you think</span>, with{' '}
              <em>science-backed frameworks</em> and <em>clarity-boosting visualizations</em>.
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>Join the waitlist.</span>{' '}
              <em style={{ fontWeight: 300 }}>Upgrade your decision-making for life.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}