import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import c from './ProductItem.module.css';
const ProductItem = () => {
  const { productid } = useParams();
  const [dataProduct, setProductData] = useState();
  const [selectimg, setSelectImg] = useState(0);
  const [trakkerActive, setTarkkerActive] = useState(false);
  const [trakkerPos, setTrakkerPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    axios
      .get(`http://localhost:8000/v2/allproducts/${productid}`)
      .then((res) => setProductData(res.data));
  }, []);
  const trakker = (e) => {
    setTrakkerPos({ x: e.clientX, y: e.clientY });
  };
  return (
    <div className={c.ProductItemWrapper}>
      <div className={c.productImgItem}>
        {dataProduct?.image?.map((imageel, i) => {
          return (
            <img
              onMouseEnter={() => setSelectImg(i)}
              src={imageel?.url}
              style={{
                boxShadow: `${
                  selectimg === i ? '0 0 10px 3px blue' : '0 0 10px transparent'
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
          src={dataProduct?.image[selectimg]?.url}
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
            backgroundImage: `url(${dataProduct?.image[selectimg]?.url})`,
            backgroundPositionX: `${-trakkerPos.x + 200}px`,
            backgroundPositionY: `${-trakkerPos.y + 200}px`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '200%',
          }}
        ></div>
      )}
    </div>
  );
};

export default ProductItem;
