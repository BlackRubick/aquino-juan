import { Link } from 'react-router-dom';
import NavMenu from '../molecules/NavMenu.jsx';
import Icon from '../atoms/Icon.jsx';
import escudoImg from '../../assets/images/escudo.png';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__brand">
        <img src={escudoImg} alt="Escudo ESTS" className="header__logo" />
        <div>
          <span className="header__title">Escuela Superior de Trabajo Social</span>
          <span className="header__subtitle">Jesus Aquino Juan</span>
        </div>
      </Link>
      <NavMenu />
    </header>
  );
}
