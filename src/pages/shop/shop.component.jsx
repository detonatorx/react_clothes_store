import SHOP_DATA from '../../mockup_data/shopData';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

export default function ShopPage() {
  const collections = SHOP_DATA;

  return (<div className="shop-page">
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps}/>
      ))
    }
  </div>);
}
