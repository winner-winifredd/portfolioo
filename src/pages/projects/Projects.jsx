import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import unsemantic from "../../images/unsemantic.PNG"
import Animation from "../../images/css_anim.PNG"
import form from "../../images/form.PNG"

import "./projects.css"

const Projects = () => {
  return (
    <>
    <Header title="Check Out My Projects and Grab One of My Juicy Project Plans" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam eos est omnis aperiam maxime a quas, 
      iure sed excepturi, laudantium consequatur, inventore totam rem voluptatibus ipsam nihil atque dolorem!
    </Header>
    <h1 className="projects_title">PROJECTS CATALOGUE</h1>
    <div className="projects_wrap">
    <div className="projects">
      <div>
        <img width="250px" height="250px" src={unsemantic} />
        <a href="www.google.com">click here</a>
      </div>
      <div>
        <img width="250px" height="250px" src={Animation} />
        <a href="www.google.com">click here</a>
      </div>
      <h1>PROJECT 1</h1>
      <h1>PROJECT 1</h1>
      <h1>PROJECT 1</h1>
    </div>
    <div className="projects">
    <div>
        <img width="250px" height="250px" src={form} />
        <a href="www.google.com">click here</a>
      </div>
      <h1>PROJECT 1</h1>
      <h1>PROJECT 1</h1>
      <h1>PROJECT 1</h1>
      <h1>PROJECT 1</h1>
      <h1>PROJECT 1</h1>
      <h1>PROJECT 1</h1>
    </div>
    </div>
    <section className="plans">
      <div className="plans_container">
        <div className="plans_wrapper">
          <form className="formm">
            <h2>REQUEST A QUOTE NOW</h2>
            <label>Name: </label>
            <input></input><br></br>
            <label>Phone: </label>
            <input></input><br></br>
            <label>Email: </label>
            <input></input><br></br>
            <label>Preferred Plan:</label><br></br>
            <label>Short Term Project: </label>
            <input type="radio"></input><br></br>
            <label>Long Term Project: </label>
            <input type="radio"></input><br></br>
            <label>Other Plans: </label>
            <input type="radio"></input><br></br>
            <button className="btn_sbt">Request A Quote Now</button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects