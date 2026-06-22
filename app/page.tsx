'use client';

import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-bold text-xl tracking-tight">AGL.</div>
        <div className="flex items-center space-x-4 md:space-x-6 text-sm md:text-base">
          <a href="#projects" className="hover:text-blue-600 transition font-medium">Engineering</a>
          <a href="#content" className="hover:text-blue-600 transition font-medium">Content</a>
          <a href="mailto:your.email@example.com" className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition text-xs md:text-sm font-medium">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side Copy */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            I build <span className="text-blue-600">software</span>, engineer data, and grow audiences.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Hi, I'm Andrew Graff Leota. I'm a full-stack developer and data engineer based in Wellington, NZ. 
            When I'm not writing production code or building automation pipelines, I create fitness content for thousands of people across my digital channels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg text-center">
              View My Work
            </a>
            <a href="https://youtube.com/@andrewgraffleota" target="_blank" rel="noreferrer" className="bg-white border-2 border-gray-200 text-gray-800 px-8 py-3 rounded-full font-medium hover:border-gray-300 transition text-center">
              Watch on YouTube
            </a>
          </div>
        </div>

        {/* Right Side Image Placeholder */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-1/3 md:h-auto aspect-square relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200">
          <img 
            src="/aglside.png" 
            alt="Andrew Graff Leota Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Engineering Projects Section */}
      <section id="projects" className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Software & Data Engineering</h2>
          <p className="text-gray-600 mb-12 max-w-2xl text-sm md:text-base">
            Recent work from my time at Do AI Limited, contributing to five live client products across the full stack[cite: 1].
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl md:text-2xl font-bold mb-3">VillageCo</h3>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                Designed the core authentication backend and sitter onboarding APIs[cite: 1]. Solved production infrastructure challenges using Azure VNet and built a hybrid LLM + SQL matching architecture[cite: 1].
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">PostgreSQL</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Azure</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Python</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Axis Data</h3>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                Engineered a Snowflake data warehouse and dbt models processing 174,000+ referral records[cite: 1]. Developed executive-facing Streamlit dashboards for sports medicine analytics[cite: 1].
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Snowflake</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">dbt</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Streamlit</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Easy Read (Volition)</h3>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                Full-stack feature delivery including automated Playwright tests, a Stripe-integrated payment flow, and global UI accessibility improvements[cite: 1].
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">React</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">Stripe</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-md transition">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Flourish & Academy</h3>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                Delivered 7 major API implementations in a week for a nursery SaaS[cite: 1]. Built 16 production AI & automation course modules using n8n and LLM integrations[cite: 1].
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">REST APIs</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">n8n</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">LLMs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creator Section with Native Touch-Swipe Embedded Videos */}
      <section id="content" className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">@andrewgraffleota</h2>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
              Swipe or scroll to watch my content directly. I use video platforms to communicate training frameworks and build an active digital community.
            </p>
          </div>

          {/* Touch-Friendly Swipe Carousel */}
          {/* Note: Replace the standard Youtube video IDs (dQw4w9WgXcQ) with your specific video or short IDs */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            
            {/* Video Slide 1: YouTube Landscape */}
            <div className="w-[85vw] sm:w-[60vw] md:w-[45%] shrink-0 snap-center">
              <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700 shadow-xl">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">YouTube Deep Dive</span>
                  <h4 className="text-base font-bold mt-1 text-gray-100 line-clamp-1">Training Architecture & Mechanics</h4>
                </div>
              </div>
            </div>

            {/* Video Slide 2: TikTok / Vertical Short */}
            <div className="w-[85vw] sm:w-[45vw] md:w-[30%] shrink-0 snap-center">
              <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700 shadow-xl">
                {/* Custom aspect ratio optimized for vertical video elements */}
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Swap with a short URL ID or your specific TikTok/Reel iframe embed code
                    title="Vertical Content Embed"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-400">TikTok Short-Form</span>
                  <h4 className="text-base font-bold mt-1 text-gray-100 line-clamp-1">Daily Programming Workflow</h4>
                </div>
              </div>
            </div>

            {/* Video Slide 3: YouTube Landscape #2 */}
            <div className="w-[85vw] sm:w-[60vw] md:w-[45%] shrink-0 snap-center">
              <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700 shadow-xl">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">YouTube Analysis</span>
                  <h4 className="text-base font-bold mt-1 text-gray-100 line-clamp-1">Form Check & Biomechanics</h4>
                </div>
              </div>
            </div>

            {/* Video Slide 4: Instagram / Vertical Short #2 */}
            <div className="w-[85vw] sm:w-[45vw] md:w-[30%] shrink-0 snap-center">
              <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700 shadow-xl">
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Vertical Content Embed"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Instagram Reel</span>
                  <h4 className="text-base font-bold mt-1 text-gray-100 line-clamp-1">Consistency vs Intensity Debate</h4>
                </div>
              </div>
            </div>

          </div>
          
          {/* Visual Mobile Swipe Prompt */}
          <p className="text-center text-xs text-gray-500 mt-2 md:hidden">
            ← Swipe left/right to browse videos →
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 text-center text-sm">
        <p>© {new Date().getFullYear()} Andrew Graff Leota. Built with Next.js and Tailwind.</p>
      </footer>
    </div>
  );
}