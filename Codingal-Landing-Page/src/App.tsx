import './App.css'
import { BySection } from './components/BySection'
import { CourseSection } from './components/CourseSection'
import { Navbar } from './components/Navbar'
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
    </div>
  )
}

export default App
