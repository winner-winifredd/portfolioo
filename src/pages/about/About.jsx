import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"

import "./about.css"

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugit nemo culpa deleniti dolorem saepe
       laboriosam quos quas totam magni mollitia dignissimos dicta atque quaerat, ullam odio quo facilis officia.
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our_Story_Image"/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis velit fugiat 
            voluptatem rerum totam commodi incidunt amet suscipit, nisi quo quam ipsum beatae consectetur modi facere porro dicta, eveniet itaque.</p>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
          <p>
          Ad nemo illum nisi porro non voluptatum libero, unde praesentium illo quod tenetur reprehenderit dolores, laudantium molestias sunt quaerat harum officiis labore?
          </p>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis velit fugiat 
            voluptatem rerum totam commodi incidunt amet suscipit, nisi quo quam ipsum beatae consectetur modi facere porro dicta, eveniet itaque.</p>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
          <p>
          Ad nemo illum nisi porro non voluptatum libero, unde praesentium illo quod tenetur reprehenderit dolores, laudantium molestias sunt quaerat harum officiis labore?
          </p>
          <div className="about__section-image">
          <img src={VisionImage} alt="Our_Vision_Image"/>
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our_mission_Image"/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis velit fugiat 
            voluptatem rerum totam commodi incidunt amet suscipit, nisi quo quam ipsum beatae consectetur modi facere porro dicta, eveniet itaque.</p>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
          <p>
          Ad nemo illum nisi porro non voluptatum libero, unde praesentium illo quod tenetur reprehenderit dolores, laudantium molestias sunt quaerat harum officiis labore?
          </p>
      </div>
    </section>

    </>
  )
}

export default About