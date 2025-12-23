import { useState, useEffect, useMemo } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import TeachersGallery from '../../components/organisms/TeachersGallery.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import './Docentes.css';

const teachers = [
  { 
    id: 1, 
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop', 
    name: 'Dra. Ana María López Hernández', 
    specialty: 'Intervención social', 
    area: 'Desarrollo comunitario',
    bio: 'Doctora en Trabajo Social por la UNAM. Especialista en desarrollo comunitario y metodologías participativas. Más de 15 años de experiencia en proyectos de intervención social en comunidades rurales.',
    education: 'Doctorado en Trabajo Social (UNAM), Maestría en Desarrollo Comunitario',
    publications: 8,
    projects: 12
  },
  { 
    id: 2, 
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop', 
    name: 'Dr. Carlos Ruiz Vega', 
    specialty: 'Políticas públicas', 
    area: 'Políticas sociales',
    bio: 'Doctor en Políticas Públicas con enfoque en programas sociales. Investigador del Sistema Nacional de Investigadores (SNI). Ha colaborado con gobiernos estatales en diseño de políticas de inclusión.',
    education: 'Doctorado en Políticas Públicas (COLMEX), Maestría en Administración Pública',
    publications: 15,
    projects: 8
  },
  { 
    id: 3, 
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop', 
    name: 'Mtra. María Elena Pérez Soto', 
    specialty: 'Familia y educación', 
    area: 'Desarrollo comunitario',
    bio: 'Maestra en Educación Familiar con especialidad en acompañamiento psicopedagógico. Trabaja con familias en situación de vulnerabilidad y en programas de prevención de violencia intrafamiliar.',
    education: 'Maestría en Educación Familiar, Licenciatura en Trabajo Social',
    publications: 5,
    projects: 10
  },
  { 
    id: 4, 
    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400&auto=format&fit=crop', 
    name: 'Mtro. Roberto Sánchez Medina', 
    specialty: 'Derechos humanos', 
    area: 'Investigación aplicada',
    bio: 'Maestro en Derechos Humanos y Democracia. Coordinador de proyectos de vinculación con organizaciones de la sociedad civil. Experiencia en defensa de derechos de poblaciones migrantes.',
    education: 'Maestría en Derechos Humanos (Flacso), Licenciatura en Trabajo Social',
    publications: 6,
    projects: 15
  },
  { 
    id: 5, 
    photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400&auto=format&fit=crop', 
    name: 'Dra. Patricia Ramírez Ortiz', 
    specialty: 'Metodología de la investigación', 
    area: 'Investigación aplicada',
    bio: 'Doctora en Ciencias Sociales. Subdirectora Académica de la institución. Especialista en metodologías cualitativas y cuantitativas aplicadas al trabajo social. Autora de varios libros de texto.',
    education: 'Doctorado en Ciencias Sociales, Maestría en Investigación Social',
    publications: 20,
    projects: 6
  },
  { 
    id: 6, 
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop', 
    name: 'Dr. Jesús Aquino Juan', 
    specialty: 'Trabajo social comunitario', 
    area: 'Desarrollo comunitario',
    bio: 'Doctor en Ciencias Sociales. Fundador y Director General de la institución. Pionero en metodologías de intervención comunitaria en México. Reconocimiento nacional por su trayectoria en trabajo social.',
    education: 'Doctorado en Ciencias Sociales (UNAM), Maestría en Trabajo Social',
    publications: 25,
    projects: 30
  },
  { 
    id: 7, 
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop', 
    name: 'Mtra. Laura Martínez Flores', 
    specialty: 'Género y diversidad', 
    area: 'Políticas sociales',
    bio: 'Maestra en Estudios de Género. Coordinadora del área de género y diversidad. Trabaja en proyectos de prevención de violencia de género y empoderamiento de mujeres en comunidades marginadas.',
    education: 'Maestría en Estudios de Género (UNAM), Licenciatura en Trabajo Social',
    publications: 7,
    projects: 14
  },
  { 
    id: 8, 
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop', 
    name: 'Mtro. Fernando García López', 
    specialty: 'Gestión de proyectos sociales', 
    area: 'Desarrollo comunitario',
    bio: 'Maestro en Gestión y Políticas Públicas. Especialista en diseño, implementación y evaluación de proyectos sociales. Ha colaborado con organismos internacionales como PNUD y ONU Hábitat.',
    education: 'Maestría en Gestión Pública (CIDE), Licenciatura en Trabajo Social',
    publications: 4,
    projects: 18
  }
];

