import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToCard from '../../components/addToCard/AddToCard';
import c from './ProductItem.module.css';

const ProductItem = () => {
  const { productid } = useParams();
  const [dataProduct, setProductData] = useState();
  const [dataProductectimg, setSdataProductectImg] = useState(0);
  const [trakkerActive, setTarkkerActive] = useState(false);
  const [trakkerPos, setTrakkerPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    axios
      .get(`http://localhost:8000/v2/allproducts/${productid}`)
      .then((res) => setProductData(res.data));
  }, [productid]);
  const trakker = (e) => {
    setTrakkerPos({ x: e.clientX, y: e.clientY });
  };
  return (
    <div className={c.wrapper}>
      <div className={c.ProductItemWrapper}>
        <div className={c.productImgItem}>
          {dataProduct?.image?.map((imagedataProduct, i) => {
            return (
              <img
                onMouseEnter={() => setSdataProductectImg(i)}
                src={imagedataProduct?.url}
                style={{
                  boxShadow: `${
                    dataProductectimg === i
                      ? '0 0 10px 3px blue'
                      : '0 0 10px transparent'
                  }`,
                }}
                alt=""
              />
            );
          })}
        </div>
        <div className={c.trakkerwrap}>
          <img
            onMouseLeave={() => setTarkkerActive(false)}
            onMouseMove={(e) => {
              setTarkkerActive(true);
              trakker(e);
            }}
            src={dataProduct?.image[dataProductectimg]?.url}
            alt=""
          />
          {trakkerActive && (
            <div
              style={{
                top: `${trakkerPos.y - 200}px`,
                left: `${trakkerPos.x - 200}px`,
              }}
              className={c.trakker}
            ></div>
          )}
        </div>
        {trakkerActive && (
          <div
            className={c.preview}
            style={{
              backgroundImage: `url(${dataProduct?.image[dataProductectimg]?.url})`,
              backgroundPositionX: `${-trakkerPos.x + 200}px`,
              backgroundPositionY: `${-trakkerPos.y + 200}px`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '200%',
            }}
          ></div>
        )}
      </div>
      <div className={c.prductInfo}>
        <div className={c.ProductResultwRrapper}>
          <h3 className={c.ProductResultDesTitle}>{dataProduct?.name}</h3>
          <p className={c.ProductData}>{dataProduct?.time}</p>
          <p className={c.ProductAuthor}>{dataProduct?.address}</p>
          <hr />
          <p className={c.ProductAuthor}>{dataProduct?.author}</p>
          <h1 className={c.Resulttitle}>
            <sup>$</sup>
            {dataProduct?.price}
          </h1>
          <span className={c.sail}> $59.99</span>
          <hr />
          <p className={c.productcategory}>{dataProduct?.productCategory}</p>
          <p className={c.productText}>
            {dataProduct?.description?.split(' ').slice(0, 20).join(' ')}
          </p>
        </div>
        <AddToCard productId={productid} />
      </div>
    </div>
  );
};

export default ProductItem;
