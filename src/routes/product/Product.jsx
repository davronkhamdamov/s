import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import c from './Product.module.css';
// import { v4 as uuidv4 } from 'uuid';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import Loader from '../../components/loader/Loader';

const Product = () => {
  const [loader, setLoader] = useState(true);
  const [allData, setAllData] = useState(null);
  useState(() => {
    axios.get('http://localhost:8000/v2/allproducts').then((res) => {
      res.status && setLoader(false);
      setAllData(res.data);
    });
  }, []);
  return (
    <div className={c.wrapper}>
      <div className={c.Result}>
        <p className={c.Resulttext}>
          1-16 of over 4,000 results for <span>"Nintendo Switch Games"</span>
        </p>
      </div>
      <div className={c.productHero}>
        <div className={c.ProductRating}>
          <h4>Department</h4>
          <p>Any Department </p>
          <p>Video Games</p>
          <p>Nintendo Switch Consoles, Games & Accessories</p>
          <h4 className={c.ProductRatingtitle}>Nintendo Switch Games</h4>
          <br />
          <h4>Customer Reviews</h4>
          <br />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <br />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <br />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <br />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <br />
          <br />
          <h4>Featured Brands</h4>
          <ul>
            <li className={c.productList}>
              <input type="checkbox" />
              <p>Nintendo</p>
            </li>
            <li className={c.productList}>
              <input type="checkbox" />
              <p>SEGA</p>
            </li>
            <li className={c.productList}>
              <input type="checkbox" />
              <p>Nighthawk Interactive</p>
            </li>
            <li className={c.productList}>
              <input type="checkbox" />
              <p>Maximum Games</p>
            </li>
            <li className={c.productList}>
              <input type="checkbox" />
              <p>Outright Games</p>
            </li>
            <li className={c.productList}>
              <input type="checkbox" />
              <p>Ubisoft</p>
            </li>
            <li className={c.productList}>
              <input type="checkbox" />
              <p>WARNER BROS</p>
            </li>
            <p>See more</p>
          </ul>
          <br />
          <h4>Price</h4>
          <br />
          <ul>
            <li>Under $10 </li>
            <li>$10 to $15</li>
            <li>$15 to $25</li>
            <li>$25 to $35</li>
            <li>$35 & Above</li>
          </ul>
          <div className={c.btngroup}>
            <input type="text" placeholder="$Min" />
            <input type="text" placeholder="$Max" />
            <button>Go</button>
          </div>
        </div>
        <div className={c.ProductResult}>
          <h3>RESULTS</h3>
          {allData?.map((el) => {
            return (
              <div className={c.ProductResultwRrapper}>
                <Link
                  to={`/seemore/product/${el._id}`}
                  className={c.ProductImgWrapper}
                >
                  <img
                    className={c.productImg}
                    src={el.image[0].url}
                    alt=""
                    width={150}
                    height={200}
                  />
                </Link>
                <div className={c.ProductResultDes}>
                  <h3 className={c.ProductResultDesTitle}>{el.name}</h3>
                  <p className={c.ProductData}>{el.time}</p>
                  <p className={c.ProductAuthor}>{el.address}</p>
                  {el.ratings % 1 === 0 ? (
                    new Array(el.ratings).fill('#').map(() => <AiFillStar />)
                  ) : (
                    <>
                      {new Array(Math.floor(el.ratings)).fill('#').map(() => (
                        <AiFillStar />
                      ))}
                      <BsStarHalf />
                    </>
                  )}
                  <hr />
                  <p className={c.ProductAuthor}>{el.author}</p>
                  <h1 className={c.Resulttitle}>
                    <sup>$</sup>
                    {el.price}
                  </h1>{' '}
                  <p className={c.sail}> $59.99</p>
                  <hr />
                  <p className={c.productcategory}>{el.productCategory}</p>
                  <p className={c.productText}>
                    {el.description.split(' ').slice(0, 20).join(' ')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default Product;
