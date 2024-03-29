import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
// import Gallery from "./pages/gallery/Gallery"
import Projects from "./pages/projects/Projects"
// import Trainers from "./pages/trainers/Trainers"
import NotFound from "./pages/notFound/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


const app = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default app