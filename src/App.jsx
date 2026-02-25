
import './App.css'
import Footer from './pages/layouts/footer'
import Navbar from './pages/layouts/navbar'
import About from './pages/about'
import Hero from './pages/components/Hero'
import Kontak from './pages/Kontak'
import Pencapaian from './pages/Pencapaian'

function App() {

  return (
    <>
    <Navbar/>
      <Hero/>
      <About/>
      <Pencapaian/>
      <Kontak/>
      <Footer/>


    </>
  )
}

export default App
