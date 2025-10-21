
import HeroSection from './heroSection'
import AboutMe from './about'
import ContactMe from './contactMe'
import NavBar from './navBar'
import Projects from './projects'
import Experiences from './experiences'
// import Art from './art'

import './App.css'

function App() {


  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Projects />
      <Experiences/>
       <AboutMe/>
        {/* <Art/> */}
       <ContactMe/>
    
    </>
  )
}

export default App
