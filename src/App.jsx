import { BrowserRouter } from "react-router-dom"
import { Navbar, Hero, Experience, About, Tech, Works, Contact, StarsCanvas, Feedbacks, Copy} from './components'
import TestimonialsFeed from "./components/TestimonialsFeed"
// import Testimonials from "./components/Testimonials"
const App = () => {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />

        </div>
        <About />
        {/* <Tech /> */}
        
        <Experience />
        
        <Feedbacks/>
        <Works />
        <TestimonialsFeed/>
        {/* <TestimonialsFeed/> */}
        <div className="relative z-0 " style={{bottom:20}}>
          <Contact />
          <StarsCanvas/>
          <Copy/>
        </div>
        
      </div>
    </BrowserRouter>

  )
}

export default App
