import './collection-preview.styles.scss';
import CollectionItem from '../colletion-item/collection-item.component';

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items &&
          items
            .filter((item, i) => i < 4)
            .map(({id, ...otherItemProps}) => (
              <CollectionItem key={id} {...otherItemProps}/>
            ))
        }
      </div>
    </div>
  );
}
