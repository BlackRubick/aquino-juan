import { useEffect } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import { Link } from 'react-router-dom';
import alumnosImg from '../../assets/images/quienes-alumnos.JPG';
import entradaImg from '../../assets/images/entrada.JPG';
import './Nosotros.css';

const milestones = [
  { year: '1978', title: 'Fundación', detail: 'Se funda como escuela profesional de nivel medio superior del ICACH.' },
  { year: '1998', title: 'Acreditación', detail: 'Obtención del RVOE y primeros convenios institucionales.' },
  { year: '2007', title: 'Reconocimiento', detail: 'Se nombra oficialmente "Escuela Superior de Trabajo Social Jesús Aquino Juan".' },
  { year: '2025', title: 'Actualidad', detail: 'Más de 1,200 egresados y reconocimiento nacional de calidad educativa.' }
];

export default function Nosotros() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible'));
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="nosotros">
      <HeroSection
        title="Nosotros"
        description="Esta institución de Educacion Superior, se funda el 24 de Septiembre de 1978 como escuela profesional de nivel medio superior del Institulo de Ciencias y Artes de Chiapas, siendo gobernador el Lic. Salomón Gonzáles Blanco. inicia sus actividades en las instalaciones de la Escuela de Técnicos en contabilidad y Administracion (ETCAICACH), donde permaneció por dos años. En Octubre del 2007, por gestión de la autoridad municipal y la comunidad de Trabajo Social (estudiantes y egresados), y en reconocimiento a la labor educativa del director fundador, percursor y promotor del Trabajo Social en Chiapas, la autoridad educatica acordó nombrar a esta Institución: Escuela Superior de Trabajo Social Jesús Aquino Juan."
        ctaLabel="Nuestra misión"
        ctaLink="#mision"
        image={entradaImg}
      />

      {/* Tabs de navegación interna */}
      <div className="nosotros__tabs reveal">
        <a href="#mision" className="nosotros__tab">Misión y Visión</a>
        <a href="#historia" className="nosotros__tab">Historia</a>
        <a href="#directorio" className="nosotros__tab">Directorio</a>
      </div>

      {/* Misión, Visión y Valores */}
      <section id="mision" className="nosotros__section reveal">
        <div className="nosotros__grid">
          <article className="info-card">
            <div className="info-card__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Heading level={2}>Misión</Heading>
            <p className="info-card__text">Ser una institución de educación superior de excelencia dedicada a educar y formar integramente hombres y mujeres con liderazgo, no sólo académico e intelectual sino también humano y social, que logren reflexionar, comprender y transformar los escenarios adversos al bienestar, armonía, educación, seguridad, democracia y derechos humanos, para constribuir asi al mejoramiento de las políticas sociales multiétnicas y pluriculturales de desarrollo nacional y mundial.</p>
          </article>
          <article className="info-card">
            <div className="info-card__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <Heading level={2}>Visión</Heading>
            <p className="info-card__text">Impartir una educación inegral, pertinente y de calidad que capacite y motive a los profesionales del trabajo social a aprehender la realidad, para actuar en ella e impulsar los cambios oportunos en los fenómenos relacionados con las disfunciones sociales que provocan perturbaciones en las esferas de la relacion individual, familiar y comunitario</p>
          </article>
          <article className="info-card info-card--full">
            <div className="info-card__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Heading level={2}>Valores</Heading>
            <div className="values-grid">
              <span className="value-badge">Amor</span>
              <span className="value-badge">Autenticidad</span>
              <span className="value-badge">Autoestima</span>
              <span className="value-badge">Democracia</span>
              <span className="value-badge">Empatía</span>
              <span className="value-badge">Generosidad</span>
              <span className="value-badge">Honestidad</span>
              <span className="value-badge">Integridad</span>
              <span className="value-badge">Justicia Social</span>
              <span className="value-badge">Lealtad</span>
              <span className="value-badge">Libertad</span>
              <span className="value-badge">Perseverancia</span>
              <span className="value-badge">Respeto</span>
              <span className="value-badge">Responsabilidad</span>
              <span className="value-badge">Solidaridad</span>
              <span className="value-badge">Tolerancia</span>
            </div>
          </article>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="nosotros__section nosotros__historia reveal">
        <Heading level={2} align="center">Nuestra Historia</Heading>
        <div className="historia-intro">
          <Text align="center">
            Fundada el <strong>24 de Septiembre de 1978</strong>, la ESTS Jesús Aquino Juan ha sido pionera en la formación de profesionales del trabajo social en Chiapas.
          </Text>
        </div>
        <div className="timeline">
          {milestones.map((item, idx) => (
            <div key={idx} className="timeline__item">
              <div className="timeline__year">{item.year}</div>
              <div className="timeline__content">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Directorio */}
      <section id="directorio" className="nosotros__section reveal">
        <Heading level={2}>Directorio</Heading>
        <div className="directorio-grid">
          <article className="directorio-card">
            <div className="directorio-card__photo">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Directora" />
            </div>
            <h3>Lic. Gabriela Esperanza Méndez Bermúdez</h3>
            <p className="directorio-card__position">Directora General</p>
            <p className="directorio-card__email">direccion@trabajosocial.edu.mx</p>
          </article>
          <article className="directorio-card">
            <div className="directorio-card__photo">
              <img src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400&auto=format&fit=crop" alt="Subdirectora" />
            </div>
            <h3>Dra. Patricia Ramírez Ortiz</h3>
            <p className="directorio-card__position">Subdirectora Académica</p>
            <p className="directorio-card__email">academica@trabajosocial.edu.mx</p>
          </article>
          <article className="directorio-card">
            <div className="directorio-card__photo">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" alt="Coordinador" />
            </div>
            <h3>Mtro. Roberto Sánchez Medina</h3>
            <p className="directorio-card__position">Coordinador de Investigación</p>
            <p className="directorio-card__email">investigacion@trabajosocial.edu.mx</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="nosotros__cta reveal">
        <Heading level={2} align="center">¿Listo para formar parte?</Heading>
        <Text align="center">Conoce nuestros programas académicos y proceso de admisión</Text>
        <div className="cta-buttons">
          <Link to="/programas"><Button variant="primary">Ver Programas</Button></Link>
          <Link to="/admisiones"><Button variant="secondary">Proceso de Admisión</Button></Link>
        </div>
      </section>
    </div>
  );
}
