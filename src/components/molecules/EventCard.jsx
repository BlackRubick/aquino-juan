import Heading from '../atoms/Heading.jsx';
import Text from '../atoms/Text.jsx';
import Button from '../atoms/Button.jsx';
import { formatDate } from '../../utils/formatDate.js';
import './EventCard.css';

export default function EventCard({ title, date, summary, ctaLabel = 'Ver detalle' }) {
  return (
    <article className="event-card">
      <Heading level={4}>{title}</Heading>
      <Text tone="muted">{formatDate(date)}</Text>
      {summary && <Text>{summary}</Text>}
      <Button variant="primary" size="sm">{ctaLabel}</Button>
    </article>
  );
}
