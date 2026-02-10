// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { FaInstagram, FaYoutube, FaSnapchatGhost, FaFacebookF } from 'react-icons/fa'

// export default function Home() {
//   return (
//     <main className="bg-black text-white overflow-hidden">

//       {/* ================= HERO ================= */}
//       <section className="relative min-h-screen flex items-center px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
//               Welcome to
//             </p>

//             <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//               Shoaib<span className="text-yellow-400">K</span> Vlog
//             </h1>

//             <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl">
//               Influencer • Content Creator • Brand Promoter  
//               Helping brands grow through authentic digital storytelling.
//             </p>

//             {/* STATS */}
//             <div className="flex gap-8 mt-10">
//               <Stat number="10K+" label="Instagram Followers" />
//               <Stat number="142K+" label="YouTube Subscribers" />
//               <Stat number="Millions+" label="Monthly Reach" />
//             </div>

//             {/* CTA */}
//             <div className="mt-12 flex gap-4 flex-wrap">
//               <a
//                 href="/contact"
//                 className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition"
//               >
//                 Work With Me
//               </a>
//               <a
//                 href="/media-kit"
//                 className="px-8 py-3 rounded-full border border-gray-600 hover:border-white transition"
//               >
//                 View Media Kit
//               </a>
//             </div>
//           </motion.div>

//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative w-full h-[520px] rounded-2xl overflow-hidden"
//           >
//             <Image
//               src="/images/home/hero.jpg"
//               alt="ShoaibK Vlog"
//               fill
//               className="object-cover"
//               priority
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= SOCIAL PROOF ================= */}
//       <section className="py-24 px-6">
//         <div className="max-w-7xl mx-auto text-center">

//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Trusted by <span className="text-yellow-400">Thousands</span>
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto mb-16">
//             I collaborate with brands to create high-impact content across
//             Instagram, YouTube, and social platforms.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             <ProofCard
//               img="/images/home/insta.jpg"
//               title="Instagram Influence"
//               desc="High-engagement reels, stories, and brand promotions with loyal followers."
//             />
//             <ProofCard
//               img="/images/home/youtube.jpg"
//               title="YouTube Authority"
//               desc="Long-form videos with massive reach, strong watch-time, and trust."
//             />
//             <ProofCard
//               img="/images/home/lifestyle.jpg"
//               title="Lifestyle Branding"
//               desc="Premium visuals that connect emotionally and convert audiences."
//             />
//           </div>
//         </div>
//       </section>

//       {/* ================= SOCIAL LINKS ================= */}
//       <section className="pb-20">
//         <div className="flex justify-center gap-6">
//           <Social href="https://www.instagram.com/shoaib__ashrafi_" icon={<FaInstagram />} />
//           <Social href="https://www.youtube.com/channel/UCSoqUWi-iSJ5uhToAU2OakQ" icon={<FaYoutube />} />
//           <Social href="https://snapchat.com/t/imyeMlGt" icon={<FaSnapchatGhost />} />
//           <Social href="https://www.facebook.com/share/17xKExp9XG/" icon={<FaFacebookF />} />
//         </div>
//       </section>

//     </main>
//   )
// }

// /* ================= COMPONENTS ================= */

// function Stat({ number, label }) {
//   return (
//     <div>
//       <p className="text-3xl font-bold text-white">{number}</p>
//       <p className="text-sm text-gray-400 mt-1">{label}</p>
//     </div>
//   )
// }

// function Social({ href, icon }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 text-xl hover:border-yellow-400 hover:text-yellow-400 transition"
//     >
//       {icon}
//     </a>
//   )
// }

// function ProofCard({ img, title, desc }) {
//   return (
//     <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400 transition">
//       <div className="relative h-60">
//         <Image src={img} alt={title} fill className="object-cover" />
//       </div>
//       <div className="p-6 text-left">
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-400 text-sm">{desc}</p>
//       </div>
//     </div>
//   )
// }






