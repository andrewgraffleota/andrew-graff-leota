import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-bold text-xl tracking-tight">AGL.</div>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Engineering</a>
          <a href="#content" className="hover:text-blue-600 transition">Content</a>
          <a href="mailto:your.email@example.com" className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">Get in touch</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/3">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            I build <span className="text-blue-600">software</span>, engineer data, and grow audiences.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Hi, I'm Andrew Graff Leota. I'm a full-stack developer and data engineer based in Wellington, NZ. 
            When I'm not writing production code or building automation pipelines, I create fitness content for thousands of people.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg">
              View My Work
            </a>
            <a href="https://youtube.com/@andrewgraffleota" target="_blank" rel="noreferrer" className="bg-white border-2 border-gray-200 text-gray-800 px-8 py-3 rounded-full font-medium hover:border-gray-300 transition">
              Watch on YouTube
            </a>
          </div>
        </div>
      </header>

      {/* Engineering Projects Section */}
      <section id="projects" className="bg-white py-24 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">Software & Data Engineering</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Recent work from my time at Do AI Limited, contributing to five live client products across the full stack.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold mb-3">VillageCo</h3>
              <p className="text-gray-600 mb-6">
                Designed the core authentication backend and sitter onboarding APIs. Solved production infrastructure challenges using Azure VNet and built a hybrid LLM + SQL matching architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">PostgreSQL</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Azure</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Python</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold mb-3">Axis Data</h3>
              <p className="text-gray-600 mb-6">
                Engineered a Snowflake data warehouse and dbt models processing 174,000+ referral records. Developed executive-facing Streamlit dashboards for sports medicine analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Snowflake</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">dbt</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Streamlit</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold mb-3">Easy Read (Volition)</h3>
              <p className="text-gray-600 mb-6">
                Full-stack feature delivery including automated Playwright tests, a Stripe-integrated payment flow, and global UI accessibility improvements.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">React</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">Stripe</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold mb-3">Flourish & Academy</h3>
              <p className="text-gray-600 mb-6">
                Delivered 7 major API implementations in a week for a nursery SaaS. Built 16 production AI & automation course modules using n8n and LLM integrations.
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

      {/* Content Creator Section */}
      <section id="content" className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">@andrewgraffleota</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            I don't just write code—I build communities. My fitness content across YouTube, TikTok, and Instagram is an ongoing masterclass in audience engagement, visual storytelling, and platform algorithms.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://youtube.com/@andrewgraffleota" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
              <span className="text-lg font-semibold underline decoration-2 underline-offset-4">YouTube</span>
            </a>
            <a href="https://tiktok.com/@andrewgraffleota" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
              <span className="text-lg font-semibold underline decoration-2 underline-offset-4">TikTok</span>
            </a>
            <a href="https://instagram.com/andrewgraffleota" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
              <span className="text-lg font-semibold underline decoration-2 underline-offset-4">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 text-center">
        <p>© {new Date().getFullYear()} Andrew Graff Leota. Built with Next.js and Tailwind.</p>
      </footer>
    </div>
  );
}