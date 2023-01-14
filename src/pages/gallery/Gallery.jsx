import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import { MdEmail } from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
import "./gallery.css"

const Gallery = () => (
  <>
    <Header title="Get  In Touch" image={HeaderImage}>
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

export default Gallery

// const Gallery = () => {

//     // easily import images named orderly

//     const Gallery = () =>{
//         const gallerylength = 15;
//         const images = []

//         for (let i=1; i < gallerylength; i++){
//             images.push(require(`../../images/gallery${i}.jpg`))
//         }
    
//   return (
//     <>
//     <Header title="Our Gallery" image={HeaderImage}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam enim? Repellendus numquam rem vel 
//         amet ab cum labore consectetur, delectus voluptate. Corporis animi quibusdam saepe repellendus optio temporibus ea.
//     </Header>
//     <section className="gallery">
//         <div className="container gallery__container">
//             {
//                 images.map((image, index) => {
//                     return <article key ={index}>
//                         <img src={image} alt={`Gallery_image ${index + 1}`}/>
//                     </article>
//                 })
//             }
//         </div>
//     </section>
//     </>
//   )
//         }
// }

// export default Gallery