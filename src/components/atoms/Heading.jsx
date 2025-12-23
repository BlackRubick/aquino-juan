import './Heading.css';

export default function Heading({ level = 2, children, align = 'left' }) {
  const Tag = `h${level}`;
  return (
    <Tag className={`heading heading-${level}`} style={{ textAlign: align }}>
      {children}
    </Tag>
  );
}
