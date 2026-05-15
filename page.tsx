import { CustomCursor } from "@/components/custom-cursor"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedReels } from "@/components/featured-reels"
import { VisualStories } from "@/components/visual-stories"
import { BrandExperience } from "@/components/brand-experience"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="custom-cursor min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <FeaturedReels />
      <VisualStories />
      <BrandExperience />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
