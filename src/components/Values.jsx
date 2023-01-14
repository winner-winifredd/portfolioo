import Image from "../images/main_headerj.png"
import SectionHead from "./SectionHead"
import {GiCutDiamond} from "react-icons/gi"
import { values } from "../data"
import Card from "../UI/card"


const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
            <div className="values__image">
              <img width="100" height="700" src={Image} alt="values_image"/>
              {/* <img width="100" height="" src={Image} alt="values_image"/> */}
              </div>
            </div>
            <div className="values__right">
              <SectionHead icon={<GiCutDiamond/>} title="Values"/>
              <p>
                I DONT EVEN KNOW WHAT TO WRITE Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum assumenda eveniet veritatis sunt sint alias suscipit nam amet, consectetur quo, dolorem reprehenderit! Animi architecto consequatur ut repudiandae id quia commodi
              </p>

              <div className="values__wrapper">
                {
                    values.map(({id, icon, title, desc}) => {
                      return <Card key={id} className="values__value">
                      <span>{icon}</span>
                      <h4>{title}</h4>
                      <small>{desc}</small>
                      </Card>
                    })
                }
              </div>
            </div>
        </div>
    </section>
  )
}

export default Values