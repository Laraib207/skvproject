'use client'

import { motion } from 'framer-motion'

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0b0b0b] to-black text-white pt-24 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          My <span className="text-[#facc15]">Services</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="p-8 border border-gray-700 rounded-2xl hover:border-[#facc15] transition">
            <h3 className="text-2xl font-bold mb-4">Brand Collaborations</h3>
            <p className="text-gray-400">
              Authentic brand partnerships that resonate with my audience and drive real results.
            </p>
          </div>

          <div className="p-8 border border-gray-700 rounded-2xl hover:border-[#facc15] transition">
            <h3 className="text-2xl font-bold mb-4">Sponsored Content</h3>
            <p className="text-gray-400">
              Engaging sponsored posts and stories that feel natural and connect with viewers.
            </p>
          </div>

          <div className="p-8 border border-gray-700 rounded-2xl hover:border-[#facc15] transition">
            <h3 className="text-2xl font-bold mb-4">YouTube Integration</h3>
            <p className="text-gray-400">
              Dedicated video segments and integrations that showcase your brand to my subscriber base.
            </p>
          </div>

          <div className="p-8 border border-gray-700 rounded-2xl hover:border-[#facc15] transition">
            <h3 className="text-2xl font-bold mb-4">Event Coverage</h3>
            <p className="text-gray-400">
              On-site content creation and live coverage for events, launches, and experiences.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#facc15] text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Get a Quote
          </a>
        </div>

        <a
          href="/"
          className="block mt-10 text-center text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </a>
      </motion.div>
    </main>
  )
}

