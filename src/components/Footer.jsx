import {Link} from "react-router-dom"
import Logo from "../images/logo.jpg"
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
                <img height="100" src={Logo} alt="Footer Logo"/>
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
            <Link to="/projects">Project</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/">Blog</Link>
            <Link to="/">Case</Link>
            <Link to="/">Events</Link>
            <Link to="/">Communities</Link>
            <Link to="/">FAQs</Link>
        </article>
        <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/">Support</Link>
           
        </article>
    </div>

    <div className="footer__copyright">
        <small>winner-winifred &copy; All Rights Reserved</small>
    </div>
    </footer>
  )
}

export default Footer