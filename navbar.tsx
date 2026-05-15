"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const navItems = [
  { name: "Work", href: "#reels" },
  { name: "Stories", href: "#stories" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="glass fixed left-0 right-0 top-0 z-50 mx-auto mt-4 flex w-[95%] max-w-6xl items-center justify-between rounded-full px-6 py-4 md:px-8"
      >
        <Link href="/" className="group relative">
          <span className="text-xl font-bold tracking-tight text-foreground transition-all duration-300 group-hover:text-glow-purple">
            SCROLL SOUP
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="magnetic-btn neon-glow-purple rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="h-0.5 w-6 bg-foreground"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="neon-glow-purple rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
