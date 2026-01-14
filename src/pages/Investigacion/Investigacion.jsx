import { useEffect } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import './Investigacion.css';

export default function Investigacion() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible'));
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const lineas = [
    {
      id: 1,
      title: 'Política Social y Desarrollo Comunitario',
      description: 'Análisis de políticas públicas y su impacto en comunidades vulnerables, propuestas de intervención social.',
      icon: '01',
      proyectos: 5
    },
    {
      id: 2,
      title: 'Familia y Relaciones Sociales',
      description: 'Estudios sobre dinámicas familiares, violencia intrafamiliar, y fortalecimiento de redes de apoyo.',
      icon: '02',
      proyectos: 8
    },
    {
      id: 3,
      title: 'Salud y Bienestar Social',
      description: 'Investigación en promoción de la salud, prevención de adicciones y atención a grupos vulnerables.',
      icon: '03',
      proyectos: 6
    },
    {
      id: 4,
      title: 'Educación y Formación Social',
      description: 'Innovación educativa, inclusión escolar y formación profesional en trabajo social.',
      icon: '04',
      proyectos: 4
    }
  ];

  const proyectos = [
    {
      id: 1,
      title: 'Prevención de Violencia de Género en Comunidades Rurales',
      investigador: 'Dra. María González',
      linea: 'Familia y Relaciones Sociales',
      status: 'En curso',
      year: '2024-2025'
    },
    {
      id: 2,
      title: 'Impacto de Programas Sociales en Chiapas',
      investigador: 'Dr. Carlos Méndez',
      linea: 'Política Social y Desarrollo Comunitario',
      status: 'En curso',
      year: '2024-2026'
    },
    {
      id: 3,
      title: 'Salud Mental en Estudiantes Universitarios',
      investigador: 'Mtra. Ana López',
      linea: 'Salud y Bienestar Social',
      status: 'Concluido',
      year: '2023-2024'
    }
  ];

  const publicaciones = [
    {
      title: 'Trabajo Social Comunitario en Chiapas: Desafíos y Oportunidades',
      autores: 'González, M., Méndez, C.',
      revista: 'Revista Mexicana de Trabajo Social',
      year: 2024,
      tipo: 'Artículo'
    },
    {
      title: 'Metodologías Participativas en Intervención Social',
      autores: 'López, A., et al.',
      revista: 'Editorial ESTS',
      year: 2023,
      tipo: 'Libro'
    }
  ];

  return (
    <div className="investigacion">
      <HeroSection
        title="Investigación"
        description="Generando conocimiento para transformar realidades sociales"
        image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Líneas de Investigación */}
      <section className="investigacion__section reveal">
        <div className="investigacion__container">
          <Heading level={2} align="center">Líneas de Investigación</Heading>
          <Text align="center">Áreas prioritarias donde desarrollamos proyectos de investigación</Text>

          <div className="lineas-grid">
            {lineas.map((linea) => (
              <article key={linea.id} className="linea-card">
                <div className="linea-card__icon">{linea.icon}</div>
                <h3>{linea.title}</h3>
                <p>{linea.description}</p>
                <div className="linea-card__footer">
                  <span className="badge">{linea.proyectos} proyectos activos</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Activos */}
      <section className="investigacion__section investigacion__section--alt reveal">
        <div className="investigacion__container">
          <Heading level={2} align="center">Proyectos de Investigación</Heading>
          <Text align="center">Conoce nuestros proyectos actuales y concluidos</Text>

          <div className="proyectos-list">
            {proyectos.map((proyecto) => (
              <article key={proyecto.id} className="proyecto-card">
                <div className="proyecto-card__header">
                  <h3>{proyecto.title}</h3>
                  <span className={`status-badge status-badge--${proyecto.status === 'En curso' ? 'active' : 'completed'}`}>
                    {proyecto.status}
                  </span>
                </div>
                <div className="proyecto-card__body">
                  <p><strong>Investigador responsable:</strong> {proyecto.investigador}</p>
                  <p><strong>Línea de investigación:</strong> {proyecto.linea}</p>
                  <p><strong>Periodo:</strong> {proyecto.year}</p>
                </div>
                <Button variant="secondary" size="small">Ver detalles</Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Publicaciones */}
      <section className="investigacion__section reveal">
        <div className="investigacion__container">
          <Heading level={2} align="center">Publicaciones Recientes</Heading>
          <Text align="center">Resultados de nuestras investigaciones</Text>

          <div className="publicaciones-list">
            {publicaciones.map((pub, index) => (
              <article key={index} className="publicacion-card">
                <div className="publicacion-card__type">{pub.tipo}</div>
                <h3>{pub.title}</h3>
                <p className="publicacion-card__autores">{pub.autores}</p>
                <p className="publicacion-card__revista">{pub.revista} ({pub.year})</p>
              </article>
            ))}
          </div>

          <div className="cta-section">
            <Button variant="primary" size="large">Ver todas las publicaciones</Button>
          </div>
        </div>
      </section>

      {/* Colaboraciones */}
      <section className="investigacion__section investigacion__section--alt reveal">
        <div className="investigacion__container">
          <Heading level={2} align="center">Colaboraciones y Redes</Heading>
          <Text align="center">Trabajamos en conjunto con instituciones nacionales e internacionales</Text>

          <div className="colaboraciones-grid">
            <div className="colaboracion-item">
              <h3>Universidades</h3>
              <ul>
                <li>UNAM - Escuela Nacional de Trabajo Social</li>
                <li>Universidad Autónoma de Chiapas</li>
                <li>Universidad de Barcelona</li>
              </ul>
            </div>
            <div className="colaboracion-item">
              <h3>Organizaciones</h3>
              <ul>
                <li>Consejo Nacional de Trabajo Social</li>
                <li>Red Latinoamericana de Trabajo Social</li>
                <li>ONU - Desarrollo Social</li>
              </ul>
            </div>
            <div className="colaboracion-item">
              <h3>Gobierno</h3>
              <ul>
                <li>Secretaría de Bienestar</li>
                <li>Gobierno del Estado de Chiapas</li>
                <li>Institutos Municipales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="investigacion__cta reveal">
        <div className="investigacion__cta-content">
          <Heading level={2}>¿Interesado en colaborar?</Heading>
          <Text>Si eres investigador o estudiante y deseas participar en nuestros proyectos, contáctanos</Text>
          <Button variant="primary" size="large">Contactar</Button>
        </div>
      </section>
    </div>
  );
}
