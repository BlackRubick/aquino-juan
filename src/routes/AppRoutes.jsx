import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout.jsx';
import SidebarLayout from '../components/templates/SidebarLayout.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Home from '../pages/Home/Home.jsx';
import Nosotros from '../pages/Nosotros/Nosotros.jsx';
import Programas from '../pages/Programas/Programas.jsx';
import Admisiones from '../pages/Admisiones/Admisiones.jsx';
import Docentes from '../pages/Docentes/Docentes.jsx';
import VidaUniversitaria from '../pages/VidaUniversitaria/VidaUniversitaria.jsx';
import Contacto from '../pages/Contacto/Contacto.jsx';
import Eventos from '../pages/Eventos/Eventos.jsx';
import Convocatorias from '../pages/Convocatorias/Convocatorias.jsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          {/* Rutas principales */}
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="programas" element={<Programas />} />
          <Route path="admisiones" element={<Admisiones />} />
          <Route path="docentes" element={<Docentes />} />
          <Route path="vida-universitaria" element={<VidaUniversitaria />} />
          <Route path="contacto" element={<Contacto />} />
          
          {/* Rutas secundarias/específicas */}
          <Route path="eventos" element={<Eventos />} />
          <Route path="convocatorias" element={<Convocatorias />} />
          
          {/* Redirecciones de rutas antiguas */}
          <Route path="quienes-somos" element={<Navigate to="/nosotros" replace />} />
          <Route path="nuestra-historia" element={<Navigate to="/nosotros" replace />} />
        </Route>
        <Route element={<SidebarLayout />}> {/* optional sidebar-driven pages */}
          {/* Example placeholder: */}
          {/* <Route path="ejemplo-sidebar" element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
