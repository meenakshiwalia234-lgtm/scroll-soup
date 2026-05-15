"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const reels = [
  {
    id: 1,
    title: "Sunset Retreat",
    category: "Luxury Hotel",
    thumbnail: "/images/reel-1.jpg",
  },
  {
    id: 2,
    title: "Urban Escape",
    category: "Lifestyle",
    thumbnail: "/images/reel-2.jpg",
  },
  {
    id: 3,
    title: "Coastal Dreams",
    category: "Travel",
    thumbnail: "/images/reel-3.jpg",
  },
  {
    id: 4,
    title: "Morning Ritual",
    category: "Café Culture",
    thumbnail: "/images/reel-4.jpg",
  },
]

function PhoneMockup({ reel, index }: { reel: typeof reels[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* iPhone Frame */}
      <div className="relative mx-auto w-full max-w-[220px]">
        {/* Outer frame */}
        <div className="glass relative overflow-hidden rounded-[2.5rem] p-2 transition-all duration-500 group-hover:neon-glow-purple">
          {/* Inner screen */}
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-background">
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-3 z-20 h-6 w-20 -translate-x-1/2 rounded-full bg-black" />
            
            {/* Video/Image content */}
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Play indicator on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="neon-glow-purple flex h-16 w-16 items-center justify-center rounded-full bg-primary/80 backdrop-blur-sm">
                  <svg className="ml-1 h-6 w-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
              
              {/* Content info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {reel.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {reel.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturedReels() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="reels" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Featured Work
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Cinematic Reels
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {reels.map((reel, index) => (
            <PhoneMockup key={reel.id} reel={reel} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
