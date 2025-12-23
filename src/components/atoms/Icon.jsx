import './Icon.css';

export default function Icon({ src, alt = '', size = 24 }) {
  if (!src) return null;
  return <img className="icon" src={src} alt={alt} style={{ width: size, height: size }} />;
}
