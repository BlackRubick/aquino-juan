import './Text.css';

export default function Text({ children, tone = 'default' }) {
  return <p className={`text text-${tone}`}>{children}</p>;
}
