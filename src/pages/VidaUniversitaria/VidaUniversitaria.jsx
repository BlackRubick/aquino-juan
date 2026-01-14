import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import diaMuertosImg from '../../assets/images/diademuertos.JPG';
import fiscaliaImg from '../../assets/images/fiscalia.JPG';
import semillasImg from '../../assets/images/semillas.JPG';
import './VidaUniversitaria.css';

export default function VidaUniversitaria() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible'));
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const servicios = [
    {
      id: 1,
      title: 'Biblioteca',
      description: 'Acervo bibliográfico especializado en Trabajo Social, con espacios de estudio individual y grupal.',
      icon: '01',
      horario: 'Lun-Vie: 8:00-20:00, Sáb: 9:00-14:00'
    },
    {
      id: 2,
      title: 'Centro de Cómputo',
      description: 'Equipos actualizados con software especializado y acceso a internet de alta velocidad.',
      icon: '02',
      horario: 'Lun-Vie: 7:00-21:00'
    },
    {
      id: 3,
      title: 'Cafetería',
      description: 'Servicio de alimentos saludables y económicos para la comunidad estudiantil.',
      icon: '03',
      horario: 'Lun-Vie: 7:30-18:00'
    },
    {
      id: 4,
      title: 'Orientación Psicológica',
      description: 'Atención psicológica gratuita y confidencial para estudiantes.',
      icon: '04',
      horario: 'Lun-Vie: 9:00-17:00 (Con cita)'
    },
    {
      id: 5,
      title: 'Centro de Idiomas',
      description: 'Cursos de inglés y otros idiomas para complementar tu formación profesional.',
      icon: '05',
      horario: 'Lun-Vie: 15:00-20:00'
    },
    {
      id: 6,
      title: 'Deportes',
      description: 'Instalaciones deportivas y equipos representativos de fútbol, voleibol y básquetbol.',
      icon: '06',
      horario: 'Lun-Vie: 6:00-8:00, 18:00-21:00'
    }
  ];

  const clubes = [
    {
      name: 'Club de Debate',
      description: 'Desarrolla habilidades de oratoria y argumentación',
      miembros: 25
    },
    {
      name: 'Voluntariado Social',
      description: 'Proyectos de servicio comunitario',
      miembros: 40
    },
    {
      name: 'Grupo Cultural',
      description: 'Danza, música y expresión artística',
      miembros: 30
    },
    {
      name: 'Eco-Escuela',
      description: 'Iniciativas ambientales y sustentabilidad',
      miembros: 20
    }
  ];

  const eventos = [
    {
      title: 'Día de muertos',
      date: '29 de octubre, 2025',
      type: 'Cultural',
      description: 'Hoy miércoles 29 de octubre de 2025, dentro del marco del "DIA DE MUERTOS O DE LOS FIELES DIFUNTOS", nuestra comunidad educativa se une a la celebración que remarca nuestra identidad como parte de nuestra cultura mexicana.',
      image: diaMuertosImg
    },
    {
      title: 'Visita guiada a la Fiscalía de la Mujer',
      date: '23 y 24 de octubre, 2025',
      type: 'Académico',
      description: 'Dias 23 y 24 de octubre, alumnos de los primeros semestres de la Escuela Superior de Trabajo Social "Jesús Aquino Juan" visitaron la Fiscalia de la Mujer con la finalidad que conozcan las funciones que desempeñan las trabajadoras y trabajadores sociales en diferentes áreas de intervención.',
      image: fiscaliaImg
    },
    {
      title: 'Generación 2021 - 2025 "semillas que fructifican"',
      date: '15 de agosto, 2025',
      type: 'Ceremonia',
      description: '15 de agosto de 2025, la Escuela Superior de Trabajo Social "Jesús Aquino Juan", llevó a cabo la ceremonia de graduación de la sexagésimo tercera, generación 2021 - 2025 "semillas que fructifican" de Licenciadas y Licenciados En Trabajo Social.',
      image: semillasImg
    }
  ];

  const testimonios = [
    {
      nombre: 'Ana Martínez',
      semestre: '8vo Semestre',
      texto: 'La vida universitaria aquí es increíble. Los profesores siempre están dispuestos a apoyarte y hay muchas oportunidades de crecimiento personal.',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
    },
    {
      nombre: 'Carlos López',
      semestre: '6to Semestre',
      texto: 'Formar parte del club de voluntariado ha sido una de las mejores experiencias. He aprendido mucho sobre trabajo en equipo y servicio social.',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    {
      nombre: 'María González',
      semestre: 'Egresada 2023',
      texto: 'Mi tiempo en la ESTS fue transformador. Las prácticas profesionales y el apoyo de mis maestros me prepararon muy bien para el campo laboral.',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="vida-universitaria">
      <HeroSection
        title="Vida Universitaria"
        description="Descubre todo lo que nuestra comunidad estudiantil tiene para ofrecerte"
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Eventos */}
      <section className="vida__section reveal">
          <div className="vida__container">
            <Heading level={2} align="center">Eventos y Actividades</Heading>
            <Text align="center">Vive experiencias únicas en nuestros eventos académicos, culturales y deportivos</Text>

            <div className="eventos-grid">
              {eventos.map((evento, index) => (
                <article key={index} className="evento-card">
                  <div className="evento-card__image">
                    <img src={evento.image} alt={evento.title} />
                    <span className="evento-card__type">{evento.type}</span>
                  </div>
                  <div className="evento-card__content">
                    <h3>{evento.title}</h3>
                    <p className="evento-card__date">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {evento.date}
                    </p>
                    <p className="evento-card__description">{evento.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="cta-center">
              <Link to="/eventos">
                <Button variant="primary" size="large">Ver todos los eventos</Button>
              </Link>
            </div>
          </div>
        </section>

      {/* Servicios */}
      <section className="vida__section reveal">
          <div className="vida__container">
            <Heading level={2} align="center">Servicios Estudiantiles</Heading>
            <Text align="center">Instalaciones y servicios diseñados para tu bienestar y éxito académico</Text>

            <div className="servicios-grid">
              {servicios.map((servicio) => (
                <article key={servicio.id} className="servicio-card">
                  <div className="servicio-card__icon">{servicio.icon}</div>
                  <h3>{servicio.title}</h3>
                  <p>{servicio.description}</p>
                  <div className="servicio-card__horario">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {servicio.horario}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      {/* Clubes */}
      <section className="vida__section reveal">
          <div className="vida__container">
            <Heading level={2} align="center">Clubes y Grupos Estudiantiles</Heading>
            <Text align="center">Únete a nuestros clubes y desarrolla nuevas habilidades mientras conoces gente increíble</Text>

            <div className="clubes-grid">
              {clubes.map((club, index) => (
                <article key={index} className="club-card">
                  <div className="club-card__header">
                    <h3>{club.name}</h3>
                    <span className="club-card__badge">{club.miembros} miembros</span>
                  </div>
                  <p>{club.description}</p>
                  <Button variant="secondary" size="small">Unirme</Button>
                </article>
              ))}
            </div>

            <div className="info-box">
              <Heading level={3}>¿Quieres formar un nuevo club?</Heading>
              <Text>Si tienes una idea para un nuevo club o grupo estudiantil, acércate a la coordinación estudiantil. Te ayudaremos a hacerlo realidad.</Text>
              <Button variant="primary">Proponer club</Button>
            </div>
          </div>
        </section>

      {/* Testimonios */}
      <section className="vida__section reveal">
          <div className="vida__container">
            <Heading level={2} align="center">Lo que Dicen Nuestros Estudiantes</Heading>
            <Text align="center">Conoce las experiencias de quienes forman parte de nuestra comunidad</Text>

            <div className="testimonios-grid">
              {testimonios.map((testimonio, index) => (
                <article key={index} className="testimonio-card">
                  <div className="testimonio-card__header">
                    <img src={testimonio.foto} alt={testimonio.nombre} />
                    <div>
                      <h3>{testimonio.nombre}</h3>
                      <p className="testimonio-card__semestre">{testimonio.semestre}</p>
                    </div>
                  </div>
                  <p className="testimonio-card__texto">"{testimonio.texto}"</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      {/* CTA Final */}
      <section className="vida__cta reveal">
        <div className="vida__cta-content">
          <Heading level={2}>¿Listo para ser parte de nuestra comunidad?</Heading>
          <Text>Descubre todo lo que tenemos para ti y comienza tu aventura universitaria</Text>
          <div className="cta-buttons">
            <Link to="/admisiones">
              <Button variant="primary" size="large">Proceso de admisión</Button>
            </Link>
            <Link to="/contacto">
              <Button variant="secondary" size="large">Agendar visita</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
