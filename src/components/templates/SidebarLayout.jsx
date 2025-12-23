import { Outlet } from 'react-router-dom';
import Header from '../organisms/Header.jsx';
import Footer from '../organisms/Footer.jsx';
import './SidebarLayout.css';

export default function SidebarLayout({ sidebar }) {
  return (
    <div className="sidebar-layout">
      <Header />
      <div className="sidebar-layout__content">
        <aside className="sidebar-layout__sidebar">{sidebar}</aside>
        <main className="sidebar-layout__main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
