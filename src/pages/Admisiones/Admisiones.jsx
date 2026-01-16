import { useEffect, useState } from 'react';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import Button from '../../components/atoms/Button.jsx';
import { Link } from 'react-router-dom';
import './Admisiones.css';

const steps = [
  { number: 1, title: 'Registro en línea', description: 'Completa el formulario de pre-registro en nuestro portal.' },
  { number: 2, title: 'Documentación', description: 'Entrega documentos oficiales en original y copia.' },
  { number: 3, title: 'Examen de admisión', description: 'Presenta examen de conocimientos y habilidades.' },
  { number: 4, title: 'Entrevista', description: 'Entrevista personal con el comité de admisiones.' },
  { number: 5, title: 'Resultados', description: 'Consulta resultados y realiza tu inscripción formal.' }
];

const documentos = [
  'Acta de nacimiento (original y 2 copias)',
  'Certificado de bachillerato (original y 2 copias)',
  'CURP (2 copias)',
  'Comprobante de domicilio (copia)',
  '6 fotografías tamaño infantil',
  'Certificado médico reciente',
  'Comprobante de pago de examen'
];

export default function Admisiones() {

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible'));
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="admisiones">
      <HeroSection
        title="Admisiones"
        description="Tu futuro comienza aquí. Conoce el proceso de admisión y únete a nuestra comunidad."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
      />

      {/* Tabs */}
      <div className="admisiones__tabs reveal">
        <a href="#proceso" className="admisiones__tab">Proceso</a>
        <a href="#documentos" className="admisiones__tab">Documentos</a>
        <a href="#convocatorias" className="admisiones__tab">Convocatorias</a>
      </div>

      {/* Proceso de inscripción */}
      <section id="proceso" className="admisiones__section reveal">
        <Heading level={2} align="center">Proceso de Inscripción</Heading>
        <Text align="center" tone="muted">Sigue estos pasos para formar parte de nuestra comunidad educativa</Text>
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-card__number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Documentos requeridos */}
      <section id="documentos" className="admisiones__section reveal">
        <Heading level={2}>Documentos Requeridos</Heading>
        <div className="documentos-grid">
          <div className="documentos-list">
            <h3>Requisitos para Licenciatura</h3>
            <ul>
              {documentos.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>
          <div className="documentos-note">
            <div className="note-icon">ℹ️</div>
            <h4>Nota importante</h4>
            <p>Todos los documentos deben ser entregados en la Oficina de Control Escolar de lunes a viernes de 9:00 AM a 2:00 PM.</p>
          </div>
        </div>
      </section>

      {/* Convocatorias activas */}
      <section id="convocatorias" className="admisiones__section reveal">
        <Heading level={2}>Convocatorias Activas</Heading>
        <div className="convocatorias-grid">
          <article className="convocatoria-card">
            <div className="convocatoria-badge">Vigente</div>
            <h3>Nuevo Ingreso Licenciatura 2025-B</h3>
            <p className="convocatoria-date">Fecha límite: 15 de Junio, 2025</p>
            <p>80 lugares disponibles para la Licenciatura en Trabajo Social</p>
            <Link to="/convocatorias"><Button variant="primary">Ver convocatoria</Button></Link>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="admisiones__cta reveal">
        <Heading level={2} align="center">¿Listo para iniciar tu proceso?</Heading>
        <Text align="center">Regístrate ahora o solicita más información</Text>
        <div className="cta-buttons">
          <Button variant="primary" size="lg">Registrarme Ahora</Button>
          <Link to="/contacto"><Button variant="secondary" size="lg">Solicitar Información</Button></Link>
        </div>
      </section>
    </div>
  );
}
