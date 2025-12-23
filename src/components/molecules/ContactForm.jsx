import { useState } from 'react';
import Label from '../atoms/Label.jsx';
import Input from '../atoms/Input.jsx';
import Button from '../atoms/Button.jsx';
import './ContactForm.css';

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) errs.name = 'El nombre es obligatorio';
    if (!values.email.trim()) errs.email = 'El correo es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Correo no válido';
    if (!values.message.trim() || values.message.trim().length < 10) errs.message = 'Mensaje de al menos 10 caracteres';
    return errs;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Simulación de envío
      setTimeout(() => {
        alert('¡Gracias! Hemos recibido tu mensaje.');
        setValues({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 400);
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <Label htmlFor="name">Nombre</Label>
      <Input id="name" name="name" type="text" placeholder="Tu nombre" value={values.name} onChange={onChange} aria-invalid={!!errors.name} />
      {errors.name && <span className="contact-form__error">{errors.name}</span>}

      <Label htmlFor="email">Correo</Label>
      <Input id="email" name="email" type="email" placeholder="tu@correo.com" value={values.email} onChange={onChange} aria-invalid={!!errors.email} />
      {errors.email && <span className="contact-form__error">{errors.email}</span>}

      <Label htmlFor="message">Mensaje</Label>
      <textarea id="message" name="message" className="contact-form__textarea" placeholder="Escribe tu mensaje" value={values.message} onChange={onChange} aria-invalid={!!errors.message} />
      {errors.message && <span className="contact-form__error">{errors.message}</span>}

      <Button type="submit" disabled={submitted}>{submitted ? 'Enviando…' : 'Enviar'}</Button>
    </form>
  );
}
