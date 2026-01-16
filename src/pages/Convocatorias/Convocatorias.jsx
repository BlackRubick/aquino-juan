import { useMemo, useState, useEffect } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import './Convocatorias.css';

const calls = [
  { 
    id: 1, 
    title: 'Servicio Social 2025-1', 
    deadline: '2025-02-15', 
    type: 'Licenciatura', 
    summary: 'Registro para servicio social en organizaciones de la sociedad civil y dependencias gubernamentales.',
    requirements: ['Tener al menos 70% de créditos', 'Promedio mínimo de 8.0', 'Estar inscrito en el semestre actual'],
    places: 45,
    status: 'vigente',
    doc: '#' 
  },
  { 
    id: 5, 
    title: 'Prácticas Profesionales 2025-B', 
    deadline: '2025-05-10', 
    type: 'Licenciatura', 
    summary: 'Inscripción a prácticas profesionales en campo para estudiantes de séptimo y octavo semestre.',
    requirements: ['Haber cursado mínimo 6 semestres', 'No tener adeudos administrativos', 'Seguro médico vigente'],
    places: 60,
    status: 'próximamente',
    doc: '#' 
  },
  { 
    id: 8, 
    title: 'Nuevo Ingreso Licenciatura 2025-B', 
    deadline: '2025-06-15', 
    type: 'Licenciatura', 
    summary: 'Convocatoria de nuevo ingreso para aspirantes a la Licenciatura en Trabajo Social.',
    requirements: ['Certificado de bachillerato', 'Examen de admisión', 'Entrevista', 'Documentación oficial'],
    places: 80,
    status: 'próximamente',
    doc: '#' 
  }
];

export default function Convocatorias() {
  const [active, setActive] = useState('Todas');
  const [selectedCall, setSelectedCall] = useState(null);
  const types = ['Todas', 'Licenciatura'];
  const filtered = useMemo(() => active === 'Todas' ? calls : calls.filter(c => c.type === active), [active]);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible')), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="convocatorias">
      <HeroSection
        title="Convocatorias"
        description="Descubre las oportunidades vigentes para estudiantes, egresados y aspirantes a la Licenciatura en Trabajo Social."
        ctaLabel="Explorar convocatorias"
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Stats rápidas */}
      <section className="convocatorias__section reveal">
        <div className="convocatorias__stats">
          <div className="stat-item">
            <span className="stat-item__number">{calls.filter(c => c.status === 'vigente').length}</span>
            <span className="stat-item__label">Convocatorias activas</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number">{calls.reduce((sum, c) => sum + c.places, 0)}</span>
            <span className="stat-item__label">Plazas disponibles</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number">{types.length - 1}</span>
            <span className="stat-item__label">Categorías</span>
          </div>
        </div>
      </section>

      {/* Filtros y listado */}
      <section className="convocatorias__section reveal">
        <div className="convocatorias__header">
          <div>
            <Heading level={2}>Oportunidades disponibles</Heading>
            <Text tone="muted">Filtra por categoría para encontrar la convocatoria que buscas</Text>
          </div>
        </div>

        <div className="convocatorias__filters">
          {types.map((t) => (
            <Button key={t} variant={active === t ? 'primary' : 'ghost'} onClick={() => setActive(t)}>{t}</Button>
          ))}
        </div>

        <div className="convocatorias__grid">
          {filtered.map((c) => (
            <article key={c.id} className="convocatoria-card">
              <div className="convocatoria-card__header">
                <span className="convocatoria-card__type">{c.type}</span>
                <span className={`convocatoria-card__status convocatoria-card__status--${c.status}`}>
                  {c.status === 'vigente' ? '● Vigente' : '○ Próximamente'}
                </span>
              </div>
              <h3 className="convocatoria-card__title">{c.title}</h3>
              <p className="convocatoria-card__text">{c.summary}</p>
              <div className="convocatoria-card__meta">
                <div className="convocatoria-card__meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Cierre: {new Date(c.deadline).toLocaleDateString('es-MX', {day: 'numeric', month: 'long'})}</span>
                </div>
                <div className="convocatoria-card__meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 21v-4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>{c.places} lugares</span>
                </div>
              </div>
              <div className="convocatoria-card__actions">
                <Button size="sm" variant="ghost" onClick={() => setSelectedCall(c)}>Ver detalles</Button>
                <a href={c.doc} download className="convocatoria-card__download">Descargar PDF</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Información importante */}
      <section className="convocatorias__section reveal">
        <Heading level={2}>Proceso de inscripción</Heading>
        <div className="convocatorias__process">
          <div className="process-step">
            <div className="process-step__number">1</div>
            <div>
              <h4>Revisa los requisitos</h4>
              <p>Lee cuidadosamente las bases de la convocatoria y verifica que cumples con todos los requisitos.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="process-step__number">2</div>
            <div>
              <h4>Prepara tu documentación</h4>
              <p>Reúne todos los documentos solicitados y digitalízalos en formato PDF.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="process-step__number">3</div>
            <div>
              <h4>Envía tu solicitud</h4>
              <p>Completa el formulario en línea o entrega tu documentación en Control Escolar.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="process-step__number">4</div>
            <div>
              <h4>Espera los resultados</h4>
              <p>Consulta los resultados en las fechas publicadas y atiende las notificaciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="convocatorias__section reveal">
        <Heading level={2}>Preguntas frecuentes</Heading>
        <div className="convocatorias__faqs">
          <details className="faq-item">
            <summary>¿Puedo aplicar a más de una convocatoria?</summary>
            <p>Sí, puedes aplicar a todas las convocatorias para las que cumplas con los requisitos, siempre que no haya incompatibilidad entre ellas.</p>
          </details>
          <details className="faq-item">
            <summary>¿Qué pasa si entrego mi documentación después de la fecha límite?</summary>
            <p>No se aceptan solicitudes fuera de plazo. Es importante que verifiques las fechas y envíes tu documentación con anticipación.</p>
          </details>
          <details className="faq-item">
            <summary>¿Cómo sé si fui seleccionado?</summary>
            <p>Los resultados se publican en la página web y en las vitrinas de Control Escolar. También recibirás una notificación al correo registrado.</p>
          </details>
        </div>
      </section>

      {/* Modal de detalles */}
      {selectedCall && (
        <div className="modal" onClick={() => setSelectedCall(null)}>
          <div className="modal__backdrop" />
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setSelectedCall(null)}>×</button>
            <div className="modal__body">
              <span className="convocatoria-card__type">{selectedCall.type}</span>
              <Heading level={2}>{selectedCall.title}</Heading>
              <Text>{selectedCall.summary}</Text>
              <div className="modal__details">
                <div>
                  <strong>Fecha límite:</strong>
                  <p>{new Date(selectedCall.deadline).toLocaleDateString('es-MX', {day: 'numeric', month: 'long', year: 'numeric'})}</p>
                </div>
                <div>
                  <strong>Lugares disponibles:</strong>
                  <p>{selectedCall.places}</p>
                </div>
              </div>
              <div className="modal__requirements">
                <strong>Requisitos:</strong>
                <ul>
                  {selectedCall.requirements.map((req, idx) => <li key={idx}>{req}</li>)}
                </ul>
              </div>
              <div className="modal__actions">
                <a href={selectedCall.doc} download><Button variant="primary">Descargar convocatoria</Button></a>
                <Button variant="ghost" onClick={() => setSelectedCall(null)}>Cerrar</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
