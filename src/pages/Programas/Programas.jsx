import { useEffect } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import { Link } from 'react-router-dom';
import './Programas.css';

const programas = [
  {
    id: 'licenciatura',
    title: 'Licenciatura en Trabajo Social',
    duration: '8 semestres',
    modality: 'Presencial',
    description: 'Formación integral con práctica comunitaria y fundamentos éticos para la intervención social profesional.',
    objectives: [
      'Formar profesionales comprometidos con la justicia social',
      'Desarrollar competencias de intervención comunitaria',
      'Promover la investigación aplicada',
      'Fortalecer habilidades de gestión de proyectos sociales'
    ],
    perfil: [
      'Capacidad de análisis crítico de la realidad social',
      'Habilidades de comunicación y trabajo en equipo',
      'Compromiso ético y social',
      'Creatividad para diseñar soluciones innovadoras'
    ],
    campo: [
      'Organizaciones de la sociedad civil',
      'Dependencias gubernamentales',
      'Instituciones educativas',
      'Empresas con programas de responsabilidad social',
      'Consultoría independiente'
    ]
  },
  {
    id: 'posgrado',
    title: 'Maestría en Intervención Social',
    duration: '4 semestres',
    modality: 'Presencial / Mixta',
    description: 'Investigación aplicada para resolver problemáticas sociales complejas con enfoque multidisciplinario.',
    objectives: [
      'Formar investigadores en ciencias sociales',
      'Desarrollar proyectos de intervención innovadores',
      'Generar conocimiento aplicable a políticas públicas',
      'Fortalecer redes de colaboración académica'
    ],
    perfil: [
      'Dominio de metodologías de investigación',
      'Capacidad de análisis de políticas públicas',
      'Liderazgo en equipos multidisciplinarios',
      'Pensamiento crítico y propositivo'
    ],
    campo: [
      'Investigación académica',
      'Diseño de políticas públicas',
      'Asesoría a organizaciones internacionales',
      'Docencia universitaria',
      'Dirección de proyectos de desarrollo'
    ]
  },
  {
    id: 'educacion-continua',
    title: 'Educación Continua',
    duration: 'Variable',
    modality: 'Presencial / Virtual',
    description: 'Cursos, diplomados y talleres para actualización profesional y desarrollo de competencias específicas.',
    objectives: [
      'Actualizar conocimientos profesionales',
      'Desarrollar habilidades especializadas',
      'Certificar competencias laborales',
      'Fomentar el aprendizaje permanente'
    ],
    perfil: [
      'Profesionales del trabajo social',
      'Personal de organizaciones civiles',
      'Servidores públicos del área social',
      'Estudiantes en formación'
    ],
    campo: [
      'Actualización profesional continua',
      'Certificación de competencias',
      'Desarrollo de proyectos específicos',
      'Networking profesional'
    ]
  }
];

export default function Programas() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible'));
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="programas">
      <HeroSection
        title="Programas Académicos"
        description="Oferta educativa de calidad para tu formación profesional en trabajo social."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Tabs de navegación */}
      <div className="programas__tabs reveal">
        <a href="#licenciatura" className="programas__tab">Licenciatura</a>
        <a href="#posgrado" className="programas__tab">Posgrado</a>
        <a href="#educacion-continua" className="programas__tab">Educación Continua</a>
      </div>

      {/* Programas */}
      {programas.map((programa, idx) => (
        <section key={programa.id} id={programa.id} className="programas__section reveal">
          <div className="programa-header">
            <div>
              <Heading level={2}>{programa.title}</Heading>
              <div className="programa-meta">
                <span className="programa-badge">{programa.duration}</span>
                <span className="programa-badge">{programa.modality}</span>
              </div>
              <Text>{programa.description}</Text>
            </div>
            <div className="programa-actions">
              <Link to="/admisiones"><Button variant="primary">Inscríbete</Button></Link>
              <Button variant="secondary">Descargar Plan</Button>
            </div>
          </div>

          <div className="programa-grid">
            <article className="programa-card">
              <div className="programa-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Objetivos</h3>
              <ul>
                {programa.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </article>

            <article className="programa-card">
              <div className="programa-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Perfil de Egreso</h3>
              <ul>
                {programa.perfil.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </article>

            <article className="programa-card">
              <div className="programa-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Campo Laboral</h3>
              <ul>
                {programa.campo.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="programas__cta reveal">
        <Heading level={2} align="center">¿Tienes dudas sobre nuestros programas?</Heading>
        <Text align="center">Solicita información personalizada y te contactaremos</Text>
        <div className="cta-buttons">
          <Link to="/contacto"><Button variant="primary">Solicitar Información</Button></Link>
          <Link to="/admisiones"><Button variant="secondary">Ver Proceso de Admisión</Button></Link>
        </div>
      </section>
    </div>
  );
}
