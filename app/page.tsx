import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  )
}
