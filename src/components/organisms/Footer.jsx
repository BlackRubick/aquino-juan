import { Link } from 'react-router-dom';
import ContactForm from '../molecules/ContactForm.jsx';
import Heading from '../atoms/Heading.jsx';
import Text from '../atoms/Text.jsx';
import facebookIcon from '../../assets/icons/facebook.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import emailIcon from '../../assets/icons/email.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Sección de contacto */}
      <section className="footer__contact">
        <div className="footer__contact-content">
          <div className="footer__contact-info">
            <Heading level={2}>Contáctanos</Heading>
            <Text>¿Tienes dudas o comentarios? Escríbenos y te responderemos a la brevedad.</Text>
            
            <div className="footer__info-items">
              <div className="footer__info-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>contacto@trabajosocial.edu.mx</span>
              </div>
              <div className="footer__info-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>(52) 961 614 1915</span>
              </div>
              <div className="footer__info-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Km. 6.5 Carretera Tuxtla Gutiérrez-Chiapa de Corzo, Satélite Loma Larga Tuxtla Gutiérrez, Chiapas</span>
              </div>
            </div>
            <div className="footer__social-section">
              <Heading level={3}>Conócenos</Heading>
              <div className="footer__social">
                <a href="https://www.facebook.com/TS.Chiapas" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://www.youtube.com/@escuelasuperiordetrabajoso4213" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link">
                  <img src={youtubeIcon} alt="YouTube" />
                </a>
                <a href="mailto:info@example.com" aria-label="Email" className="footer__social-link">
                  <img src={emailIcon} alt="Email" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__contact-form">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer inferior */}
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <Text tone="muted">© {new Date().getFullYear()} Escuela Superior de Trabajo Social Jesús Aquino Juan. Todos los derechos reservados.</Text>
          <div className="footer__links">
            <Link to="/quienes-somos">Quienes somos</Link>
            <Link to="/nuestra-historia">Historia</Link>
            <a href="#">Aviso de privacidad</a>
            <a href="#">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}