import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { AboutBitcoin } from "@/components/about-bitcoin"
import { AboutCreator } from "@/components/about-creator"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutBitcoin />
      <AboutCreator />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
