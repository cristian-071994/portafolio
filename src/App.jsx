import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <main className="bg-[#11071F] text-white min-h-screen font-['Poppins'] relative">
      <NavBar />
      <Header />
      <AboutMe />
    </main>
  )
}

export default App
