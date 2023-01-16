import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import { MdEmail } from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
import "./contact.css"

const Contact = () => (
  <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam eos est omnis aperiam maxime a quas,
      iure sed excepturi, laudantium consequatur, inventore totam rem voluptatibus ipsam nihil atque dolorem!
    </Header>
    <h3 className="tit">CLICK ON THE ICONS BELOW TO WRITE ME A DIRECT MESSAGE TODAY</h3><br></br>
    <section className="contact">
      <div className="contact__container">
        <div className="contact___wrapper">
          <div>
            <h4>
              <a href="mailto:safewox@gmail.com" target="_blank" rel="noreferrer noopener">
                <MdEmail />
              </a>
              . . . Send Me A Direct Mail Today
              </h4>
              </div><br></br>
            <div>
              <h4>
                <a href="https://m.me/Godly_yet_Dominating_Gyd" target="_blank" rel="noreferrer noopener">
                  <BsMessenger />
                  . . . Send A Direct Message On Messenger
                </a></h4>
            </div><br></br>

            <div>
            <h4><a href="http:/wa.me/+2348160863613" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
              . . . Send A Whatsapp Direct Message
            </h4>

          </div>
        </div>
      </div></section>
  </>
)

export default Contact