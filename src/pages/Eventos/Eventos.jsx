import { useMemo, useState, useEffect } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import directoraImg from '../../assets/images/directora-1.JPG';
import diaMuertosImg from '../../assets/images/diademuertos.JPG';
import fiscaliaImg from '../../assets/images/fiscalia.JPG';
import semillasImg from '../../assets/images/semillas.JPG';
import './Eventos.css';

const eventsData = [
  // DESTACADOS
  { 
    id: 1, 
    title: 'Congreso Internacional de Trabajo Social', 
    date: '2025-10-23', 
    category: 'Destacado',
    summary: 'El pasado 23 de octubre de 2025 se llevó a cabo el VII Congreso Internacional de Trabajo Social, bajo el lema "Tejiendo Caminos de Trabajo Social, Ante los Nuevos Contextos Emergentes".',
    description: 'El VII Congreso Internacional de Trabajo Social reunió a profesionales, académicos y estudiantes de distintos países bajo el lema "Tejiendo Caminos de Trabajo Social, Ante los Nuevos Contextos Emergentes". Durante el evento se presentaron ponencias, mesas de diálogo y talleres sobre los retos actuales del trabajo social en América Latina.',
    location: 'Auditorio Principal',
    schedule: '9:00 AM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    spots: 200,
    price: 'Gratuito'
  },
  { 
    id: 2, 
    title: 'Presentación de directora', 
    date: '2025-10-21', 
    category: 'Destacado',
    summary: 'El día de hoy 21 de octubre del presente año se presentó ante la comunidad educativa la Lic. Gabriela Esperanza Méndez Bermúdez como nueva directora de la Escuela Superior de Trabajo Social "Jesús Aquino Juan".',
    description: 'La comunidad educativa de la Escuela Superior de Trabajo Social "Jesús Aquino Juan" dio la bienvenida a la Lic. Gabriela Esperanza Méndez Bermúdez como nueva directora de la institución. En una ceremonia emotiva, se destacó su trayectoria profesional y su compromiso con la educación y el trabajo social.',
    location: 'Auditorio Principal',
    schedule: '10:00 AM - 12:00 PM',
    image: directoraImg,
    spots: 150,
    price: 'Gratuito'
  },
  { 
    id: 3, 
    title: '47 años de la Profesionalización del trabajo Social en Chiapas', 
    date: '2025-09-24', 
    category: 'Destacado',
    summary: '"Nuestro aniversario momentos para celebrar las alegrías de hoy, las memorias del ayer y las esperanzas del mañana".',
    description: 'La Escuela Superior de Trabajo Social "Jesús Aquino Juan" celebró 47 años de la profesionalización del Trabajo Social en Chiapas. Un evento lleno de emotivos recuerdos, reconocimientos a la labor educativa y la visión de futuro que guía a la institución en la formación de profesionales comprometidos con el bienestar social.',
    location: 'Campus completo',
    schedule: '9:00 AM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
    spots: 300,
    price: 'Gratuito'
  },
  // NOTICIAS
  { 
    id: 4, 
    title: 'Día de muertos', 
    date: '2025-10-29', 
    category: 'Noticia',
    summary: 'Hoy miércoles 29 de octubre de 2025, dentro del marco del "DIA DE MUERTOS O DE LOS FIELES DIFUNTOS", nuestra comunidad educativa se une a la celebración que remarca nuestra identidad como parte de nuestra cultura mexicana.',
    description: 'La comunidad educativa de la Escuela Superior de Trabajo Social "Jesús Aquino Juan" celebró el Día de Muertos con una ofrenda tradicional, actividades culturales y reflexiones sobre la importancia de preservar nuestras tradiciones mexicanas. Estudiantes y docentes participaron en la elaboración de altares y compartieron la riqueza de esta festividad.',
    location: 'Plaza central',
    schedule: '10:00 AM - 4:00 PM',
    image: diaMuertosImg,
    spots: 200,
    price: 'Gratuito'
  },
  { 
    id: 5, 
    title: 'Visita guiada a la Fiscalía de la Mujer', 
    date: '2025-10-23', 
    category: 'Noticia',
    summary: 'Días 23 y 24 de octubre, alumnos de los primeros semestres de la Escuela Superior de Trabajo Social "Jesús Aquino Juan" visitaron la Fiscalía de la Mujer con la finalidad que conozcan las funciones que desempeñan las trabajadoras y trabajadores sociales en diferentes áreas de intervención.',
    description: 'Estudiantes de primer semestre realizaron una visita educativa a la Fiscalía de la Mujer para conocer de primera mano el trabajo que realizan los profesionales en Trabajo Social en el ámbito de la justicia y la atención a víctimas de violencia de género. Esta actividad forma parte de las prácticas de vinculación con instituciones.',
    location: 'Fiscalía de la Mujer',
    schedule: '9:00 AM - 1:00 PM',
    image: fiscaliaImg,
    spots: 40,
    price: 'Gratuito'
  },
  { 
    id: 6, 
    title: 'Generación 2021 - 2025 "semillas que fructifican"', 
    date: '2025-08-15', 
    category: 'Noticia',
    summary: '15 de agosto de 2025, la Escuela Superior de Trabajo Social "Jesús Aquino Juan", llevó a cabo la ceremonia de graduación de la sexagésimo tercera, generación 2021 - 2025 "semillas que fructifican" de Licenciadas y Licenciados En Trabajo Social.',
    description: 'En una emotiva ceremonia, la Escuela Superior de Trabajo Social "Jesús Aquino Juan" graduó a la sexagésima tercera generación 2021-2025 bajo el lema "semillas que fructifican". Los nuevos profesionales en Trabajo Social recibieron sus títulos rodeados de familiares, docentes y autoridades, listos para contribuir al desarrollo social de sus comunidades.',
    location: 'Auditorio Principal',
    schedule: '10:00 AM - 1:00 PM',
    image: semillasImg,
    spots: 300,
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
    
    // Mantener el orden original del array (por id)
    return result.sort((a, b) => a.id - b.id);
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
