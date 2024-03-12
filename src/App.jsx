import Header from "./components/Header"
import MainSection from "./components/MainSection"
import HowToSection from "./components/HowToSection"
import AtmosphereSection from "./components/AtmosphereSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div id="page">
      <Header />
      <h1 className="text-3xl">My site</h1>
      <MainSection />
      <HowToSection />
      <AtmosphereSection />
      <Footer />
    </div>
  )
}

export default App
