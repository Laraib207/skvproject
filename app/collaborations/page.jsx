'use client'

import { motion } from 'framer-motion'

export default function Collaborations() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0b0b0b] to-black text-white pt-24 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Past <span className="text-[#facc15]">Collaborations</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="aspect-square bg-gray-800 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500">Brand 1</span>
          </div>
          <div className="aspect-square bg-gray-800 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500">Brand 2</span>
          </div>
          <div className="aspect-square bg-gray-800 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500">Brand 3</span>
          </div>
          <div className="aspect-square bg-gray-800 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500">Brand 4</span>
          </div>
          <div className="aspect-square bg-gray-800 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500">Brand 5</span>
          </div>
          <div className="aspect-square bg-gray-800 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500">Brand 6</span>
          </div>
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

