import { useEffect, useState } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import TeachersGallery from '../../components/organisms/TeachersGallery.jsx';
import EventsList from '../../components/organisms/EventsList.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import { Link } from 'react-router-dom';
import './Home.css';

const sampleTeachers = [
  { 
    id: 1, 
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop', 
    name: 'Dra. Ana María López', 
    specialty: 'Intervención social', 
    area: 'Desarrollo comunitario',
    bio: 'Doctora en Trabajo Social por la UNAM. Especialista en desarrollo comunitario y metodologías participativas.',
    education: 'Doctorado en Trabajo Social (UNAM)',
    publications: 8,
    projects: 12
  },
  { 
    id: 2, 
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop', 
    name: 'Dr. Carlos Ruiz', 
    specialty: 'Políticas públicas', 
    area: 'Políticas sociales',
    bio: 'Doctor en Políticas Públicas con enfoque en programas sociales. Investigador del Sistema Nacional de Investigadores.',
    education: 'Doctorado en Políticas Públicas (COLMEX)',
    publications: 15,
    projects: 8
  }
];

const sampleEvents = [
  { id: 1, title: 'Seminario de Trabajo Social', date: '2025-02-14', summary: 'Reflexion sobre intervenciones comunitarias.' },
  { id: 2, title: 'Foro de Derechos Humanos', date: '2025-03-10', summary: 'Dialogo con especialistas nacionales.' }
];

const callsPreview = [
  { id: 'c1', title: 'Becas de Excelencia 2025', type: 'Becas' },
  { id: 'c2', title: 'Servicio Social 2025-1', type: 'Licenciatura' },
  { id: 'c3', title: 'Posgrado en Intervención Social', type: 'Posgrado' }
];

export default function Home() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    console.log('selectedTeacher changed:', selectedTeacher);
  }, [selectedTeacher]);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('reveal--visible');
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="home">
      <HeroSection
        title="Formamos profesionales con vocación social"
        description="Compromiso con la justicia social, la participación y el bienestar comunitario."
        ctaLabel="Conoce más"
        image="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="home__section reveal">
        <Heading level={2} align="center">Explora la Escuela</Heading>
        <div className="home__cards">
          <Link to="/convocatorias" className="home-card">
            <div className="home-card__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10v4a2 2 0 0 0 2 2h2l4 3v-14l-4 3H5a2 2 0 0 0-2 2Z" fill="currentColor"/>
                <path d="M17 9a3 3 0 0 1 0 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="home-card__title">Convocatorias</h3>
            <p className="home-card__text">Becas, licenciatura y posgrado. Conoce fechas y requisitos.</p>
            <Button variant="ghost">Ir a Convocatorias</Button>
          </Link>
          <Link to="/docentes" className="home-card">
            <div className="home-card__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 20c0-3.314 2.686-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="14" y="5" width="8" height="6" rx="1" fill="currentColor"/>
                <path d="M14 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="home-card__title">Docentes</h3>
            <p className="home-card__text">Conoce a quienes impulsan tu formación.</p>
            <Button variant="ghost">Ver Docentes</Button>
          </Link>
          <Link to="/eventos" className="home-card">
            <div className="home-card__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="home-card__title">Eventos</h3>
            <p className="home-card__text">Seminarios, foros y actividades para la comunidad.</p>
            <Button variant="ghost">Ver Eventos</Button>
          </Link>
        </div>
      </section>

      {/* Indicadores clave */}
      <section className="home__section reveal">
        <div className="home__stats">
          <div className="stat">
            <span className="stat__number">+1200</span>
            <span className="stat__label">Egresados</span>
          </div>
          <div className="stat">
            <span className="stat__number">30</span>
            <span className="stat__label">Docentes</span>
          </div>
          <div className="stat">
            <span className="stat__number">40</span>
            <span className="stat__label">Convenios</span>
          </div>
          <div className="stat">
            <span className="stat__number">3</span>
            <span className="stat__label">Programas</span>
          </div>
        </div>
      </section>

      {/* Oferta académica */}
      <section className="home__section reveal">
        <Heading level={2}>Oferta académica</Heading>
        <div className="home__programs">
          <article className="program-card">
            <div className="program-card__media" style={{backgroundImage: "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop')"}} />
            <div className="program-card__body">
              <h3>Licenciatura en Trabajo Social</h3>
              <p>Formación integral con práctica comunitaria y fundamentos éticos.</p>
              <Link to="/quienes-somos"><Button variant="primary" size="sm">Conoce más</Button></Link>
            </div>
          </article>
          <article className="program-card">
            <div className="program-card__media" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop')"}} />
            <div className="program-card__body">
              <h3>Posgrado en Intervención Social</h3>
              <p>Investigación aplicada para resolver problemáticas complejas.</p>
              <Link to="/nuestra-historia"><Button variant="primary" size="sm">Plan de estudios</Button></Link>
            </div>
          </article>
          <article className="program-card">
            <div className="program-card__media" style={{backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop')"}} />
            <div className="program-card__body">
              <h3>Educación Continua</h3>
              <p>Cursos y diplomados para actualización profesional.</p>
              <Link to="/eventos"><Button variant="primary" size="sm">Calendario</Button></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="home__section reveal">
        <Heading level={2}>Nuestros docentes</Heading>
        <Text tone="muted">Conoce al equipo que impulsa la formación integral.</Text>
        <TeachersGallery teachers={sampleTeachers} onSelect={setSelectedTeacher} />
      </section>

      <section className="home__section reveal">
        <Heading level={2}>Eventos destacados</Heading>
        <EventsList events={sampleEvents} />
      </section>

      {/* Convocatorias recientes */}
      <section className="home__section reveal">
        <Heading level={2}>Convocatorias recientes</Heading>
        <div className="home__calls">
          {callsPreview.map(c => (
            <article key={c.id} className="call-card">
              <span className="call-card__chip">{c.type}</span>
              <h4 className="call-card__title">{c.title}</h4>
              <Link to="/convocatorias"><Button variant="ghost" size="sm">Ver más</Button></Link>
            </article>
          ))}
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="home__section reveal">
        <Heading level={2}>¿Por qué elegirnos?</Heading>
        <ul className="home__features">
          <li>
            <span className="feature__icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Acompañamiento cercano en prácticas comunitarias
          </li>
          <li>
            <span className="feature__icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Red de convenios con organizaciones sociales
          </li>
          <li>
            <span className="feature__icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Docentes con experiencia en intervención y política pública
          </li>
          <li>
            <span className="feature__icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Enfoque ético, participativo y con perspectiva de derechos
          </li>
        </ul>
      </section>

      {/* Modal de docente */}
      {selectedTeacher && (
        <div className="modal" role="dialog" aria-modal="true" onClick={() => setSelectedTeacher(null)}>
          <div className="modal__backdrop" />
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Cerrar" onClick={() => setSelectedTeacher(null)}>×</button>
            <img src={selectedTeacher.photo} alt={selectedTeacher.name} className="modal__img" />
            <div className="modal__body">
              <Heading level={3}>{selectedTeacher.name}</Heading>
              <div className="modal__meta">
                <span className="modal__badge">{selectedTeacher.specialty}</span>
                <span className="modal__area">{selectedTeacher.area}</span>
              </div>
              <Text>{selectedTeacher.bio}</Text>
              
              <div className="modal__details">
                <div>
                  <strong>Formación académica</strong>
                  <p>{selectedTeacher.education}</p>
                </div>
                <div className="modal__stats">
                  <div>
                    <strong>{selectedTeacher.publications}</strong>
                    <span>Publicaciones</span>
                  </div>
                  <div>
                    <strong>{selectedTeacher.projects}</strong>
                    <span>Proyectos</span>
                  </div>
                </div>
              </div>

              <Button variant="primary" onClick={() => setSelectedTeacher(null)}>Cerrar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