export default function Docentes() {
  const [selected, setSelected] = useState(null);
  const [areaFilter, setAreaFilter] = useState('Todas');
  
  const areas = ['Todas', 'Desarrollo comunitario', 'Políticas sociales', 'Investigación aplicada'];
  const filteredTeachers = useMemo(() => {
    return areaFilter === 'Todas' ? teachers : teachers.filter(t => t.area === areaFilter);
  }, [areaFilter]);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible')), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="docentes">
      <HeroSection
        title="Nuestro claustro docente"
        description="Conoce a los profesionales que guían la formación académica y el desarrollo de competencias de nuestros estudiantes con experiencia, compromiso y excelencia."
        ctaLabel="Conoce al equipo"
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Estadísticas del claustro */}
      <section className="docentes__section reveal">
        <div className="docentes__stats">
          <div className="stat-card">
            <div className="stat-card__icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 21v-4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21v-2a3 3 0 0 0-3-3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="stat-card__number">{teachers.length}</span>
            <span className="stat-card__label">Docentes</span>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="stat-card__number">{teachers.reduce((sum, t) => sum + t.publications, 0)}</span>
            <span className="stat-card__label">Publicaciones</span>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="stat-card__number">{teachers.reduce((sum, t) => sum + t.projects, 0)}</span>
            <span className="stat-card__label">Proyectos activos</span>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15l-3.5 2 1-4L6 9.5l4-.5L12 5l2 4 4 .5-3.5 3.5 1 4z" fill="currentColor"/>
              </svg>
            </div>
            <span className="stat-card__number">{teachers.filter(t => t.education.includes('Doctor')).length}</span>
            <span className="stat-card__label">Doctores</span>
          </div>
        </div>
      </section>

      {/* Filtros y galería */}
      <section className="docentes__section reveal">
        <div className="docentes__header">
          <div>
            <Heading level={2}>Conoce a nuestro equipo</Heading>
            <Text tone="muted">Filtra por área de especialización</Text>
          </div>
        </div>

        <div className="docentes__filters">
          {areas.map((area) => (
            <Button key={area} variant={areaFilter === area ? 'primary' : 'ghost'} onClick={() => setAreaFilter(area)}>{area}</Button>
          ))}
        </div>

        <TeachersGallery teachers={filteredTeachers} onSelect={setSelected} />
      </section>

      {/* Áreas de investigación */}
      <section className="docentes__section reveal">
        <Heading level={2}>Líneas de investigación</Heading>
        <div className="docentes__research">
          <article className="research-card">
            <h3>Desarrollo comunitario</h3>
            <p>Metodologías participativas, diagnósticos comunitarios y estrategias de intervención territorial.</p>
            <span className="research-card__count">{teachers.filter(t => t.area === 'Desarrollo comunitario').length} investigadores</span>
          </article>
          <article className="research-card">
            <h3>Políticas sociales</h3>
            <p>Análisis de políticas públicas, evaluación de programas sociales y diseño de estrategias de inclusión.</p>
            <span className="research-card__count">{teachers.filter(t => t.area === 'Políticas sociales').length} investigadores</span>
          </article>
          <article className="research-card">
            <h3>Investigación aplicada</h3>
            <p>Metodologías cualitativas y cuantitativas, investigación-acción y sistematización de experiencias.</p>
            <span className="research-card__count">{teachers.filter(t => t.area === 'Investigación aplicada').length} investigadores</span>
          </article>
        </div>
      </section>

      {/* Modal mejorado */}
      {selected && (
        <div className="modal" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
          <div className="modal__backdrop" />
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Cerrar" onClick={() => setSelected(null)}>×</button>
            <img src={selected.photo} alt={selected.name} className="modal__img" />
            <div className="modal__body">
              <Heading level={3}>{selected.name}</Heading>
              <div className="modal__meta">
                <span className="modal__badge">{selected.specialty}</span>
                <span className="modal__area">{selected.area}</span>
              </div>
              <Text>{selected.bio}</Text>
              
              <div className="modal__details">
                <div>
                  <strong>Formación académica</strong>
                  <p>{selected.education}</p>
                </div>
                <div className="modal__stats">
                  <div>
                    <strong>{selected.publications}</strong>
                    <span>Publicaciones</span>
                  </div>
                  <div>
                    <strong>{selected.projects}</strong>
                    <span>Proyectos</span>
                  </div>
                </div>
              </div>

              <Button variant="primary" onClick={() => setSelected(null)}>Cerrar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
