"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              SCROLL SOUP
            </Link>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-8"
          >
            <Link href="#reels" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Work
            </Link>
            <Link href="#stories" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Stories
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Scroll Soup. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
