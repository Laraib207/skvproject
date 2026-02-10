'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaInstagram, FaYoutube, FaSnapchatGhost, FaFacebookF } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
              Welcome to
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Shoaib<span className="text-yellow-400">K</span> Vlog
            </h1>

            <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl">
              Influencer • Content Creator • Brand Promoter  
              Helping brands grow through authentic digital storytelling.
            </p>

            {/* STATS */}
            <div className="flex gap-8 mt-10">
              <Stat number="10K+" label="Instagram Followers" />
              <Stat number="142K+" label="YouTube Subscribers" />
              <Stat number="Millions+" label="Monthly Reach" />
            </div>

            {/* CTA */}
            <div className="mt-12 flex gap-4 flex-wrap">
              <a
                href="/contact"
                className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition"
              >
                Work With Me
              </a>
              <a
                href="/media-kit"
                className="px-8 py-3 rounded-full border border-gray-600 hover:border-white transition"
              >
                View Media Kit
              </a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[520px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/home/hero.jpg"
              alt="ShoaibK Vlog"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by <span className="text-yellow-400">Thousands</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            I collaborate with brands to create high-impact content across
            Instagram, YouTube, and social platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProofCard
              img="/images/home/insta.jpg"
              title="Instagram Influence"
              desc="High-engagement reels, stories, and brand promotions with loyal followers."
            />
            <ProofCard
              img="/images/home/youtube.jpg"
              title="YouTube Authority"
              desc="Long-form videos with massive reach, strong watch-time, and trust."
            />
            <ProofCard
              img="/images/home/lifestyle.jpg"
              title="Lifestyle Branding"
              desc="Premium visuals that connect emotionally and convert audiences."
            />
          </div>
        </div>
      </section>

      {/* ================= SOCIAL LINKS ================= */}
      <section className="pb-20">
        <div className="flex justify-center gap-6">
          <Social href="https://www.instagram.com/shoaib__ashrafi_" icon={<FaInstagram />} />
          <Social href="https://www.youtube.com/channel/UCSoqUWi-iSJ5uhToAU2OakQ" icon={<FaYoutube />} />
          <Social href="https://snapchat.com/t/imyeMlGt" icon={<FaSnapchatGhost />} />
          <Social href="https://www.facebook.com/share/17xKExp9XG/" icon={<FaFacebookF />} />
        </div>
      </section>

    </main>
  )
}

/* ================= COMPONENTS ================= */

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-3xl font-bold text-white">{number}</p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  )
}

function Social({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 text-xl hover:border-yellow-400 hover:text-yellow-400 transition"
    >
      {icon}
    </a>
  )
}

function ProofCard({ img, title, desc }) {
  return (
    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400 transition">
      <div className="relative h-60">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  )
}