'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaInstagram, FaYoutube, FaSnapchatGhost, FaFacebookF, FaPlay, FaStar } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 })

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setDarkMode(savedTheme !== 'light')
    
    // Set window dimensions after mount
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  // Generate particles only after dimensions are set
  const particles = [...Array(20)].map((_, i) => ({
    id: i,
    initialX: Math.random() * dimensions.width,
    initialY: Math.random() * dimensions.height
  }))

  return (
    <main className={`overflow-hidden transition-all duration-500 ${
      darkMode ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>

      {/* ================= FLOATING PARTICLES ================= */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-yellow-400/20' : 'bg-yellow-500/30'}`}
            initial={{ 
              x: particle.initialX, 
              y: particle.initialY 
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-6 pt-24">
        {/* GRADIENT OVERLAY */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-r from-yellow-400/10 via-transparent to-purple-500/10' 
            : 'bg-gradient-to-r from-yellow-200/30 via-transparent to-purple-200/30'
        }`} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p 
              className={`text-sm tracking-[0.3em] uppercase mb-4 flex items-center gap-2 ${
                darkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-12 h-[2px] bg-yellow-400"></span>
              Welcome to Excellence
            </motion.p>

            <motion.h1 
              className="text-6xl md:text-8xl font-black leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Shoaib<span className={darkMode ? 'text-yellow-400' : 'text-yellow-500'}>K</span>
              <br />
              <span className={`text-transparent bg-clip-text ${
                darkMode 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                  : 'bg-gradient-to-r from-yellow-500 to-orange-600'
              }`}>
                Vlog
              </span>
            </motion.h1>

            <motion.p 
              className={`text-lg md:text-xl max-w-xl leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="font-semibold">Influencer • Content Creator • Brand Promoter</span>
              <br />
              Crafting authentic digital stories that inspire millions and elevate brands to new heights.
            </motion.p>

            {/* STATS */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Stat number="10K+" label="Instagram" icon={<FaInstagram />} darkMode={darkMode} />
              <Stat number="142K+" label="YouTube" icon={<FaYoutube />} darkMode={darkMode} />
              <Stat number="5M+" label="Monthly Reach" icon={<FaStar />} darkMode={darkMode} />
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a
                href="/contact"
                className={`group px-10 py-4 rounded-full font-bold text-black relative overflow-hidden transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]' 
                    : 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]'
                }`}
              >
                <span className="relative z-10">Let's Collaborate</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
              
              <a
                href="/media-kit"
                className={`px-10 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${
                  darkMode 
                    ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' 
                    : 'border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'
                }`}
              >
                Media Kit
              </a>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* DECORATIVE ELEMENTS */}
            <div className={`absolute -top-6 -right-6 w-72 h-72 rounded-full blur-3xl opacity-30 ${
              darkMode ? 'bg-yellow-400' : 'bg-yellow-500'
            }`} />
            <div className={`absolute -bottom-6 -left-6 w-72 h-72 rounded-full blur-3xl opacity-20 ${
              darkMode ? 'bg-purple-500' : 'bg-purple-400'
            }`} />
            
            <div className={`relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 ${
              darkMode ? 'border-yellow-400/30' : 'border-yellow-500/40'
            }`}>
              <Image
                src="/images/home/hero.jpg"
                alt="ShoaibK Vlog"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                priority
              />
              
              {/* PLAY BUTTON OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg hover:shadow-yellow-400/50 transition"
                >
                  <FaPlay className="text-black text-xl ml-1" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="py-32 px-6 relative">
        {/* BACKGROUND PATTERN */}
        <div className={`absolute inset-0 opacity-5 ${darkMode ? 'bg-white' : 'bg-black'}`} 
             style={{backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Trusted by <span className={darkMode ? 'text-yellow-400' : 'text-yellow-600'}>Thousands</span>
            </h2>

            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Creating powerful partnerships with brands through authentic storytelling
              and genuine connections across all major platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProofCard
              img="/images/home/insta.jpg"
              title="Instagram Mastery"
              desc="High-engagement reels, stories, and brand promotions with a loyal, active community."
              darkMode={darkMode}
              delay={0.2}
            />
            <ProofCard
              img="/images/home/youtube.jpg"
              title="YouTube Authority"
              desc="Long-form content with massive reach, exceptional watch-time, and authentic trust."
              darkMode={darkMode}
              delay={0.4}
            />
            <ProofCard
              img="/images/home/lifestyle.jpg"
              title="Lifestyle Excellence"
              desc="Premium visuals and storytelling that create emotional connections and drive conversions."
              darkMode={darkMode}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* ================= SOCIAL LINKS ================= */}
      <section className="pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's Connect
          </h3>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            Follow me on social media for daily inspiration
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 flex-wrap">
          <Social href="https://www.instagram.com/shoaib__ashrafi_" icon={<FaInstagram />} label="Instagram" darkMode={darkMode} />
          <Social href="https://www.youtube.com/channel/UCSoqUWi-iSJ5uhToAU2OakQ" icon={<FaYoutube />} label="YouTube" darkMode={darkMode} />
          <Social href="https://snapchat.com/t/imyeMlGt" icon={<FaSnapchatGhost />} label="Snapchat" darkMode={darkMode} />
          <Social href="https://www.facebook.com/share/17xKExp9XG/" icon={<FaFacebookF />} label="Facebook" darkMode={darkMode} />
        </div>
      </section>

    </main>
  )
}

/* ================= COMPONENTS ================= */

function Stat({ number, label, icon, darkMode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className={`text-center p-4 rounded-2xl backdrop-blur-sm transition-all ${
        darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-900/5 hover:bg-gray-900/10'
      }`}
    >
      <div className={`text-3xl mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
        {icon}
      </div>
      <p className="text-3xl font-black mb-1">{number}</p>
      <p className={`text-xs uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {label}
      </p>
    </motion.div>
  )
}

function Social({ href, icon, label, darkMode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative w-16 h-16 flex items-center justify-center rounded-2xl text-2xl transition-all duration-300 ${
        darkMode 
          ? 'bg-white/5 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400/10 text-white hover:text-yellow-400' 
          : 'bg-gray-900/5 border border-gray-300 hover:border-yellow-600 hover:bg-yellow-600/10 text-gray-900 hover:text-yellow-600'
      }`}
    >
      {icon}
      <span className={`absolute -bottom-8 text-xs opacity-0 group-hover:opacity-100 transition-opacity ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {label}
      </span>
    </motion.a>
  )
}

function ProofCard({ img, title, desc, darkMode, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className={`group rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
        darkMode 
          ? 'bg-white/5 border-white/10 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)]' 
          : 'bg-white border-gray-200 hover:border-yellow-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]'
      }`}
    >
      <div className="relative h-72 overflow-hidden">
        <Image 
          src={img} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>
      
      <div className="p-8">
        <h3 className={`text-2xl font-bold mb-3 ${
          darkMode ? 'text-white group-hover:text-yellow-400' : 'text-gray-900 group-hover:text-yellow-600'
        } transition-colors`}>
          {title}
        </h3>
        <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {desc}
        </p>
      </div>
    </motion.div>
  )
}