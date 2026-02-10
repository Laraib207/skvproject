// 'use client'

// import { motion } from 'framer-motion'

// export default function Contact() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-black via-[#0b0b0b] to-black text-white pt-24 pb-20 px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-2xl mx-auto text-center"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Get in <span className="text-[#facc15]">Touch</span>
//         </h1>
//         <p className="text-gray-300 text-lg mb-8">
//           Interested in collaborations, sponsorships, or just want to say hello?
//           I&apos;d love to hear from you!
//         </p>

//         <div className="space-y-6">
//           <a
//             href="mailto:shoaib@example.com"
//             className="block px-8 py-4 bg-[#facc15] text-black font-semibold rounded-full hover:scale-105 transition"
//           >
//             Email Me
//           </a>
          
//           <a
//             href="https://www.instagram.com/shoaib__ashrafi_"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block px-8 py-4 border border-gray-600 rounded-full hover:border-white transition"
//           >
//             DM on Instagram
//           </a>
//         </div>

//         <a
//           href="/"
//           className="inline-block mt-10 text-gray-400 hover:text-white transition"
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
  FaEnvelope, 
  FaInstagram, 
  FaYoutube, 
  FaSnapchatGhost, 
  FaFacebookF,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaBuilding
} from 'react-icons/fa'

export default function Contact() {
  const [darkMode, setDarkMode] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setDarkMode(savedTheme !== 'light')
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <main className={`min-h-screen pt-24 pb-20 px-6 transition-all duration-500 relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      
      {/* ANIMATED BACKGROUND PARTICLES */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              darkMode ? 'bg-yellow-400/20' : 'bg-yellow-500/30'
            }`}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            }}
            animate={{
              y: [0, -30, 0],
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
          style={{ top: '10%', right: '10%' }}
        />
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            darkMode ? 'bg-pink-500/30' : 'bg-pink-400/40'
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
          style={{ bottom: '10%', left: '10%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
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
            <FaPaperPlane className="text-lg" />
            LET'S CONNECT
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            Get in{' '}
            <span className={`text-transparent bg-clip-text ${
              darkMode 
                ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500' 
                : 'bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600'
            }`}>
              Touch
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Interested in collaborations, sponsorships, or just want to say hello? I'd love to hear from you!
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm border-2 ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white border-gray-200 shadow-2xl'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <FaEnvelope className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME INPUT */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Your Name
                </label>
                <div className="relative">
                  <FaUser className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 text-white focus:border-yellow-400 placeholder-gray-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-yellow-500 placeholder-gray-400'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* EMAIL INPUT */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 text-white focus:border-yellow-400 placeholder-gray-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-yellow-500 placeholder-gray-400'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* COMPANY INPUT */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Company/Brand (Optional)
                </label>
                <div className="relative">
                  <FaBuilding className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 text-white focus:border-yellow-400 placeholder-gray-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-yellow-500 placeholder-gray-400'
                    }`}
                    placeholder="Your Company"
                  />
                </div>
              </div>

              {/* MESSAGE TEXTAREA */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 text-white focus:border-yellow-400 placeholder-gray-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-yellow-500 placeholder-gray-400'
                  }`}
                  placeholder="Tell me about your project or collaboration idea..."
                />
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-yellow-400/50' 
                    : 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:shadow-yellow-500/50'
                }`}
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* CONTACT INFO & SOCIAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* DIRECT CONTACT CARDS */}
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Direct Contact
              </h3>

              {/* EMAIL CARD */}
              <motion.a
                href="mailto:shoaib@example.com"
                whileHover={{ scale: 1.02, y: -5 }}
                className={`block p-6 rounded-2xl border-2 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-white/5 border-white/10 hover:border-yellow-400 hover:bg-yellow-400/5' 
                    : 'bg-white border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 shadow-lg'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white`}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold mb-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Email Me
                    </p>
                    <p className={`font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      shoaib@example.com
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* PHONE CARD */}
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.02, y: -5 }}
                className={`block p-6 rounded-2xl border-2 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-white/5 border-white/10 hover:border-yellow-400 hover:bg-yellow-400/5' 
                    : 'bg-white border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 shadow-lg'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-white`}>
                    <FaPhone />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold mb-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Call Me
                    </p>
                    <p className={`font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      +1 (234) 567-890
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* LOCATION CARD */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white border-gray-200 shadow-lg'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-r from-blue-400 to-cyan-500 text-white`}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold mb-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Location
                    </p>
                    <p className={`font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Dhanbad, Jharkhand, India
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* SOCIAL MEDIA */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Connect on Social
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <SocialCard
                  href="https://www.instagram.com/shoaib__ashrafi_"
                  icon={<FaInstagram />}
                  label="Instagram"
                  color="from-pink-500 to-purple-500"
                  darkMode={darkMode}
                />
                <SocialCard
                  href="https://www.youtube.com/channel/UCSoqUWi-iSJ5uhToAU2OakQ"
                  icon={<FaYoutube />}
                  label="YouTube"
                  color="from-red-500 to-pink-500"
                  darkMode={darkMode}
                />
                <SocialCard
                  href="https://snapchat.com/t/imyeMlGt"
                  icon={<FaSnapchatGhost />}
                  label="Snapchat"
                  color="from-yellow-400 to-yellow-500"
                  darkMode={darkMode}
                />
                <SocialCard
                  href="https://www.facebook.com/share/17xKExp9XG/"
                  icon={<FaFacebookF />}
                  label="Facebook"
                  color="from-blue-500 to-blue-600"
                  darkMode={darkMode}
                />
              </div>
            </div>

            {/* RESPONSE TIME INFO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={`p-6 rounded-2xl border-2 ${
                darkMode 
                  ? 'bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border-yellow-400/30' 
                  : 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300'
              }`}
            >
              <p className={`text-sm font-semibold mb-2 ${
                darkMode ? 'text-yellow-400' : 'text-yellow-700'
              }`}>
                ⚡ Quick Response
              </p>
              <p className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I typically respond within 24-48 hours. For urgent inquiries, please contact me directly via Instagram DM.
              </p>
            </motion.div>
          </motion.div>
        </div>

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

/* ================= SOCIAL CARD COMPONENT ================= */
function SocialCard({ href, icon, label, color, darkMode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-center group ${
        darkMode 
          ? 'bg-white/5 border-white/10 hover:border-yellow-400' 
          : 'bg-white border-gray-200 hover:border-yellow-500 shadow-lg'
      }`}
    >
      <div className={`w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-r ${color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <p className={`font-bold text-sm ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        {label}
      </p>
    </motion.a>
  )
}



