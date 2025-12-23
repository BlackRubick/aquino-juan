import Image from '../atoms/Image.jsx';
import Heading from '../atoms/Heading.jsx';
import Text from '../atoms/Text.jsx';
import Button from '../atoms/Button.jsx';
import './TeacherCard.css';

export default function TeacherCard({ photo, name, specialty, area, ctaLabel = 'Ver perfil', onClickDetail }) {
  const handleClick = () => {
    console.log('Button clicked for:', name);
    if (onClickDetail) {
      onClickDetail();
    }
  };

  return (
    <article className="teacher-card">
      <div className="teacher-card__image-wrapper">
        <Image src={photo} alt={name} className="teacher-card__image" />
      </div>
      <div className="teacher-card__body">
        <Heading level={4} className="teacher-card__name">{name}</Heading>
        <Text tone="muted" className="teacher-card__specialty">{specialty}</Text>
        {area && <span className="teacher-card__badge">{area}</span>}
      </div>
      <Button variant="secondary" onClick={handleClick} className="teacher-card__btn">{ctaLabel}</Button>
    </article>
  );
}
