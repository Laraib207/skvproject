// 'use client'

// import Link from 'next/link'
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FaBars, FaTimes } from 'react-icons/fa'

// export default function Navbar() {
//   const [open, setOpen] = useState(false)

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* LOGO */}
//         <Link href="/" className="text-xl font-bold tracking-wide">
//           Shoaib<span className="text-yellow-400">K</span>Vlog
//         </Link>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex gap-8 text-sm text-gray-300">
//           <NavLink href="/">Home</NavLink>
//           <NavLink href="/about">About</NavLink>
//           <NavLink href="/services">Services</NavLink>
//           <NavLink href="/media-kit">Media Kit</NavLink>
//           <NavLink href="/contact">Contact</NavLink>
//         </div>
            
//         {/* MOBILE BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-xl"
//         >
//           {open ? <FaTimes /> : <FaBars />}
//         </button>
//       </nav>

//       {/* MOBILE MENU */}
      
//       {open && (
//         <motion.div
//           initial={{ height: 0 }}
//           animate={{ height: '100vh' }}
//           exit={{ height: 0 }}
//           className="md:hidden bg-black flex flex-col items-center justify-center gap-8 text-xl"
//         >
//           <MobileLink href="/" onClick={setOpen}>Home</MobileLink>
//           <MobileLink href="/about" onClick={setOpen}>About</MobileLink>
//           <MobileLink href="/services" onClick={setOpen}>Services</MobileLink>
//           <MobileLink href="/media-kit" onClick={setOpen}>Media Kit</MobileLink>
//           <MobileLink href="/contact" onClick={setOpen}>Contact</MobileLink>
//         </motion.div>
//       )}
//     </header>
//   )
// }

// /* ---------- SMALL COMPONENTS ---------- */

// function NavLink({ href, children }) {
//   return (
//     <Link
//       href={href}
//       className="hover:text-white transition"
//     >
//       {children}
//     </Link>
//   )
// }

// function MobileLink({ href, children, onClick }) {
//   return (
//     <Link
//       href={href}
//       onClick={() => onClick(false)}
//       className="hover:text-yellow-400 transition"
//     >
//       {children}
//     </Link>
//   )
// }






'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
      darkMode 
        ? 'bg-black/60 backdrop-blur-md border-white/10' 
        : 'bg-white/80 backdrop-blur-md border-gray-200 shadow-lg'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className={`text-xl font-bold tracking-wide transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Shoaib<span className="text-yellow-400">K</span>Vlog
        </Link>

        {/* DESKTOP MENU */}
        <div className={`hidden md:flex gap-8 text-sm items-center ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          <NavLink href="/" darkMode={darkMode}>Home</NavLink>
          <NavLink href="/about" darkMode={darkMode}>About</NavLink>
          <NavLink href="/services" darkMode={darkMode}>Services</NavLink>
          <NavLink href="/media-kit" darkMode={darkMode}>Media Kit</NavLink>
          <NavLink href="/contact" darkMode={darkMode}>Contact</NavLink>
          
          {/* THEME TOGGLE BUTTON */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30' 
                : 'bg-gray-800/10 text-gray-800 hover:bg-gray-800/20'
            }`}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </motion.button>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-yellow-400/20 text-yellow-400' 
                : 'bg-gray-800/10 text-gray-800'
            }`}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
          
          <button
            onClick={() => setOpen(!open)}
            className={`text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '100vh', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden flex flex-col items-center justify-center gap-8 text-xl ${
            darkMode ? 'bg-black' : 'bg-white'
          }`}
        >
          <MobileLink href="/" onClick={setOpen} darkMode={darkMode}>Home</MobileLink>
          <MobileLink href="/about" onClick={setOpen} darkMode={darkMode}>About</MobileLink>
          <MobileLink href="/services" onClick={setOpen} darkMode={darkMode}>Services</MobileLink>
          <MobileLink href="/media-kit" onClick={setOpen} darkMode={darkMode}>Media Kit</MobileLink>
          <MobileLink href="/contact" onClick={setOpen} darkMode={darkMode}>Contact</MobileLink>
        </motion.div>
      )}
    </header>
  )
}

/* ---------- SMALL COMPONENTS ---------- */
function NavLink({ href, children, darkMode }) {
  return (
    <Link
      href={href}
      className={`relative group transition-colors ${
        darkMode ? 'hover:text-white' : 'hover:text-yellow-500'
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
        darkMode ? 'bg-yellow-400' : 'bg-yellow-500'
      }`}></span>
    </Link>
  )
}

function MobileLink({ href, children, onClick, darkMode }) {
  return (
    <Link
      href={href}
      onClick={() => onClick(false)}
      className={`transition-all duration-300 ${
        darkMode ? 'text-white hover:text-yellow-400' : 'text-gray-900 hover:text-yellow-500'
      } hover:scale-110`}
    >
      {children}
    </Link>
  )
}