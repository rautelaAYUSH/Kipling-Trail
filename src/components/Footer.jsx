// import './Footer.css'

// function Footer() {
//     return(
//         <>
        
//         </>
//     );
// }

// export default Footer;
// Footer.jsx
import './Footer.css';
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <FaPhone className="footer-icon" />
          <p className="footer-text">12345677886</p>
        </div>
        <div className="footer-item">
          <FaEnvelope className="footer-icon" />
          <p className="footer-text">example@.com</p>
        </div>
        <div className="footer-item">
          <FaWhatsapp className="footer-icon" />
          <p className="footer-text">123456789</p>
        </div>
        <div className="footer-item">
          <FaInstagram className="footer-icon" />
          <p className="footer-text">@instagram</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
