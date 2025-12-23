import EventCard from '../molecules/EventCard.jsx';
import './EventsList.css';

export default function EventsList({ events = [] }) {
  return (
    <section className="events-list">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </section>
  );
}
