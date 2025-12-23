import Heading from '../atoms/Heading.jsx';
import Text from '../atoms/Text.jsx';
import Button from '../atoms/Button.jsx';
import Image from '../atoms/Image.jsx';
import './HeroSection.css';

export default function HeroSection({ title, description, ctaLabel = 'Conoce mas', image }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <Heading level={1}>{title}</Heading>
        <Text>{description}</Text>
        <Button variant="primary">{ctaLabel}</Button>
      </div>
      {image && (
        <div className="hero__image">
          <Image src={image} alt={title} rounded />
        </div>
      )}
    </section>
  );
}
