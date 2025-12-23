import { useMemo, useState, useEffect } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import './Eventos.css';

const eventsData = [
  { 
    id: 1, 
    title: 'Seminario Internacional de Trabajo Social Comunitario', 
    date: '2026-02-14', 
    category: 'Seminario',
    summary: 'Reflexión sobre metodologías de intervención comunitaria con expertos nacionales e internacionales.',
    description: 'Espacio de intercambio académico que reúne a profesionales del trabajo social para analizar metodologías innovadoras de intervención comunitaria. Contaremos con ponentes de Argentina, Chile y México que compartirán experiencias exitosas en proyectos de desarrollo social.',
    location: 'Auditorio Principal',
    schedule: '9:00 AM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    spots: 120,
    price: 'Gratuito'
  },
  { 
    id: 2, 
    title: 'Foro Nacional de Derechos Humanos y Justicia Social', 
    date: '2026-03-10', 
    category: 'Foro',
    summary: 'Diálogo sobre políticas públicas y defensa de derechos humanos con organizaciones civiles.',
    description: 'Encuentro que promueve el diálogo entre academia, gobierno y sociedad civil sobre la situación de los derechos humanos en México. Participan defensores, investigadores y autoridades para construir propuestas de política pública.',
    location: 'Sala de Conferencias',
    schedule: '10:00 AM - 5:00 PM',
    image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=800&auto=format&fit=crop',
    spots: 80,
    price: 'Gratuito'
  },
  { 
    id: 3, 
    title: 'Encuentro de Egresados 2026', 
    date: '2026-06-22', 
    category: 'Encuentro',
    summary: 'Red de colaboración, testimonios y fortalecimiento de vínculos entre generaciones.',
    description: 'Reencuentro anual que fortalece la red de egresados de la escuela. Incluye paneles de experiencias profesionales, talleres de actualización, actividades recreativas y espacio de networking para generar oportunidades de colaboración.',
    location: 'Campus completo',
    schedule: '9:00 AM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
    spots: 200,
    price: 'Gratuito para egresados'
  },
  { 
    id: 4, 
    title: 'Taller: Metodologías Participativas en Intervención Social', 
    date: '2026-04-18', 
    category: 'Taller',
    summary: 'Herramientas prácticas para diagnósticos comunitarios y diseño de proyectos participativos.',
    description: 'Taller intensivo de 2 días donde los participantes aprenderán técnicas de diagnóstico participativo, mapeo comunitario, construcción de matrices de planificación y diseño de proyectos con enfoque de derechos.',
    location: 'Laboratorio de Prácticas',
    schedule: '9:00 AM - 2:00 PM',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    spots: 40,
    price: '$500'
  },
  { 
    id: 5, 
    title: 'Conferencia Magistral: Género y Políticas Públicas', 
    date: '2026-05-08', 
    category: 'Conferencia',
    summary: 'Análisis de la transversalización de género en programas sociales mexicanos.',
    description: 'Conferencia magistral impartida por la Dra. Marcela Lagarde sobre los avances y desafíos en la incorporación de la perspectiva de género en las políticas públicas de México. Incluye sesión de preguntas y respuestas.',
    location: 'Auditorio Principal',
    schedule: '5:00 PM - 7:00 PM',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop',
    spots: 150,
    price: 'Gratuito'
  },
  { 
    id: 6, 
    title: 'Jornada de Servicio Social Comunitario', 
    date: '2025-11-15', 
    category: 'Jornada',
    summary: 'Actividad práctica de vinculación con comunidades en situación de vulnerabilidad.',
    description: 'Actividad de campo donde estudiantes y docentes realizan acciones de apoyo comunitario: brigadas de salud, talleres educativos, actividades recreativas con niños y jornadas de limpieza en comunidades marginadas.',
    location: 'Comunidad El Rosario',
    schedule: '8:00 AM - 4:00 PM',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop',
    spots: 60,
    price: 'Gratuito'
  },
  { 
    id: 7, 
    title: 'Diplomado en Gestión de Proyectos Sociales', 
    date: '2026-07-10', 
    category: 'Diplomado',
    summary: 'Programa de actualización profesional de 120 horas con certificación oficial.',
    description: 'Programa de educación continua que aborda diseño, implementación, monitoreo y evaluación de proyectos sociales. Incluye módulos de gestión de recursos, trabajo con donantes, metodologías de Marco Lógico y enfoque de resultados.',
    location: 'Aulas 201-203',
    schedule: 'Sábados 9:00 AM - 2:00 PM',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    spots: 30,
    price: '$8,500'
  },
  { 
    id: 8, 
    title: 'Coloquio de Investigación en Trabajo Social', 
    date: '2025-10-20', 
    category: 'Coloquio',
    summary: 'Presentación de investigaciones de estudiantes y docentes sobre problemáticas sociales actuales.',
    description: 'Espacio académico donde estudiantes de licenciatura y posgrado presentan avances de sus investigaciones. Se abordan temas como migración, violencia de género, desigualdad, políticas sociales y derechos humanos.',
    location: 'Sala de Usos Múltiples',
    schedule: '9:00 AM - 3:00 PM',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
    spots: 100,
    price: 'Gratuito'
  }
];

