import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import Manifesto from '@/components/landing/Manifesto'
import Features from '@/components/landing/Features'
import QuranPreview from '@/components/landing/QuranPreview'
import AzkarSection from '@/components/landing/AzkarSection'
import PrayerSection from '@/components/landing/PrayerSection'
import StatsSection from '@/components/landing/StatsSection'
import FinalCta from '@/components/landing/FinalCta'
import Footer from '@/components/landing/Footer'
import ScrollEffects from '@/components/landing/ScrollEffects'

/*
 * صفحة هبوط سكينة — نفس الترتيب الرأسي للملف الأصلي sakina_landing_v2.html بالضبط:
 * nav → hero → manifesto → features → quran → azkar → prayer → stats → final-cta → footer
 */
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Features />
        <QuranPreview />
        <AzkarSection />
        <PrayerSection />
        <StatsSection />
        <FinalCta />
      </main>
      <Footer />
      <ScrollEffects />
    </>
  )
}
