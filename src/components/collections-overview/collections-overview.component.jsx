import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = () => {
  const collections = useSelector(state => state.shop.collections);

  return (
    <div className="collections-overview">
      {collections &&
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
};

export default CollectionsOverview;
