"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Ready to Create?
          </p>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Let&apos;s Create Something
            <br />
            <span className="text-glow-purple bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Worth Watching
            </span>
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-muted-foreground">
            Have a project in mind? Let&apos;s collaborate and bring your vision to life 
            through cinematic storytelling.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@scrollsoup.com"
              className="magnetic-btn neon-glow-purple group flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn group flex items-center gap-3 rounded-full border border-border px-8 py-4 text-lg font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow Along
            </a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          {[
            { name: "Instagram", href: "#" },
            { name: "TikTok", href: "#" },
            { name: "YouTube", href: "#" },
            { name: "Twitter", href: "#" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {social.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
