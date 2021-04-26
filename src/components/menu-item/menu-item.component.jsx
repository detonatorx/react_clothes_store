import './menu-item.component.scss';

const MenuItem = ({ title, id, imageUrl, size }) => (
  <div className={`${size} menu-item`} key={id}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
);

export default MenuItem;
