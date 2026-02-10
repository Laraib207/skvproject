'use client'

import { motion } from 'framer-motion'

export default function MediaKit() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0b0b0b] to-black text-white pt-24 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Media <span className="text-[#facc15]">Kit</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 border border-gray-700 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Audience</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Instagram: 10K+ followers</li>
              <li>YouTube: 142K+ subscribers</li>
              <li>Snapchat: Active community</li>
              <li>Facebook: Growing presence</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-700 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Demographics</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Age: 18-34 majority</li>
              <li>Gender: Mixed audience</li>
              <li>Location: [Your Region]</li>
              <li>Interests: Lifestyle, Tech, Travel</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-700 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Engagement</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Avg. Instagram engagement: 5%+</li>
              <li>YouTube watch time: High retention</li>
              <li>Story views: Consistent daily reach</li>
              <li>Comment section: Active community</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-700 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Content Types</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Vlogs & daily content</li>
              <li>Product reviews</li>
              <li>Lifestyle & fashion</li>
              <li>Tech & gadget unboxings</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#facc15] text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Download Full Media Kit
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

