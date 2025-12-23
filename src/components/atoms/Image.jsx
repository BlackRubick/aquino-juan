import './Image.css';

export default function Image({ src, alt = '', rounded = false }) {
  if (!src) return null;
  return <img className={`image${rounded ? ' image-rounded' : ''}`} src={src} alt={alt} />;
}
