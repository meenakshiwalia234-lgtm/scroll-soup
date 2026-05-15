"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const brands = [
  { name: "Four Seasons", logo: "FS" },
  { name: "Aman Resorts", logo: "AMAN" },
  { name: "Edition Hotels", logo: "EDITION" },
  { name: "Soho House", logo: "SOHO" },
  { name: "Six Senses", logo: "VI" },
  { name: "Rosewood", logo: "RW" },
]

export function BrandExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Collaborations
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Trusted by <span className="text-glow-pink text-accent">Luxury Brands</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass group flex aspect-square flex-col items-center justify-center rounded-2xl p-6 transition-all duration-500 hover:neon-glow-pink"
            >
              <span className="text-2xl font-bold tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-accent md:text-3xl">
                {brand.logo}
              </span>
              <span className="mt-2 text-xs text-muted-foreground/60 transition-colors duration-300 group-hover:text-foreground">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
