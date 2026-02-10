// 'use client'

// import { motion } from 'framer-motion'

// export default function Services() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-black via-[#0b0b0b] to-black text-white pt-24 pb-20 px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-4xl mx-auto"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
//           My <span className="text-[#facc15]">Services</span>
//         </h1>

//         <div className="grid md:grid-cols-2 gap-6 mt-12">
//           <div className="p-8 border border-gray-700 rounded-2xl hover:border-[#facc15] transition">
//             <h3 className="text-2xl font-bold mb-4">Brand Collaborations</h3>
//             <p className="text-gray-400">
//               Authentic brand partnerships that resonate with my audience and drive real results.
//             </p>
//           </div>

//           <div className="p-8 border border-gray-700 rounded-2xl hover:border-[#facc15] transition">
//             <h3 className="text-2xl font-bold mb-4">Sponsored Content</h3>
//             <p className="text-gray-400">
//               Engaging sponsored posts and stories that feel natural and connect with viewers.
//             </p>
//           </div>

//           <div className="p-8 border border-gray-700 rounded-2xl hover:border-[#facc15] transition">
//             <h3 className="text-2xl font-bold mb-4">YouTube Integration</h3>
//             <p className="text-gray-400">
//               Dedicated video segments and integrations that showcase your brand to my subscriber base.
//             </p>
//           </div>

//           <div className="p-8 border border-gray-700 rounded-2xl hover:border-[#facc15] transition">
//             <h3 className="text-2xl font-bold mb-4">Event Coverage</h3>
//             <p className="text-gray-400">
//               On-site content creation and live coverage for events, launches, and experiences.
//             </p>
//           </div>
//         </div>

//         <div className="mt-12 text-center">
//           <a
//             href="/contact"
//             className="inline-block px-8 py-3 bg-[#facc15] text-black font-semibold rounded-full hover:scale-105 transition"
//           >
//             Get a Quote
//           </a>
//         </div>

//         <a
//           href="/"
//           className="block mt-10 text-center text-gray-400 hover:text-white transition"
//         >
//           ← Back to Home
//         </a>
//       </motion.div>
//     </main>
//   )
// }



'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { 
  FaInstagram, 
  FaYoutube, 
  FaCamera, 
  FaBullhorn, 
  FaVideo, 
  FaCalendarAlt,
  FaChartLine,
  FaPalette,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa'

const services = [
  {
    icon: <FaBullhorn />,
    title: 'Brand Collaborations',
    description: 'Authentic brand partnerships that resonate with my audience and drive real results.',
    features: ['Strategic Planning', 'Audience Alignment', 'Long-term Partnerships'],
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: <FaInstagram />,
    title: 'Sponsored Content',
    description: 'Engaging sponsored posts and stories that feel natural and connect with viewers.',
    features: ['Instagram Posts', 'Story Takeovers', 'Reels & Carousels'],
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: <FaYoutube />,
    title: 'YouTube Integration',
    description: 'Dedicated video segments and integrations that showcase your brand to my subscriber base.',
    features: ['Product Reviews', 'Video Mentions', 'Dedicated Videos'],
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Event Coverage',
    description: 'On-site content creation and live coverage for events, launches, and experiences.',
    features: ['Live Updates', 'Event Photography', 'Behind-the-Scenes'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <FaCamera />,
    title: 'Content Creation',
    description: 'Professional photo and video content tailored to your brand identity and marketing goals.',
    features: ['Photography', 'Videography', 'Editing & Post-production'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <FaChartLine />,
    title: 'Social Media Strategy',
    description: 'Data-driven social media strategies to maximize reach, engagement, and conversions.',
    features: ['Analytics Reports', 'Growth Strategy', 'Performance Tracking'],
    color: 'from-purple-500 to-indigo-500'
  }
]

export default function Services() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setDarkMode(savedTheme !== 'light')
  }, [])

  return (
    <main className={`min-h-screen pt-24 pb-20 px-6 transition-all duration-500 relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      
      {/* ANIMATED BACKGROUND PARTICLES */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-3 h-3 rounded-full ${
              darkMode ? 'bg-yellow-400/20' : 'bg-yellow-500/30'
            }`}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* GRADIENT ORBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-yellow-400/30' : 'bg-yellow-500/40'
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
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-purple-500/30' : 'bg-purple-400/40'
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
          style={{ bottom: '10%', right: '5%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className={`inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full text-sm font-semibold tracking-wider ${
              darkMode 
                ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/30' 
                : 'bg-yellow-500/10 text-yellow-600 border border-yellow-500/30'
            }`}
          >
            <FaRocket className="text-lg" />
            WHAT I OFFER
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            My{' '}
            <span className={`text-transparent bg-clip-text ${
              darkMode 
                ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500' 
                : 'bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600'
            }`}>
              Services
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
            Professional content creation and brand collaboration services designed to elevate your digital presence
          </motion.p>

          {/* DECORATIVE LINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`h-1 mx-auto mt-8 rounded-full ${
              darkMode 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                : 'bg-gradient-to-r from-yellow-500 to-orange-600'
            }`}
          />
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* GLOW EFFECT */}
              <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-r ${service.color}`} />
              
              {/* CARD */}
              <div className={`relative p-8 rounded-3xl border-2 transition-all duration-500 h-full ${
                darkMode 
                  ? 'bg-white/5 border-white/10 hover:border-yellow-400/50 backdrop-blur-sm' 
                  : 'bg-white border-gray-200 hover:border-yellow-500/50 shadow-xl hover:shadow-2xl'
              }`}>
                
                {/* ICON */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-r ${service.color} text-white shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className={`mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>

                {/* FEATURES */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className={`flex items-center gap-3 text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <FaCheckCircle className={`text-lg flex-shrink-0 ${
                        darkMode ? 'text-yellow-400' : 'text-yellow-600'
                      }`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className={`max-w-4xl mx-auto p-12 rounded-3xl backdrop-blur-sm border-2 ${
            darkMode 
              ? 'bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border-yellow-400/30' 
              : 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300'
          }`}>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-block mb-6"
            >
              <FaPalette className={`text-6xl ${
                darkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`} />
            </motion.div>

            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Create Something Amazing?
            </h2>
            
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss your project and bring your brand vision to life
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-yellow-400/50' 
                    : 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:shadow-yellow-500/50'
                }`}
              >
                Get a Quote
              </motion.a>

              <motion.a
                href="/media-kit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-10 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 ${
                  darkMode 
                    ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' 
                    : 'border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white'
                }`}
              >
                View Media Kit
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* BACK TO HOME */}
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={`block mt-16 text-center transition-all duration-300 flex items-center justify-center gap-2 ${
            darkMode 
              ? 'text-gray-400 hover:text-yellow-400' 
              : 'text-gray-600 hover:text-yellow-600'
          }`}
        >
          <span className="text-2xl">←</span>
          <span className="font-semibold">Back to Home</span>
        </motion.a>
      </div>
    </main>
  )
}