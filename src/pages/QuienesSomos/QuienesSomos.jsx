import { useEffect } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import { Link } from 'react-router-dom';
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
        image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="quienes__grid reveal">
        <article className="qs-card">
          <img className="qs-card__img" src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1200&auto=format&fit=crop" alt="Trabajo comunitario" />
          <div className="qs-card__body">
            <Heading level={2}>Misión</Heading>
            <Text>Formar profesionales en Trabajo Social con enfoque humano, rigor académico y compromiso ético para intervenir en problemáticas sociales, promoviendo el desarrollo comunitario y la participación ciudadana.</Text>
          </div>
        </article>
        <article className="qs-card">
          <img className="qs-card__img" src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" alt="Visión académica" />
          <div className="qs-card__body">
            <Heading level={2}>Visión</Heading>
            <Text>Ser referente nacional e internacional en formación de profesionales del trabajo social, distinguiéndonos por la innovación educativa, investigación aplicada y vinculación efectiva con comunidades.</Text>
          </div>
        </article>
        <article className="qs-card">
          <img className="qs-card__img" src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop" alt="Valores" />
          <div className="qs-card__body">
            <Heading level={2}>Valores</Heading>
            <ul className="qs-values">
              <li>Solidaridad y participación comunitaria</li>
              <li>Respeto a la dignidad humana</li>
              <li>Justicia social y equidad</li>
              <li>Transparencia y responsabilidad</li>
              <li>Compromiso ético profesional</li>
              <li>Inclusión y diversidad</li>
            </ul>
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
