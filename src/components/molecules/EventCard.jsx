import Heading from '../atoms/Heading.jsx';
import Text from '../atoms/Text.jsx';
import Button from '../atoms/Button.jsx';
import { formatDate } from '../../utils/formatDate.js';
import './EventCard.css';

export default function EventCard({ title, date, summary, image, ctaLabel = 'Ver más ...' }) {
  return (
    <article className="event-card">
      {image && (
        <div className="event-card__image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="event-card__content">
        <Heading level={4}>{title}</Heading>
        <Text tone="muted">{formatDate(date)}</Text>
        {summary && <Text>{summary}</Text>}
        <Button variant="primary" size="sm">{ctaLabel}</Button>
      </div>
    </article>
  );
}
