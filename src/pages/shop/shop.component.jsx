// import SHOP_DATA from '../../mockup_data/shopData';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {useSelector} from 'react-redux'

export default function ShopPage() {
  // const collections = SHOP_DATA;
  const collections = useSelector(state => state.shop.collections);

  return (
    <div className="shop-page">
      {collections &&
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
}
