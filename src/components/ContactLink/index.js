import { FaWhatsapp } from "react-icons/fa";
import { FAGUNDES_TEL, WHATS_MSG } from "../../consts";
import './styles.css'

function ContactButton() {
    return ( <a 
        className="contact-link"
        href={`https://wa.me/55${FAGUNDES_TEL}?text=${WHATS_MSG}`} 
        target="_blank" rel="noreferrer" 
    >
      <FaWhatsapp size={48} color="white"  />
    </a> );
}

export default ContactButton;