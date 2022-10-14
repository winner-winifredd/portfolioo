// import React from "react"
import { Link } from "react-router-dom"
import Image from "../images/main_header.png"

const MainHeader = () => {
  return (
    
    <header className="main__header">
      <div className="container main__header">
        <div className="main__header-left">
          <h4>#The Assistant you need</h4>
          <h1>Let's Assist you while you rest</h1>
          <p>
          At Safewox, we provide you with the skills and services that your business needs to run smoothly and grow. We have worked with clients across over 15 industries including E-Commerce, Health and Energy, the majority of our clients have kept their relationships with us for the past three years. Our team is made up of top-grade professionals with a wealth of relevant experience in their respective fields.
           We always take a step further in perfecting our work to ensure quality and effectiveness.
          </p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>

        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="main_Header_Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader