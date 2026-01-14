import { useEffect, useState } from 'react';
import TeachersGallery from '../../components/organisms/TeachersGallery.jsx';
import EventsList from '../../components/organisms/EventsList.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import { Link } from 'react-router-dom';
import inicioImg from '../../assets/images/inicio.jpg';
import tourVideo from '../../assets/images/tour.mp4';
import directoraImg from '../../assets/images/directora-1.JPG';
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
  { 
    id: 1, 
    title: 'Presentación de directora', 
    date: '2025-10-21', 
    summary: 'El día de hoy 21 de octubre del presente año se presentó ante la comunidad educativa la Lic. Gabriela Esperanza Méndez Bermúdez como nueva directora de la Escuela Superior de Trabajo Social "Jesús Aquino Juan"',
    image: directoraImg,
    featured: true
  },
  { 
    id: 2, 
    title: 'Congreso Internacional de Trabajo Social', 
    date: '2025-10-23', 
    summary: 'El pasado 23 de octubre de 2025 se llevó a cabo el VII Congreso Internacional de Trabajo Social, bajo el lema "Tejiendo Caminos de Trabajo Social, Ante los Nuevos Contextos Emergentes".',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 3, 
    title: '47 años de la Profesionalización del trabajo Social en Chiapas', 
    date: '2025-09-24', 
    summary: 'Nuestro aniversario momentos para celebrar las alegrías de hoy, las memorias del ayer y las esperanzas del mañana.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop'
  }
];

const callsPreview = [
  { id: 'c1', title: 'Becas de Excelencia 2026', type: 'Becas' },
  { id: 'c2', title: 'Servicio Social 2026-1', type: 'Licenciatura' },
  { id: 'c3', title: 'Posgrado en Intervención Social', type: 'Posgrado' }
];

const testimonios = [
  {
    id: 1,
    nombre: 'María González Hernández',
    generacion: 'Generación 2020',
    puesto: 'Coordinadora DIF Chiapas',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    texto: 'Gracias a la formación que recibí, hoy coordino programas sociales en el DIF estatal. La práctica en campo y el acompañamiento de los docentes fue fundamental.'
  },
  {
    id: 2,
    nombre: 'Carlos Méndez López',
    generacion: 'Generación 2019',
    puesto: 'Director ONG "Semillas de Cambio"',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    texto: 'Mi formación en la ESTS me dio las herramientas para fundar mi propia organización. Hoy impactamos a más de 500 familias en comunidades rurales.'
  },
  {
    id: 3,
    nombre: 'Ana Patricia Ruiz',
    generacion: 'Generación 2021',
    puesto: 'Trabajadora Social, Hospital General',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    texto: 'La calidad académica y el enfoque ético me prepararon para trabajar en el sector salud. Cada día ayudo a familias en situación vulnerable.'
  }
];

const faqs = [
  {
    pregunta: '¿Cuánto dura la licenciatura?',
    respuesta: 'La Licenciatura en Trabajo Social tiene una duración de 8 semestres (4 años) en modalidad presencial.'
  },
  {
    pregunta: '¿Qué requisitos necesito?',
    respuesta: 'Certificado de bachillerato, acta de nacimiento, CURP, comprobante de domicilio y aprobar el examen de admisión.'
  },
  {
    pregunta: '¿Tienen becas disponibles?',
    respuesta: 'Sí, ofrecemos becas del 20% al 50% según tu promedio y situación socioeconómica. También contamos con convenios de financiamiento.'
  },
  {
    pregunta: '¿Cuál es el costo?',
    respuesta: 'La inversión mensual va desde $1,800 MXN. Incluye acceso a biblioteca, laboratorios y actividades extracurriculares.'
  },
  {
    pregunta: '¿El título está reconocido?',
    respuesta: 'Sí, contamos con Reconocimiento de Validez Oficial de Estudios (RVOE) por la Secretaría de Educación. Tu título tiene validez oficial en todo México.'
  }
];

export default function Home() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [faqOpen, setFaqOpen] = useState(null);

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
      {/* SECCIÓN 1: HERO */}
      <section className="hero">
        <div className="hero__background" style={{backgroundImage: `url(${inicioImg})`}} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Licenciatura en Trabajo Social
              <span className="hero__subtitle-text">Transforma vidas, construye comunidades</span>
            </h1>
            <p className="hero__description">
              Institución con 48 años formando agentes de cambio social en Chiapas
            </p>
            <div className="hero__actions">
              <Link to="/admisiones">
                <Button variant="primary" size="large">Inscríbete Ahora 2026</Button>
              </Link>
              <Link to="/programas">
                <Button variant="secondary" size="large">Conoce el Plan de Estudios</Button>
              </Link>
            </div>
            <div className="hero__badges">
              <div className="hero-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>RVOE Reconocido</span>
              </div>
              <div className="hero-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Titulación 100%</span>
              </div>
              <div className="hero-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Becas Disponibles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: BÚSQUEDA RÁPIDA */}
      <section className="home__section reveal">
        <Heading level={2} align="center">Acceso Rápido</Heading>
        <div className="home__cards">
          <Link to="/admisiones" className="home-card">
            <div className="home-card__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="home-card__title">Requisitos</h3>
            <p className="home-card__text">Documentos necesarios para inscribirte</p>
            <Button variant="ghost">Ver requisitos</Button>
          </Link>
          <Link to="/admisiones" className="home-card">
            <div className="home-card__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="home-card__title">Costos</h3>
            <p className="home-card__text">Inversión mensual y opciones de becas</p>
            <Button variant="ghost">Ver costos</Button>
          </Link>
          <Link to="/convocatorias" className="home-card">
            <div className="home-card__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="home-card__title">Convocatorias</h3>
            <p className="home-card__text">Fechas y procesos de inscripción</p>
            <Button variant="ghost">Ver fechas</Button>
          </Link>
          <Link to="/docentes" className="home-card">
            <div className="home-card__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="home-card__title">Docentes</h3>
            <p className="home-card__text">Conoce a nuestro equipo académico</p>
            <Button variant="ghost">Ver docentes</Button>
          </Link>
        </div>
      </section>

      {/* SECCIÓN 3: OFERTA ACADÉMICA */}
      <section className="home__section home__section--alt reveal">
        <Heading level={2} align="center">¿Qué vas a estudiar?</Heading>
        <div className="home__programs">
          <article className="program-card-new">
            <div className="program-card-new__icon">📖</div>
            <h3>Licenciatura en Trabajo Social</h3>
            <ul className="program-card-new__details">
              <li><strong>Duración:</strong> 8 semestres</li>
              <li><strong>Título:</strong> Oficial con RVOE</li>
              <li><strong>Modalidad:</strong> Presencial</li>
              <li><strong>Horario:</strong> Matutino/Vespertino</li>
            </ul>
            <Link to="/programas"><Button variant="primary">Ver Plan de Estudios</Button></Link>
          </article>
          <article className="program-card-new">
            <div className="program-card-new__icon">�</div>
            <h3>Posgrado en Intervención Social</h3>
            <ul className="program-card-new__details">
              <li><strong>Duración:</strong> 4 semestres</li>
              <li><strong>Título:</strong> Maestría</li>
              <li><strong>Modalidad:</strong> Sabatino</li>
              <li><strong>Horario:</strong> 8:00 - 16:00</li>
            </ul>
            <Link to="/programas"><Button variant="primary">Más Información</Button></Link>
          </article>
          <article className="program-card-new">
            <div className="program-card-new__icon">⭐</div>
            <h3>Educación Continua</h3>
            <ul className="program-card-new__details">
              <li><strong>Duración:</strong> Variable</li>
              <li><strong>Certificación:</strong> Diplomados</li>
              <li><strong>Modalidad:</strong> Presencial/Online</li>
              <li><strong>Horario:</strong> Flexible</li>
            </ul>
            <Link to="/programas"><Button variant="primary">Ver Programas</Button></Link>
          </article>
        </div>
      </section>

      {/* SECCIÓN 4: PROCESO DE ADMISIÓN */}
      <section className="home__section reveal">
        <Heading level={2} align="center">Cómo inscribirte en 4 pasos</Heading>
        <div className="admission-process">
          <div className="process-step">
            <div className="process-step__number">1</div>
            <h3>Solicita informes</h3>
            <p>Contacta con nosotros por teléfono, correo o visítanos</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="process-step__number">2</div>
            <h3>Presenta examen</h3>
            <p>Realiza el examen de admisión en la fecha programada</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="process-step__number">3</div>
            <h3>Entrega documentos</h3>
            <p>Presenta tu documentación completa</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="process-step__number">4</div>
            <h3>¡Bienvenido!</h3>
            <p>Recibe tu carta de aceptación e inicia clases</p>
          </div>
        </div>
        <div className="admission-info">
          <div className="admission-info__item">
            <div>
              <strong>Próxima convocatoria</strong>
              <p>Enero 2026</p>
            </div>
          </div>
          <div className="admission-info__item">
            <div>
              <strong>Inversión mensual</strong>
              <p>Desde $1,800 MXN</p>
            </div>
          </div>
          <div className="admission-info__item">
            <div>
              <strong>Becas disponibles</strong>
              <p>Del 20% al 50%</p>
            </div>
          </div>
        </div>
        <div className="cta-center">
          <Link to="/admisiones">
            <Button variant="primary" size="large">Iniciar Proceso de Inscripción</Button>
          </Link>
        </div>
      </section>

      {/* SECCIÓN 5: NÚMEROS QUE IMPORTAN */}
      <section className="home__section home__section--alt reveal">
        <Heading level={2} align="center">Números que nos respaldan</Heading>
        <div className="home__stats">
          <div className="stat-new">
            <div className="stat-new__number">+1,200</div>
            <div className="stat-new__label">Egresados</div>
            <div className="stat-new__context">trabajando en México</div>
          </div>
          <div className="stat-new">
            <div className="stat-new__number">30</div>
            <div className="stat-new__label">Docentes</div>
            <div className="stat-new__context">especializados activos</div>
          </div>
          <div className="stat-new">
            <div className="stat-new__number">40</div>
            <div className="stat-new__label">Convenios</div>
            <div className="stat-new__context">de prácticas profesionales</div>
          </div>
          <div className="stat-new">
            <div className="stat-new__number">3</div>
            <div className="stat-new__label">Programas</div>
            <div className="stat-new__context">académicos vigentes</div>
          </div>
        </div>
        <div className="home__stats-extra">
          <div className="stat-extra">
            <strong>95%</strong>
            <span>Empleabilidad</span>
          </div>
          <div className="stat-extra">
            <strong>100%</strong>
            <span>Titulación</span>
          </div>
          <div className="stat-extra">
            <strong>40%</strong>
            <span>Con becas</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CAMPO LABORAL */}
      <section className="home__section reveal">
        <Heading level={2} align="center">¿Por qué estudiar Trabajo Social?</Heading>
        <p className="campo-laboral__subtitle">Campo laboral amplio y en constante crecimiento</p>
        <div className="campo-laboral">
          <div className="campo-laboral__main">
            <h3>Como trabajador social podrás laborar en:</h3>
            <div className="campo-laboral__grid">
              <div className="campo-item">
                <div className="campo-item__icon">01</div>
                <h4>Instituciones Gubernamentales</h4>
                <p>DIF, SEDESOL, Secretaría de Salud, Secretaría de Educación</p>
              </div>
              <div className="campo-item">
                <div className="campo-item__icon">02</div>
                <h4>ONGs y Organizaciones Civiles</h4>
                <p>Desarrollo comunitario, derechos humanos, medio ambiente</p>
              </div>
              <div className="campo-item">
                <div className="campo-item__icon">03</div>
                <h4>Hospitales y Clínicas</h4>
                <p>Atención a pacientes, programas de prevención, salud mental</p>
              </div>
              <div className="campo-item">
                <div className="campo-item__icon">04</div>
                <h4>Escuelas y Centros Comunitarios</h4>
                <p>Orientación educativa, prevención de violencia, inclusión</p>
              </div>
              <div className="campo-item">
                <div className="campo-item__icon">05</div>
                <h4>Empresas Privadas</h4>
                <p>Responsabilidad Social Empresarial, bienestar laboral</p>
              </div>
              <div className="campo-item">
                <div className="campo-item__icon">06</div>
                <h4>Sistema de Justicia</h4>
                <p>Centros de reinserción, atención a víctimas, mediación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: VIDEO TOUR */}
      <section className="home__section home__section--alt reveal">
        <Heading level={2} align="center">Conoce Nuestras Instalaciones</Heading>
        <div className="home__tour">
          <div className="home__tour-wrapper">
            <video className="home__tour-video" controls autoPlay muted loop>
              <source src={tourVideo} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <div className="home__tour-play-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <div className="tour-features">
            <div className="tour-feature">
              <span className="tour-feature__icon">✓</span>
              <span>Aulas equipadas</span>
            </div>
            <div className="tour-feature">
              <span className="tour-feature__icon">✓</span>
              <span>Biblioteca especializada</span>
            </div>
            <div className="tour-feature">
              <span className="tour-feature__icon">✓</span>
              <span>Centro de cómputo</span>
            </div>
            <div className="tour-feature">
              <span className="tour-feature__icon">✓</span>
              <span>Áreas de convivencia</span>
            </div>
            <div className="tour-feature">
              <span className="tour-feature__icon">✓</span>
              <span>Salones de prácticas</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: TESTIMONIOS */}
      <section className="home__section reveal">
        <Heading level={2} align="center">Lo que dicen nuestros egresados</Heading>
        <p className="testimonios__subtitle">Historias reales de éxito profesional</p>
        <div className="testimonios-grid">
          {testimonios.map((testimonio) => (
            <article key={testimonio.id} className="testimonio-card-home">
              <div className="testimonio-card-home__header">
                <img src={testimonio.foto} alt={testimonio.nombre} />
                <div>
                  <h3>{testimonio.nombre}</h3>
                  <p className="testimonio-card-home__gen">{testimonio.generacion}</p>
                  <p className="testimonio-card-home__puesto">{testimonio.puesto}</p>
                </div>
              </div>
              <p className="testimonio-card-home__texto">"{testimonio.texto}"</p>
            </article>
          ))}
        </div>
        <div className="cta-center">
          <Link to="/vida-universitaria">
            <Button variant="primary">Ver más historias de éxito</Button>
          </Link>
        </div>
      </section>

      {/* SECCIÓN 9: EVENTOS DESTACADOS */}
      <section className="home__section home__section--alt reveal">
        <Heading level={2} align="center">Eventos destacados</Heading>
        <EventsList events={sampleEvents} />
        <div className="cta-center">
          <Link to="/vida-universitaria">
            <Button variant="primary">Ver todos los eventos</Button>
          </Link>
        </div>
      </section>

      {/* SECCIÓN 10: CONVOCATORIAS VIGENTES */}
      <section className="home__section reveal">
        <Heading level={2} align="center">Convocatorias vigentes</Heading>
        <div className="home__calls">
          {callsPreview.map(c => (
            <article key={c.id} className="call-card">
              <span className="call-card__chip">{c.type}</span>
              <h4 className="call-card__title">{c.title}</h4>
              <Link to="/convocatorias"><Button variant="ghost" size="sm">Ver más</Button></Link>
            </article>
          ))}
        </div>
        <div className="cta-center">
          <Link to="/convocatorias">
            <Button variant="primary">Ver todas las convocatorias</Button>
          </Link>
        </div>
      </section>

      {/* SECCIÓN 11: DOCENTES DESTACADOS */}
      <section className="home__section home__section--alt reveal">
        <Heading level={2} align="center">Docentes destacados</Heading>
        <Text align="center" tone="muted">Profesionales comprometidos con tu formación</Text>
        <TeachersGallery teachers={sampleTeachers} onSelect={setSelectedTeacher} />
        <div className="cta-center">
          <Link to="/docentes">
            <Button variant="primary">Conocer todo el equipo</Button>
          </Link>
        </div>
      </section>

      {/* SECCIÓN 12: PREGUNTAS FRECUENTES */}
      <section className="home__section reveal">
        <Heading level={2} align="center">Preguntas Frecuentes</Heading>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${faqOpen === index ? 'active' : ''}`}
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
              >
                <span>{faq.pregunta}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`faq-icon ${faqOpen === index ? 'rotated' : ''}`}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {faqOpen === index && (
                <div className="faq-answer">
                  <p>{faq.respuesta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="cta-center">
          <Link to="/contacto">
            <Button variant="secondary">¿Tienes más preguntas? Contáctanos</Button>
          </Link>
        </div>
      </section>

      {/* SECCIÓN 13: CTA FINAL */}
      <section className="home__cta-final reveal">
        <div className="home__cta-content">
          <Heading level={2} align="center">¿Listo para comenzar tu carrera en Trabajo Social?</Heading>
          <Text align="center">Da el primer paso hacia tu futuro profesional</Text>
          <div className="home__cta-buttons">
            <Link to="/admisiones">
              <Button variant="primary" size="large">Solicita Información</Button>
            </Link>
            <Link to="/contacto">
              <Button variant="secondary" size="large">Agenda una Visita</Button>
            </Link>
            <Link to="/convocatorias">
              <Button variant="ghost" size="large">Ver Convocatoria</Button>
            </Link>
          </div>
        </div>
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
