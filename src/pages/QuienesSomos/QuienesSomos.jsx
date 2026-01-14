import { useEffect } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import { Link } from 'react-router-dom';
import alumnosImg from '../../assets/images/quienes-alumnos.JPG';
import entradaImg from '../../assets/images/entrada.JPG';
import './QuienesSomos.css';

export default function QuienesSomos() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible'));
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className="quienes">
      <HeroSection
        title="Quiénes somos"
        description="Formamos profesionales íntegros para transformar realidades con participación, respeto y justicia social."
        ctaLabel="Nuestra misión"
        ctaLink="#mision"
        image={entradaImg}
      />

      {/* Información de la institución */}
      <section className="quienes__section reveal">
        <Heading level={2} align="center">Escuela Superior de Trabajo Social Jesús Aquino Juan</Heading>
        <div className="qs-history-container">
          <div className="qs-history">
            <Text>
              Esta institución de Educación Superior se funda el <strong>24 de Septiembre de 1978</strong> como escuela profesional de nivel medio superior del Instituto de Ciencias y Artes de Chiapas, siendo gobernador el Lic. Salomón González Blanco. Inicia sus actividades en las instalaciones de la Escuela de Técnicos en Contabilidad y Administración (ETCAICACH), donde permaneció por dos años.
            </Text>
            <Text>
              En <strong>Octubre del 2007</strong>, por gestión de la autoridad municipal y la comunidad de Trabajo Social (estudiantes y egresados), y en reconocimiento a la labor educativa del director fundador, percursor y promotor del Trabajo Social en Chiapas, la autoridad educativa acordó nombrar a esta Institución: <strong>Escuela Superior de Trabajo Social "Jesús Aquino Juan"</strong>.
            </Text>
          </div>
          <div className="qs-history-image">
            <img src={alumnosImg} alt="Estudiantes de Trabajo Social" />
          </div>
        </div>
      </section>

      <section id="mision" className="quienes__grid reveal">
        <article className="qs-card">
          <img className="qs-card__img" src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1200&auto=format&fit=crop" alt="Misión" />
          <div className="qs-card__body">
            <Heading level={2}>Misión</Heading>
            <p className="qs-card__text">Ser una institución de educación superior de excelencia dedicada a educar y formar integramente hombres y mujeres con liderazgo, no sólo académico e intelectual sino también humano y social, que logren reflexionar, comprender y transformar los escenarios adversos al bienestar, armonía, educación, seguridad, democracia y derechos humanos, para constribuir asi al mejoramiento de las políticas sociales multiétnicas y pluriculturales de desarrollo nacional y mundial.</p>
          </div>
        </article>
        <article className="qs-card">
          <img className="qs-card__img" src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" alt="Visión" />
          <div className="qs-card__body">
            <Heading level={2}>Visión</Heading>
            <p className="qs-card__text">Impartir una educación inegral, pertinente y de calidad que capacite y motive a los profesionales del trabajo social a aprehender la realidad, para actuar en ella e impulsar los cambios oportunos en los fenómenos relacionados con las disfunciones sociales que provocan perturbaciones en las esferas de la relacion individual, familiar y comunitario</p>
          </div>
        </article>
        <article className="qs-card">
          <img className="qs-card__img" src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop" alt="Valores" />
          <div className="qs-card__body">
            <Heading level={2}>Valores</Heading>
            <div className="qs-values">
              <span className="qs-value-badge">Amor</span>
              <span className="qs-value-badge">Autenticidad</span>
              <span className="qs-value-badge">Autoestima</span>
              <span className="qs-value-badge">Democracia</span>
              <span className="qs-value-badge">Empatía</span>
              <span className="qs-value-badge">Generosidad</span>
              <span className="qs-value-badge">Honestidad</span>
              <span className="qs-value-badge">Integridad</span>
              <span className="qs-value-badge">Justicia Social</span>
              <span className="qs-value-badge">Lealtad</span>
              <span className="qs-value-badge">Libertad</span>
              <span className="qs-value-badge">Perseverancia</span>
              <span className="qs-value-badge">Respeto</span>
              <span className="qs-value-badge">Responsabilidad</span>
              <span className="qs-value-badge">Solidaridad</span>
              <span className="qs-value-badge">Tolerancia</span>
            </div>
          </div>
        </article>
      </section>

      {/* Objetivos estratégicos */}
      <section className="quienes__section reveal">
        <Heading level={2}>Objetivos institucionales</Heading>
        <div className="qs-objectives">
          <article className="objective-card">
            <div className="objective-card__icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Formación integral</h3>
            <p>Desarrollar competencias técnicas, humanas y éticas en nuestros estudiantes mediante programas académicos actualizados.</p>
          </article>
          <article className="objective-card">
            <div className="objective-card__icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Investigación aplicada</h3>
            <p>Generar conocimiento científico que contribuya a la solución de problemáticas sociales emergentes.</p>
          </article>
          <article className="objective-card">
            <div className="objective-card__icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 21v-4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4" stroke="currentColor" strokeWidth="2"/>
                <path d="M19 8v6m3-3h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Vinculación social</h3>
            <p>Establecer alianzas estratégicas con organizaciones, instituciones y comunidades para el desarrollo social.</p>
          </article>
        </div>
      </section>

      {/* Equipo directivo */}
      <section className="quienes__section reveal">
        <Heading level={2}>Equipo directivo</Heading>
        <div className="qs-team">
          <article className="team-member">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Director" className="team-member__photo" />
            <div className="team-member__info">
              <h3>Dr. Jesús Aquino Juan</h3>
              <p className="team-member__role">Director General</p>
              <p className="team-member__bio">Doctor en Ciencias Sociales con más de 25 años de experiencia en trabajo social comunitario.</p>
            </div>
          </article>
          <article className="team-member">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Subdirectora académica" className="team-member__photo" />
            <div className="team-member__info">
              <h3>Mtra. Patricia Ramírez Ortiz</h3>
              <p className="team-member__role">Subdirectora Académica</p>
              <p className="team-member__bio">Maestra en Desarrollo Comunitario, coordinadora de programas de licenciatura y posgrado.</p>
            </div>
          </article>
          <article className="team-member">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" alt="Coordinador de investigación" className="team-member__photo" />
            <div className="team-member__info">
              <h3>Dr. Roberto Sánchez Vega</h3>
              <p className="team-member__role">Coordinador de Investigación</p>
              <p className="team-member__bio">Doctor en Políticas Públicas, responsable de proyectos de investigación e intervención social.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Acreditaciones y reconocimientos */}
      <section className="quienes__section reveal">
        <Heading level={2}>Acreditaciones y reconocimientos</Heading>
        <div className="qs-recognitions">
          <div className="recognition-item">
            <div className="recognition-item__badge" aria-hidden>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15l-3.5 2 1-4L6 9.5l4-.5L12 5l2 4 4 .5-3.5 3.5 1 4z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h4>Reconocimiento de Calidad Educativa</h4>
              <p>Otorgado por la Secretaría de Educación Pública (2022)</p>
            </div>
          </div>
          <div className="recognition-item">
            <div className="recognition-item__badge" aria-hidden>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15l-3.5 2 1-4L6 9.5l4-.5L12 5l2 4 4 .5-3.5 3.5 1 4z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h4>Acreditación CIEES Nivel 1</h4>
              <p>Comités Interinstitucionales para la Evaluación de la Educación Superior</p>
            </div>
          </div>
          <div className="recognition-item">
            <div className="recognition-item__badge" aria-hidden>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15l-3.5 2 1-4L6 9.5l4-.5L12 5l2 4 4 .5-3.5 3.5 1 4z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h4>Miembro de la Red Nacional de Trabajo Social</h4>
              <p>Participación activa en investigación y vinculación desde 2018</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="quienes__section reveal">
        <div className="qs-cta">
          <Heading level={2}>Conoce nuestra trayectoria</Heading>
          <Text>Descubre cómo hemos impactado en la formación de profesionales comprometidos con la transformación social.</Text>
          <div className="qs-cta__actions">
            <Link to="/nuestra-historia"><Button variant="primary">Nuestra historia</Button></Link>
            <Link to="/docentes"><Button variant="ghost">Conoce al equipo</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
