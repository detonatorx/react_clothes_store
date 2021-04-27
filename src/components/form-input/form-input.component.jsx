import './form-input.styles.scss';

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label ? (
        <label
          className={`${otherProps.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
