import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutVision from './components/AboutVision'
import Mission from './components/Mission'
import Services from './components/Services'
import Bottom from './components/Bottom'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08050d] text-gray-100 font-sans">
      
      {/* Navbar */}
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-5">
        <Hero />
        <AboutVision />
        <Mission />
        <Services />
        <Bottom />
      </main>

    </div>
  )
}