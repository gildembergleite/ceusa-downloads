import CommonQuestions from '@/components/CommonQuestions'
import DownloadSection from '@/components/DownloadSection'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home () {
  return (
    <>
      <Header />
      <Hero />
      <DownloadSection />
      <CommonQuestions />
    </>
  )
}
