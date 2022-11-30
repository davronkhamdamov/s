import React, { useEffect, useState } from 'react';
import shopImg from '../../assets/images/shopImg.svg';
import { useSelector } from 'react-redux';
import axios from 'axios';
import c from './Shop.module.css';
const Shop = () => {
  const productId = useSelector((id) => id);
  const [checkId, setCheckId] = useState(false);
  const [productIdData, setProductIdData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/v2/allproducts/${productId.id.id}`)
      .then((res) => setProductIdData(res.data));
    if (productId.id.id === '') {
      setCheckId(true);
    } else setCheckId(false);
  }, [productId]);
  console.log(productIdData);
  return (
    <div>
      {checkId && (
        <div className={c.emptyShop}>
          <img src={shopImg} alt="" width={500} height={500} />
          <h1>Nothing found</h1>
        </div>
      )}
      {!checkId && (
        <div className={c.shopping}>
          <img src={productIdData?.image[0]?.url} alt="" />
          <div className={c.productdes}>
            <h1 className={c.productname}>{productIdData?.name}</h1>
            <h2 className={c.productAdress}>{productIdData?.address}</h2>
            <p className={c.productAuthor}>{productIdData?.author}</p>
            <p className={c.productPhone}>{productIdData?.authorPhoneNumber}</p>
            <p className={c.productdescible}>{productIdData?.description}</p>
            <div className={c.buy}>
              <p>Cost: {productIdData?.price}$</p>
              <button className={c.shopBtn}>Buy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
