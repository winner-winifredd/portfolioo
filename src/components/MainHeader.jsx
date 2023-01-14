// import React from "react"
import { Link } from "react-router-dom"
import Image from "../images/main_header.png"

const MainHeader = () => {
  return (
    
    <header className="main__header">
      <div className="container main__header">
        <div className="main__header-left">
          <h4>#TechBabyGirl</h4>
          <h1>TechBabyGirl . . . <small><i>Your Codes With A Touch Of Perfection</i></small></h1>
          <p>
          As a highly skilled and results-driven Front-End Developer, I possess a wealth of experience in programming and web development. 
          My areas of expertise include HTML, CSS, REACT, JavaScript, and Bootstrap.
          I Utilize the latest technologies and industry best practices to create high-quality, responsive websites that exceed my clients' expectations, visually appealing and user-friendly websites that are optimized for search engines and mobile devices.
          Throughout my career, I have had the opportunity to work on a wide range of projects, from simple brochure websites to complex e-commerce platforms. 
          I am a team player and am able to effectively manage multiple projects simultaneously. My strong communication skills enable me to clearly convey
          technical concepts to clients in layman's terms and i always take a step further in perfecting our work to ensure quality and effectiveness..
          I invite you to peruse my portfolio to view samples of my recent work. Should you have any questions or wish to discuss a new project, please do not hesitate to contact me.
          <div>Thank you for visiting my website!!</div>
          
          </p>
          <Link to="/Contact" className="btn lg">Contact Me Now</Link>
        </div>

        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img width="" height="" src={Image} alt="main_Header_Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader