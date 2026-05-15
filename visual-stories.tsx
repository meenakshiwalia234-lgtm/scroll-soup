"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const stories = [
  {
    id: 1,
    title: "The Art of Slow Living",
    location: "Amalfi Coast, Italy",
    category: "Luxury Stay",
    image: "/images/story-1.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Morning Light",
    location: "Kyoto, Japan",
    category: "Café Culture",
    image: "/images/story-2.jpg",
    size: "small",
  },
  {
    id: 3,
    title: "Desert Dreams",
    location: "Marrakech, Morocco",
    category: "Travel",
    image: "/images/story-3.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "Nordic Serenity",
    location: "Tromsø, Norway",
    category: "Lifestyle",
    image: "/images/story-4.jpg",
    size: "medium",
  },
  {
    id: 5,
    title: "Urban Poetry",
    location: "New York City",
    category: "Fashion",
    image: "/images/story-5.jpg",
    size: "medium",
  },
]

function StoryCard({ story, index }: { story: typeof stories[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl ${
        story.size === "large"
          ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[500px]"
          : story.size === "medium"
          ? "col-span-1 row-span-2 min-h-[400px]"
          : "col-span-1 row-span-1 min-h-[250px]"
      }`}
    >
      <Image
        src={story.image}
        alt={story.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur-sm">
            {story.category}
          </span>
          <h3 className={`font-bold text-white ${story.size === "large" ? "text-2xl md:text-4xl" : "text-xl"}`}>
            {story.title}
          </h3>
          <p className="mt-2 text-sm text-white/70">
            {story.location}
          </p>
        </motion.div>
        
        {/* Hover reveal */}
        <motion.div
          className="mt-4 flex items-center gap-2 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <span className="text-sm font-medium">View Story</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
      
      {/* Corner accent */}
      <div className="absolute right-4 top-4 h-8 w-8 rounded-full border border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  )
}

export function VisualStories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="stories" className="relative py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
            Visual Storytelling
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Moments That <span className="text-glow-blue text-secondary">Inspire</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
