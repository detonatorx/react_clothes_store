import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { useSelector } from 'react-redux';

const Directory = () => {
  const sections = useSelector(state => state.directory.sections);

  return (
    <div>
      <div className="directory-menu">
        {sections &&
          sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
      </div>
    </div>
  );
};

export default Directory;
