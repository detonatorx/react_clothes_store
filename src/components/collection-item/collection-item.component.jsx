import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItemAC } from '../../redux/cart/cart.reducer';
import { useDispatch } from 'react-redux';

export default function CollectionItem({ item }) {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <CustomButton onClick={() => dispatch(addItemAC(item))} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
}
