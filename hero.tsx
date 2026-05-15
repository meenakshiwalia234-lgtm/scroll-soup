"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-secondary/30 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-accent/20 blur-[80px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-primary"
        >
          Cinematic Content Creator
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          <span className="block">Stories That</span>
          <span className="text-glow-purple bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Move People
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Crafting cinematic reels, luxury experiences, and visual stories that 
          captivate audiences and elevate brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#reels"
            className="magnetic-btn neon-glow-purple group flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            View Work
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="magnetic-btn rounded-full border border-border px-8 py-4 font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          >
            About Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
