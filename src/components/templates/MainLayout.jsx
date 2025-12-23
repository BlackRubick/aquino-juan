import { Outlet } from 'react-router-dom';
import Header from '../organisms/Header.jsx';
import Footer from '../organisms/Footer.jsx';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
