import {Link} from "react-router-dom"
import Logo from "../images/logo.png"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
    <div className="container footer__container">
        <article>
            <Link to ="/">
                <img src={Logo} alt="Footer Logo"/>
            </Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed enim laborum rem illum voluptate numquam. Necessitatibus 
                iste corrupti modi dolorem similique omnis voluptas quam placeat nam, in, eum laboriosam?
            </p>
            <div className="footer__socials">
                <a href="https://linkedlin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                <a href="https://Facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                <a href="https://Twitter.com" target="_blank" rel="noreferrer noopener"><FaTwitter/></a>
                <a href="https://Instagram.com" target="_blank" rel="noreferrer noopener"><FaInstagram/></a>
            </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQs</Link>
        </article>
        <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/s">Support</Link>
           
        </article>
    </div>

    <div className="footer__copyright">
        <small>winner-winifred &copy; All Rights Reserved</small>
    </div>
    </footer>
  )
}

export default Footer