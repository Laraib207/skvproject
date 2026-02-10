// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const aboutData = [
//   {
//     img: '/images/about/about1.jpg',
//     text: 'Travel moments shape my storytelling style. I believe natural locations, candid emotions, and clean visuals connect deeply with audiences and brands looking for authenticity.'
//   },
//   {
//     img: '/images/about/about2.jpg',
//     text: 'Urban lifestyle content reflects modern creativity. I enjoy capturing city vibes that blend fashion, confidence, and daily inspiration for young audiences.'
//   },
//   {
//     img: '/images/about/about3.jpg',
//     text: 'Creative freedom is my identity. Open spaces, bold frames, and expressive poses help me communicate positive energy and brand-friendly visuals.'
//   },
//   {
//     img: '/images/about/about4.jpg',
//     text: 'My style blends tradition with modern influence. Cultural outfits and classic looks allow brands to connect emotionally with diverse audiences.'
//   },
//   {
//     img: '/images/about/about5.jpg',
//     text: 'Premium indoor aesthetics elevate brand presence. Soft lighting and clean setups help highlight products naturally without forcing promotions.'
//   },
//   {
//     img: '/images/about/about6.jpg',
//     text: 'Public spaces inspire interaction. I focus on storytelling that feels real, relatable, and engaging across social media platforms.'
//   },
//   {
//     img: '/images/about/about7.jpg',
//     text: 'Confidence and personality matter in digital branding. Every pose and expression reflects originality and trustworthiness.'
//   },
//   {
//     img: '/images/about/about8.jpg',
//     text: 'I create content that balances emotion, visuals, and value—helping brands reach audiences through meaningful digital experiences.'
//   }
// ]

// export default function AboutPage() {
//   return (
//     <main className="bg-black text-white min-h-screen px-6 py-24">
      
//       {/* PAGE HEADING */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-4xl mx-auto text-center mb-20"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           About <span className="text-yellow-400">Me</span>
//         </h1>
//         <p className="text-gray-400 text-lg">
//           A visual storyteller, influencer, and brand collaborator. social media content creator with a passion for travel, lifestyle, and authentic storytelling. I create engaging content that connects brands with audiences through creativity and genuine expression.
//         </p>
//       </motion.div>

//       {/* IMAGE + TEXT SECTIONS */}
//       <div className="space-y-24 max-w-6xl mx-auto">
//         {aboutData.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
//               index % 2 !== 0 ? 'md:flex-row-reverse' : ''
//             }`}
//           >
//             {/* IMAGE */}
//             <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
//               <Image
//                 src={item.img}
//                 alt="About ShoaibK Vlog"
//                 fill
//                 className="object-cover hover:scale-105 transition duration-500"
//               />
//             </div>

//             {/* TEXT */}
//             <div>
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 {item.text}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//     </main>
//   )
// }




'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaCamera, FaHeart, FaRocket, FaStar } from 'react-icons/fa'

