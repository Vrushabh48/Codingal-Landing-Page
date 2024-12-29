import './App.css'
import { BySection } from './components/BySection'
import { CourseSection } from './components/CourseSection'
import { Navbar } from './components/Navbar'
import { Section1 } from './components/Section1'

function App() {

  return (
    <div>
      <Navbar />
      <Section1 />
      <BySection />
      <CourseSection />
    </div>
  )
}

export default App
