import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  

  return (
    <main className="bg-[#11071F] text-white min-h-screen font-['Poppins'] relative">
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  )
}

export default App
