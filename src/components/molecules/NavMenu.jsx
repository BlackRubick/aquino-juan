import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './NavMenu.css';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/programas', label: 'Programas' },
  { to: '/admisiones', label: 'Admisiones' },
  { to: '/docentes', label: 'Docentes' },
  { to: '/vida-universitaria', label: 'Vida Universitaria' },
  { to: '/contacto', label: 'Contacto' }
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-menu">
      <button aria-label="Abrir menú" className="nav-menu__toggle" onClick={() => setOpen((v) => !v)}>
        <span className="nav-menu__bar" />
        <span className="nav-menu__bar" />
        <span className="nav-menu__bar" />
      </button>
      <ul className={open ? 'nav-menu__list nav-menu__list--open' : 'nav-menu__list'} onClick={() => setOpen(false)}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')} to={link.to}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
