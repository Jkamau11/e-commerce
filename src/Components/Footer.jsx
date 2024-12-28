import {FaFacebook} from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export default function Footer(){

    return (

        <>
        <div className="whole-footer">

        <div className="call">
                <h2><FaPhone color="0cce6b"/></h2>
            </div>

            <div className="social-media">
                <a href="https://www.facebook.com/Jamesmacharia"><h1><FaFacebook color="#e07a5f" /></h1></a>
                <a href="https://wa.me/+254701634577?"><h1><FaWhatsapp color="#e07a5f" /></h1></a>
                <a href="https://www.instagram.com/accounts/login/?"><h1><FaInstagram color="#e07a5f" /></h1></a>
                <a href="https://twitter.com/"><h1><FaTwitter color="#e07a5f" /></h1></a>
                <a href="https://www.tiktok.com/login"><h1><FaTiktok color="#e07a5f" /></h1></a>
                <a href="https://www.youtube.com/"><h1><FaYoutube color="#e07a5f" /></h1></a>
                <a href="https://www.linkedin.com/"><h1><FaLinkedin color="#e07a5f" /></h1></a>
            </div>

            <div className="email">
                <h2>📧  </h2>
            </div>

        </div>
            





        </>
    )
}