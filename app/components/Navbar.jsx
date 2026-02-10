'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Shoaib<span className="text-yellow-400">K</span>Vlog
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/media-kit">Media Kit</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100vh' }}
          exit={{ height: 0 }}
          className="md:hidden bg-black flex flex-col items-center justify-center gap-8 text-xl"
        >
          <MobileLink href="/" onClick={setOpen}>Home</MobileLink>
          <MobileLink href="/about" onClick={setOpen}>About</MobileLink>
          <MobileLink href="/services" onClick={setOpen}>Services</MobileLink>
          <MobileLink href="/media-kit" onClick={setOpen}>Media Kit</MobileLink>
          <MobileLink href="/contact" onClick={setOpen}>Contact</MobileLink>
        </motion.div>
      )}
    </header>
  )
}

/* ---------- SMALL COMPONENTS ---------- */

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="hover:text-white transition"
    >
      {children}
    </Link>
  )
}

function MobileLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={() => onClick(false)}
      className="hover:text-yellow-400 transition"
    >
      {children}
    </Link>
  )
}
