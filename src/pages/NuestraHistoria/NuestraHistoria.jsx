import { useEffect } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import { Link } from 'react-router-dom';
import './NuestraHistoria.css';

const milestones = [
  { year: 1985, title: 'Fundación', detail: 'Nace la Escuela Superior de Trabajo Social con la visión de formar profesionales comprometidos con la justicia social y el desarrollo comunitario. Primera generación de 45 estudiantes.', image: 'https://images.unsplash.com/photo-1496302662116-85c773c77f86?q=80&w=1200&auto=format&fit=crop' },
  { year: 1992, title: 'Primera generación de egresados', detail: 'Nuestros primeros 38 profesionales titulan y comienzan su labor en comunidades rurales y urbanas marginadas, sentando las bases de nuestra red de egresados.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop' },
  { year: 1998, title: 'Acreditación institucional', detail: 'Obtención del reconocimiento de validez oficial de estudios (RVOE) y primeros convenios con organizaciones de la sociedad civil para prácticas profesionales.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop' },
  { year: 2005, title: 'Expansión académica', detail: 'Apertura del programa de posgrado en Intervención Social y creación del Centro de Investigación en Políticas Públicas. Matrícula alcanza 250 estudiantes.', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop' },
  { year: 2012, title: 'Red de vinculación comunitaria', detail: 'Establecimiento de 40 convenios con organizaciones civiles, municipios e instituciones públicas para fortalecimiento de prácticas y proyectos de intervención.', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop' },
  { year: 2018, title: 'Reconocimiento de calidad educativa', detail: 'Evaluación favorable por CIEES (Comités Interinstitucionales para la Evaluación de la Educación Superior) en Nivel 1, destacando programas y cuerpo docente.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop' },
  { year: 2020, title: 'Innovación digital', detail: 'Transición exitosa a modalidad híbrida durante pandemia. Integración de metodologías mixtas, plataformas digitales y laboratorios virtuales de intervención social.', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop' },
  { year: 2024, title: 'Impacto sostenible', detail: 'Consolidación de proyectos con enfoque de sostenibilidad. Más de 1,200 egresados activos en el sector público, privado y organizaciones civiles. Nuevos programas de educación continua.', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop' }
];

export default function NuestraHistoria() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible')), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className="historia">
      <HeroSection
        title="Nuestra historia"
        description="40 años de compromiso con la formación de profesionales del trabajo social y el impacto en comunidades de todo el país."
        ctaLabel="Conoce nuestra trayectoria"
        image="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Introducción narrativa */}
      <section className="historia__section reveal">
        <div className="historia__intro">
          <Heading level={2}>Una trayectoria de transformación social</Heading>
          <Text>
            Desde 1985, la Escuela Superior de Trabajo Social Jesús Aquino Juan ha sido un referente en la formación de profesionales comprometidos con la justicia social. Nuestra historia está marcada por la dedicación de docentes, el esfuerzo de estudiantes y el impacto tangible en miles de comunidades.
          </Text>
          <Text>
            Con más de cuatro décadas de experiencia, hemos evolucionado constantemente para responder a las necesidades emergentes de la sociedad mexicana, manteniendo siempre nuestro compromiso con los valores fundacionales de solidaridad, respeto y participación.
          </Text>
        </div>
      </section>

      {/* Timeline de hitos */}
      <section className="historia__timeline">
        {milestones.map((item, idx) => (
          <article key={item.year} className={`historia__item reveal ${idx % 2 ? 'right' : 'left'}`}>
            <div className="historia__point" aria-hidden />
            <div className="historia__content">
              <img src={item.image} alt={item.title} className="historia__img" />
              <div className="historia__text">
                <Heading level={3}>{item.year} · {item.title}</Heading>
                <Text tone="muted">{item.detail}</Text>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Impacto por décadas */}
      <section className="historia__section reveal">
        <Heading level={2}>Nuestro impacto a través del tiempo</Heading>
        <div className="historia__decades">
          <article className="decade-card">
            <span className="decade-card__period">1985 - 1995</span>
            <h3>Fundación y crecimiento</h3>
            <div className="decade-card__stats">
              <div><strong>5</strong> generaciones</div>
              <div><strong>180</strong> egresados</div>
              <div><strong>12</strong> convenios</div>
            </div>
          </article>
          <article className="decade-card">
            <span className="decade-card__period">1996 - 2005</span>
            <h3>Consolidación institucional</h3>
            <div className="decade-card__stats">
              <div><strong>10</strong> generaciones</div>
              <div><strong>420</strong> egresados</div>
              <div><strong>28</strong> convenios</div>
            </div>
          </article>
          <article className="decade-card">
            <span className="decade-card__period">2006 - 2015</span>
            <h3>Expansión y reconocimiento</h3>
            <div className="decade-card__stats">
              <div><strong>12</strong> generaciones</div>
              <div><strong>540</strong> egresados</div>
              <div><strong>45</strong> convenios</div>
            </div>
          </article>
          <article className="decade-card">
            <span className="decade-card__period">2016 - 2025</span>
            <h3>Innovación y proyección</h3>
            <div className="decade-card__stats">
              <div><strong>8+</strong> generaciones</div>
              <div><strong>380+</strong> egresados</div>
              <div><strong>60+</strong> convenios</div>
            </div>
          </article>
        </div>
      </section>

      {/* Logros destacados */}
      <section className="historia__section reveal">
        <Heading level={2}>Logros destacados</Heading>
        <div className="historia__achievements">
          <div className="achievement-item">
            <div className="achievement-item__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h4>Más de 1,500 egresados</h4>
              <p>Profesionales trabajando en sectores público, privado y social en todo el país</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-item__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h4>60+ proyectos de intervención</h4>
              <p>Iniciativas comunitarias que han beneficiado a más de 25,000 personas</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-item__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h4>Reconocimientos nacionales</h4>
              <p>Acreditación CIEES Nivel 1 y premios por innovación educativa</p>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-item__icon" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h4>Red de colaboración</h4>
              <p>Alianzas con universidades nacionales e internacionales para intercambio académico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legado y futuro */}
      <section className="historia__section reveal">
        <div className="historia__legacy">
          <Heading level={2} align="center">Nuestro legado, nuestro futuro</Heading>
          <Text>
            Cuatro décadas de historia nos respaldan, pero es hacia el futuro donde dirigimos nuestra mirada. Continuamos innovando en metodologías de enseñanza, fortaleciendo la investigación aplicada y ampliando nuestra red de impacto social.
          </Text>
          <Text>
            Cada estudiante que cruza nuestras puertas se convierte en parte de esta historia de transformación. Juntos seguimos construyendo un México más justo, equitativo y solidario.
          </Text>
          <div className="historia__legacy-actions">
            <Link to="/quienes-somos"><Button variant="primary">Conoce nuestra misión</Button></Link>
            <Link to="/docentes"><Button variant="ghost">Nuestro equipo</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
