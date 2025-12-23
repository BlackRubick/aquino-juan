import './Input.css';

export default function Input({ label, helper, ...rest }) {
  return (
    <div className="input-field">
      {label && <label className="input-label">{label}</label>}
      <input className="input-control" {...rest} />
      {helper && <span className="input-helper">{helper}</span>}
    </div>
  );
}
