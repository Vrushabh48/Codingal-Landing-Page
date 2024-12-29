import './App.css'
import { BySection } from './components/BySection'
import { CourseSection } from './components/CourseSection'
import { GuranteeSection } from './components/GuranteeSection'
import { Navbar } from './components/Navbar'
import { PricingSection } from './components/PricingSection'
import { Section1 } from './components/Section1'
import { StaffSection } from './components/StaffSection'

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
    </div>
  )
}

export default App
