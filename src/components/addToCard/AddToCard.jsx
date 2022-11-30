import React, { useState } from 'react';
import './AddToCard.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const AddToCard = ({ productId }) => {
  const product = useSelector((id) => id);
  const [add, setAdd] = useState(false);
  const toggleClass =
    'AddToCard' + ' ' + `${product.id.id === productId ? 'added' : ''}`;
  const dispatch = useDispatch();
  const action = {
    type: 'PRODUCT_ADD',
    data: productId,
  };
  return (
    <div>
      <button
        className={toggleClass}
        onClick={() => {
          dispatch(action);
          setAdd(!add);
        }}
      >
        <div className="default">Add to cart</div>
        <div className="success">Added</div>
        <div className="cart">
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="dots"></div>
      </button>
    </div>
  );
};

export default AddToCard;
