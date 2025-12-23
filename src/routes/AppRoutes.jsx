import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout.jsx';
import SidebarLayout from '../components/templates/SidebarLayout.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Home from '../pages/Home/Home.jsx';
import QuienesSomos from '../pages/QuienesSomos/QuienesSomos.jsx';
import NuestraHistoria from '../pages/NuestraHistoria/NuestraHistoria.jsx';
import Eventos from '../pages/Eventos/Eventos.jsx';
import Convocatorias from '../pages/Convocatorias/Convocatorias.jsx';
import Docentes from '../pages/Docentes/Docentes.jsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="nuestra-historia" element={<NuestraHistoria />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="convocatorias" element={<Convocatorias />} />
          <Route path="docentes" element={<Docentes />} />
        </Route>
        <Route element={<SidebarLayout />}> {/* optional sidebar-driven pages */}
          {/* Example placeholder: */}
          {/* <Route path="ejemplo-sidebar" element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
