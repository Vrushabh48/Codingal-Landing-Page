import './App.css'
import { BySection } from './components/BySection'
import { Certification } from './components/Certification'
import { CourseSection } from './components/CourseSection'
import Footer from './components/Footer'
import { GuranteeSection } from './components/GuranteeSection'
import LearningDashboardSection from './components/LearningDashboardSection'
import { Navbar } from './components/Navbar'
import NewsSection from './components/NewsSection'
import { PricingSection } from './components/PricingSection'
import { ProjectSection } from './components/ProjectSection'
import { Section1 } from './components/Section1'
import { StaffSection } from './components/StaffSection'
import StickyChatButton from './components/StickyChat'
import ToggleSection from './components/ToggleSection'
import { WhyUsSection } from './components/WhyUsSection'

function App() {

  return (
    <div>
      <Navbar />
      <Section1 />
      <BySection />
      <CourseSection />
      <StaffSection />
      <GuranteeSection />
      <PricingSection />
      <ToggleSection />
      <Certification />
      <WhyUsSection />
      <ProjectSection />
      <LearningDashboardSection />
      <NewsSection />
      <Footer />
      <StickyChatButton />
    </div>
  )
}

export default App
