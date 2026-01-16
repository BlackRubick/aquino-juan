import { useEffect } from 'react';
import { FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import HeroSection from '../../components/organisms/HeroSection.jsx';
import Heading from '../../components/atoms/Heading.jsx';
import Text from '../../components/atoms/Text.jsx';
import ContactForm from '../../components/molecules/ContactForm.jsx';
import './Contacto.css';

export default function Contacto() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal--visible'));
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="contacto">
      <HeroSection
        title="Contacto"
        description="Estamos aquí para resolver tus dudas. Contáctanos y te responderemos a la brevedad."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="contacto__section reveal">
        <div className="contacto__grid">
          <div className="contacto__info">
            <Heading level={2}>Información de Contacto</Heading>
            <Text>Ponte en contacto con nosotros a través de cualquiera de estos medios</Text>

            <div className="info-cards">
              <article className="info-contact-card">
                <div className="info-contact-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Email</h3>
                <p>contacto@trabajosocial.edu.mx</p>
                <p className="secondary">informes@trabajosocial.edu.mx</p>
              </article>

              <article className="info-contact-card">
                <div className="info-contact-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Teléfono</h3>
                <p>(52) 961 614 1915</p>
                <p className="secondary">Lun - Vie: 9:00 AM - 6:00 PM</p>
              </article>

              <article className="info-contact-card">
                <div className="info-contact-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Dirección</h3>
                <p>Km. 6.5 Carretera Tuxtla Gutiérrez-Chiapa de Corzo</p>
                <p className="secondary">Satélite Loma Larga, Tuxtla Gutiérrez, Chiapas</p>
              </article>

              <article className="info-contact-card">
                <div className="info-contact-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Horario</h3>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="secondary">Sábados: 9:00 AM - 1:00 PM</p>
              </article>
            </div>

            <div className="social-links">
              <Heading level={3}>Síguenos en Redes Sociales</Heading>
              <div className="social-buttons">
                <a href="https://www.facebook.com/TS.Chiapas" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>
                <a href="https://www.youtube.com/@escuelasuperiordetrabajoso4213" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                  <FaYoutube size={24} />
                </a>
                <a href="https://wa.me/529611016620" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="contacto__form">
            <Heading level={2}>Envíanos un Mensaje</Heading>
            <Text>Completa el formulario y nos pondremos en contacto contigo</Text>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="contacto__map reveal">
        <Heading level={2} align="center">Ubícanos</Heading>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3819.4821384297426!2d-93.06011!3d16.73653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f18d4c9a9a9a9%3A0x14513743042714200823!2zRXNjdWVsYSBTdXBlcmlvciBkZSBUcmFiYWpvIFNvY2lhbCBKZXPDus1zIEFxdWlubyBKdWFu!5e0!3m2!1ses!2smx!4v1704048000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
