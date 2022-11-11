import { Container } from "../../utils"
import "./HeroBanner.css";
import { useRef, useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const HeroBanner = () => {
  const [carouselScrollLength, setCarouselScrollLength] = useState(0);
  const $carousel = useRef();

  const bannerImages = [
    "https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
  ]

  const swipeLeft = () => {

    if(carouselScrollLength > 0){
      setCarouselScrollLength(carouselScrollLength - 1)
    }
    else{
      setCarouselScrollLength(6)
    }
  }

  const swipeRight = () => {
    if(carouselScrollLength < bannerImages.length - 1){
      setCarouselScrollLength(carouselScrollLength + 1)
    }
    else{
      setCarouselScrollLength(0)
    }
  }

  console.log(carouselScrollLength)

  useEffect(() => {
    // $carousel.current.scrollBy({
    //   left: 1440,
    //   behavior: "smooth"
    // })
  }, [carouselScrollLength])
  

  return (
    <Container>
      <div className="hero-banner">
        <div className="carousel" ref={$carousel}>
          {/* {
            bannerImages.map(carouselItem => 
              <div className="carousel__item"> */}
                <img className="carousel__item-image" src={bannerImages[carouselScrollLength]} alt="" />
              {/* </div>  
            )
          } */}
        </div>
        <button onClick={swipeLeft} className="carousel-prev-btn"><SlArrowLeft/></button>
        <button onClick={swipeRight} className="carousel-next-btn"><SlArrowRight/></button>
      </div>
    </Container>
  )
}

export default HeroBanner