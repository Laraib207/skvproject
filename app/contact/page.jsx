'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0b0b0b] to-black text-white pt-24 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get in <span className="text-[#facc15]">Touch</span>
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Interested in collaborations, sponsorships, or just want to say hello?
          I&apos;d love to hear from you!
        </p>

        <div className="space-y-6">
          <a
            href="mailto:shoaib@example.com"
            className="block px-8 py-4 bg-[#facc15] text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Email Me
          </a>
          
          <a
            href="https://www.instagram.com/shoaib__ashrafi_"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-8 py-4 border border-gray-600 rounded-full hover:border-white transition"
          >
            DM on Instagram
          </a>
        </div>

        <a
          href="/"
          className="inline-block mt-10 text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </a>
      </motion.div>
    </main>
  )
}

