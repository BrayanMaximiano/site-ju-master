import { GlobalStyle } from "./Styles/GlobalStyles"
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ToTop from './components/ToTop'

function App() {
  return (
    <>
      <Header />
      <Home/>
      <About />
      <Location/>
      <Contact />
      <ToTop />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App
