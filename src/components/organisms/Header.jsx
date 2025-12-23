import NavMenu from '../molecules/NavMenu.jsx';
import Icon from '../atoms/Icon.jsx';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <Icon src="/assets/icons/logo.svg" alt="Logo" size={36} />
        <div>
          <span className="header__title">Escuela Superior de Trabajo Social</span>
          <span className="header__subtitle">Jesus Aquino Juan</span>
        </div>
      </div>
      <NavMenu />
    </header>
  );
}
