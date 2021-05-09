import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useSelector } from 'react-redux';

const CollectionPage = ({ match }) => {
  // console.log(match);

  const collection = useSelector(
    state => state.shop.collections[match.params.collectionTitle]
  );
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items &&
          items.map(item => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CollectionPage;
