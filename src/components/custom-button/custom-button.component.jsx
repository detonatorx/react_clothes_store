import './custom-button.styles.scss';

export default function CustomButton({ children, inverted, ...otherProps }) {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
