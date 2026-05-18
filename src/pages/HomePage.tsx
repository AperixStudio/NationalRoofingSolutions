import AboutSection from '../components/AboutSection'
import ContactUs from '../components/ContactUs'
import Hero from '../components/Hero'
import PillNav from '../components/PillNav'
import ServicesOverview from '../components/ServicesOverview'

export default function HomePage() {
  return (
    <main className="bg-(--color-background)">
      <PillNav />
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <ContactUs />
    </main>
  )
}
