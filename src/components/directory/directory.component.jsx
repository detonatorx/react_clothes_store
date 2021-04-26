import { useState } from 'react';
import './directory.component.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  const initial = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ];

  const [sections, setSections] = useState(initial);

  return (
    <div>
      <div className="directory-menu">
        {sections &&
          sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem title={title} id={id} imageUrl={imageUrl} size={size} />
          ))}
      </div>
    </div>
  );
};

export default Directory;
