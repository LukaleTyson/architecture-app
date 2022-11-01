
import { FaFacebook, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import './footer.scss'

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className="footer">
        <h1>GET IN TOUCH</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis perferendis amet. Dolorum voluptas cum adipisci hic illo .</p>
        <div className="icons">
          <FaFacebook className="icon" />
          <FaWhatsapp className="icon" />
          <FaMailBulk className="icon" />
        </div>
      </div>
      <span>Designed and Built by @lukaleTyson</span>


    </div>
  )
}

export default Footer