const aboutData = [
  {
    img: '/images/about/about1.jpg',
    text: 'Travel moments shape my storytelling style. I believe natural locations, candid emotions, and clean visuals connect deeply with audiences and brands looking for authenticity.',
    icon: <FaCamera />
  },
  {
    img: '/images/about/about2.jpg',
    text: 'Urban lifestyle content reflects modern creativity. I enjoy capturing city vibes that blend fashion, confidence, and daily inspiration for young audiences.',
    icon: <FaRocket />
  },
  {
    img: '/images/about/about3.jpg',
    text: 'Creative freedom is my identity. Open spaces, bold frames, and expressive poses help me communicate positive energy and brand-friendly visuals.',
    icon: <FaStar />
  },
  {
    img: '/images/about/about4.jpg',
    text: 'My style blends tradition with modern influence. Cultural outfits and classic looks allow brands to connect emotionally with diverse audiences.',
    icon: <FaHeart />
  },
  {
    img: '/images/about/about5.jpg',
    text: 'Premium indoor aesthetics elevate brand presence. Soft lighting and clean setups help highlight products naturally without forcing promotions.',
    icon: <FaCamera />
  },
  {
    img: '/images/about/about6.jpg',
    text: 'Public spaces inspire interaction. I focus on storytelling that feels real, relatable, and engaging across social media platforms.',
    icon: <FaRocket />
  },
  {
    img: '/images/about/about7.jpg',
    text: 'Confidence and personality matter in digital branding. Every pose and expression reflects originality and trustworthiness.',
    icon: <FaStar />
  },
  {
    img: '/images/about/about8.jpg',
    text: 'I create content that balances emotion, visuals, and value—helping brands reach audiences through meaningful digital experiences.',
    icon: <FaHeart />
  }
]

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setDarkMode(savedTheme !== 'light')
  }, [])

  return (
    <main className={`min-h-screen px-6 py-24 transition-all duration-500 relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      
      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-yellow-400/20' : 'bg-yellow-500/30'
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-purple-500/20' : 'bg-purple-400/30'
          }`}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* PAGE HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-24 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`inline-block mb-6 px-6 py-2 rounded-full text-sm font-semibold tracking-wider ${
            darkMode 
              ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/30' 
              : 'bg-yellow-500/10 text-yellow-600 border border-yellow-500/30'
          }`}
        >
          GET TO KNOW ME
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          About{' '}
          <span className={`text-transparent bg-clip-text ${
            darkMode 
              ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500' 
              : 'bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600'
          }`}>
            Me
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          A visual storyteller, influencer, and brand collaborator. Social media content creator with a passion for travel, lifestyle, and authentic storytelling.
        </motion.p>

        {/* DECORATIVE LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={`h-1 mx-auto mt-8 rounded-full ${
            darkMode ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-yellow-500 to-orange-600'
          }`}
        />
      </motion.div>

      {/* IMAGE + TEXT SECTIONS */}
      <div className="space-y-32 max-w-7xl mx-auto relative z-10">
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative group ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}
            >
              {/* ICON BADGE */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
                className={`absolute -top-6 -left-6 z-20 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-2xl ${
                  darkMode 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black' 
                    : 'bg-gradient-to-br from-yellow-500 to-orange-600 text-white'
                }`}
              >
                {item.icon}
              </motion.div>

              {/* DECORATIVE GRADIENT BACKGROUND */}
              <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${
                darkMode ? 'bg-yellow-400' : 'bg-yellow-500'
              }`} style={{ transform: 'translate(20px, 20px)' }} />

              {/* MAIN IMAGE */}
              <div className={`relative w-full h-[500px] rounded-3xl overflow-hidden border-4 shadow-2xl ${
                darkMode ? 'border-yellow-400/20' : 'border-yellow-500/30'
              }`}>
                <Image
                  src={item.img}
                  alt="About ShoaibK Vlog"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* NUMBER INDICATOR */}
              <div className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black shadow-2xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' 
                  : 'bg-gradient-to-br from-purple-600 to-pink-600 text-white'
              }`}>
                {index + 1}
              </div>
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
            >
              <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm transition-all duration-500 ${
                darkMode 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-xl'
              }`}>
                
                {/* QUOTE MARK */}
                <div className={`text-6xl font-serif mb-4 opacity-30 ${
                  darkMode ? 'text-yellow-400' : 'text-yellow-600'
                }`}>
                  "
                </div>

                <p className={`text-xl md:text-2xl leading-relaxed font-light ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {item.text}
                </p>

                {/* DECORATIVE BOTTOM LINE */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`h-1 mt-6 rounded-full ${
                    darkMode 
                      ? 'bg-gradient-to-r from-yellow-400 to-transparent' 
                      : 'bg-gradient-to-r from-yellow-500 to-transparent'
                  }`}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mt-32 relative z-10"
      >
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Ready to Create Something{' '}
          <span className={darkMode ? 'text-yellow-400' : 'text-yellow-600'}>Amazing?</span>
        </h2>
        
        <p className={`text-lg mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Let's collaborate and bring your brand vision to life
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-block px-12 py-5 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 ${
            darkMode 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-yellow-400/50' 
              : 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:shadow-yellow-500/50'
          }`}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </main>
  )
}
