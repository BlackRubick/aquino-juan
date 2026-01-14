import { Link } from 'react-router-dom';
import Heading from '../atoms/Heading.jsx';
import Text from '../atoms/Text.jsx';
import facebookIcon from '../../assets/icons/facebook.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import emailIcon from '../../assets/icons/email.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      {/* Footer inferior */}
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <div className="footer__column">
            <Text tone="muted">© {new Date().getFullYear()} Escuela Superior de Trabajo Social Jesús Aquino Juan. Todos los derechos reservados.</Text>
          </div>
          <div className="footer__column">
            <h4>Mapa del Sitio</h4>
            <div className="footer__links">
              <Link to="/nosotros">Nosotros</Link>
              <Link to="/programas">Programas</Link>
              <Link to="/admisiones">Admisiones</Link>
              <Link to="/docentes">Docentes</Link>
            </div>
          </div>
          <div className="footer__column">
            <h4>Legal</h4>
            <div className="footer__links">
              <a href="#">Aviso de privacidad</a>
              <a href="#">Términos y condiciones</a>
              <a href="#">Transparencia</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}