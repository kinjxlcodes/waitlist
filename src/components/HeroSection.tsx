'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log('Email submitted:', email)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
      setEmail('')
    }
  }

  return (
    <div className="relative h-screen lg:h-screen flex flex-col pt-20 sm:pt-24 pb-20 overflow-y-auto lg:overflow-hidden">
      <div className="relative z-10 w-full flex-1 lg:flex-1 flex flex-col">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Do you want to take
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 dark:from-blue-400 dark:to-orange-400">
              better decisions?
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-white mb-6 max-w-2xl mx-auto">
            Experience the world&apos;s first AI-powered decision intelligence platform. Join our exclusive waitlist for early access.
          </p>
          
          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/30 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-white focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 dark:from-blue-500 dark:to-orange-500 text-white font-semibold hover:from-blue-600 hover:to-orange-600 dark:hover:from-blue-600 dark:hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-white transition-all duration-300 transform hover:scale-105"
              >
                Join Waitlist
              </button>
            </div>
            
            {isSubmitted && (
              <p className="mt-4 text-green-600 dark:text-white animate-fade-in text-center">
                Thank you! We&apos;ll notify you when we launch.
              </p>
            )}
          </form>
        </div>

        {/* Border after subtitle - full screen width */}
        <div className="relative w-full h-px bg-gray-300 dark:bg-white/40 z-10 mb-8">
          {/* Vertical Divider - Only visible on large screens, connects directly to horizontal border */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-px bg-gray-300 dark:bg-white/40 -translate-x-1/2" style={{ height: '50vh' }}></div>
        </div>

        {/* Mobile Content Section - Visible only on mobile/tablet */}
        <div className="lg:hidden px-8 py-6 max-w-2xl mx-auto">
          <div className="space-y-4">
            {/* Main Message */}
            <div className="space-y-2 text-center">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                Stop Asking ChatGPT About Your Decisions.
              </h2>
              <p className="text-sm text-gray-700 dark:text-white/90">
                Start Asking MyDecisions — Built <span className="text-orange-500">Only</span> for Decisions.
              </p>
              <p className="text-xs text-gray-600 dark:text-white/70">
                Not chats. Not content. Just smarter choices.
              </p>
            </div>

            {/* Revolution Section */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white text-center">
                Transform in 3 Months
              </h3>
              <ul className="space-y-1 text-xs text-gray-600 dark:text-white/80">
                <li className="flex items-center justify-center">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Never-before-seen AI decision frameworks</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Visual decision trees & trade-off maps</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Your personal decision lab</span>
                </li>
              </ul>
            </div>

            {/* Community Section with Button */}
            <div className="flex flex-col items-center space-y-3">
              <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                  Join 500+ Decision Makers
                </h3>
                <p className="text-xs text-gray-600 dark:text-white/80">
                  Get AI insights • Earn karma • Early access
                </p>
              </div>
              
              <button className="group relative px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 text-white font-medium text-sm hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-500 dark:hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Join Community</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </button>
            </div>

            {/* Final CTA */}
            <div className="border-t border-gray-200 dark:border-white/20 pt-3 text-center">
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                We Amplify Your Intelligence.
                <span className="text-xs text-gray-600 dark:text-white/70 block">Not replace it.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch w-full h-full">
            {/* Left Section - Content (Hidden on desktop, shown on mobile below) */}
            <div className="hidden lg:flex px-8 py-6 overflow-hidden">
              <div className="flex-1 space-y-5 pr-4">
                {/* Main Message */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    Stop Asking ChatGPT About Your Decisions.
                  </h2>
                  <p className="text-base text-gray-700 dark:text-white/90">
                    Start Asking MyDecisions — Built <span className="text-orange-500">Only</span> for Decisions.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-white/70">
                    Not chats. Not content. Just smarter choices.
                  </p>
                </div>

                {/* Revolution Section */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                    Transform in 3 Months
                  </h3>
                  <ul className="space-y-1 text-xs text-gray-600 dark:text-white/80">
                    <li className="flex items-center">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Never-before-seen AI decision frameworks</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Visual decision trees & trade-off maps</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Your personal decision lab</span>
                    </li>
                  </ul>
                </div>

                {/* Community Teaser */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                    Join 500+ Decision Makers
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-white/80">
                    Get AI insights • Earn karma • Early access
                  </p>
                </div>

                {/* Final CTA */}
                <div className="border-t border-gray-200 dark:border-white/20 pt-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    We Amplify Your Intelligence.<br />
                    <span className="text-xs text-gray-600 dark:text-white/70">Not replace it.</span>
                  </p>
                </div>
              </div>
              
              {/* Community Button on Right */}
              <div className="flex items-center justify-center pl-4">
                <button className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 text-white font-medium text-sm hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-500 dark:hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="relative z-10">Join Community</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </button>
              </div>
            </div>


            {/* Right Section - Mac SVG Display */}
            <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
              <Image 
                src="/mac.png" 
                alt="MyDecisions on Mac" 
                fill
                className="object-cover lg:object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Bottom border - full screen width at the very bottom */}
        <div className="w-full h-px bg-gray-300 dark:bg-white/40"></div>
      </div>
    </div>
  )
}