import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Subscribe from './pages/Subscribe'


function App() {
  return (
    <div className='App'>
      <Navbar />
      {/*
    <About />
    <Home / >
  */}
  <Subscribe/>
      <Footer />
    </div>
  )
}

export default App