export default function Eventos() {
  const [filter, setFilter] = useState('Todos');
  const [categoryFilter, setCategoryFilter] = useState('Todas');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const now = new Date();
  
  const categories = ['Todas', ...new Set(eventsData.map(e => e.category))];
  
  const filtered = useMemo(() => {
    let result = eventsData;
    
    // Filtro por tiempo
    if (filter === 'Próximos') {
      result = result.filter((e) => new Date(e.date) >= now);
    } else if (filter === 'Pasados') {
      result = result.filter((e) => new Date(e.date) < now);
    }
    
    // Filtro por categoría
    if (categoryFilter !== 'Todas') {
      result = result.filter(e => e.category === categoryFilter);
    }
    
    return result.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [filter, categoryFilter]);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible')), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="eventos">
      <HeroSection
        title="Eventos y actividades"
        description="Participa en seminarios, talleres, conferencias y encuentros que fortalecen tu formación profesional y vinculación con la comunidad."
        ctaLabel="Ver calendario"
        image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="eventos__section reveal">
        <div className="eventos__header">
          <div>
            <Heading level={2}>Calendario de eventos</Heading>
            <Text tone="muted">Explora nuestras actividades académicas y comunitarias</Text>
          </div>
          <div className="eventos__stats">
            <div className="stat-mini">
              <span className="stat-mini__number">{eventsData.filter(e => new Date(e.date) >= now).length}</span>
              <span className="stat-mini__label">Próximos</span>
            </div>
            <div className="stat-mini">
              <span className="stat-mini__number">{categories.length - 1}</span>
              <span className="stat-mini__label">Categorías</span>
            </div>
          </div>
        </div>

        <div className="eventos__filters-wrapper">
          <div className="eventos__filters">
            <span className="filter-label">Tiempo:</span>
            {['Todos', 'Próximos', 'Pasados'].map((t) => (
              <Button key={t} variant={filter === t ? 'primary' : 'ghost'} size="sm" onClick={() => setFilter(t)}>{t}</Button>
            ))}
          </div>
          <div className="eventos__filters">
            <span className="filter-label">Categoría:</span>
            {categories.map((cat) => (
              <Button key={cat} variant={categoryFilter === cat ? 'primary' : 'ghost'} size="sm" onClick={() => setCategoryFilter(cat)}>{cat}</Button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="eventos__empty">
            <Text tone="muted">No hay eventos en esta categoría</Text>
          </div>
        ) : (
          <div className="eventos__grid">
            {filtered.map((event) => (
              <article key={event.id} className="event-card" onClick={() => setSelectedEvent(event)}>
                <div className="event-card__image" style={{backgroundImage: `url('${event.image}')`}}>
                  <span className="event-card__category">{event.category}</span>
                </div>
                <div className="event-card__body">
                  <div className="event-card__date">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {new Date(event.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <Heading level={4} className="event-card__title">{event.title}</Heading>
                  <Text className="event-card__summary">{event.summary}</Text>
                  <div className="event-card__meta">
                    <span className="event-card__location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {event.location}
                    </span>
                    <span className="event-card__price">{event.price}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="event-card__btn">Ver detalles</Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedEvent && (
        <div className="modal" role="dialog" aria-modal="true" onClick={() => setSelectedEvent(null)}>
          <div className="modal__backdrop" />
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Cerrar" onClick={() => setSelectedEvent(null)}>×</button>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="modal__img" />
            <div className="modal__body">
              <div className="modal__meta">
                <span className="modal__badge">{selectedEvent.category}</span>
                <span className="modal__badge-secondary">{selectedEvent.price}</span>
              </div>
              <Heading level={3}>{selectedEvent.title}</Heading>
              <Text>{selectedEvent.description}</Text>
              
              <div className="modal__details">
                <div className="modal__detail-item">
                  <strong>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Fecha
                  </strong>
                  <p>{new Date(selectedEvent.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className="modal__detail-item">
                  <strong>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Horario
                  </strong>
                  <p>{selectedEvent.schedule}</p>
                </div>
                <div className="modal__detail-item">
                  <strong>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Ubicación
                  </strong>
                  <p>{selectedEvent.location}</p>
                </div>
                <div className="modal__detail-item">
                  <strong>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M2 21v-4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Cupo
                  </strong>
                  <p>{selectedEvent.spots} lugares disponibles</p>
                </div>
              </div>

              <div className="modal__actions">
                <Button variant="primary">Registrarme</Button>
                <Button variant="ghost" onClick={() => setSelectedEvent(null)}>Cerrar</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
