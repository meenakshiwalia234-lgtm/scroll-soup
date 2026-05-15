"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/about.jpg"
                alt="Creative storyteller"
                fill
                className="object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border-2 border-primary/30" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full border-2 border-secondary/30" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass neon-glow-purple absolute -right-4 bottom-8 rounded-2xl p-4 md:-right-8"
            >
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-xs text-muted-foreground">Years Creating</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              The Creator
            </p>
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              Crafting Visual <span className="text-glow-purple text-primary">Emotions</span>
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I believe every frame should tell a story. As a cinematic content creator, 
                I specialize in transforming ordinary moments into extraordinary visual 
                narratives.
              </p>
              <p>
                From luxury hotel experiences to intimate café scenes, my work captures 
                the essence of lifestyle and travel through a lens of artistic authenticity.
              </p>
              <p>
                My approach blends cinematic techniques with genuine storytelling, 
                creating content that resonates emotionally and drives engagement.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Cinematic Reels", "Hotel Content", "Travel Stories", "Lifestyle"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-6">
              <div>
                <p className="text-3xl font-bold text-secondary">50M+</p>
                <p className="text-sm text-muted-foreground">Views Generated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">100+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
