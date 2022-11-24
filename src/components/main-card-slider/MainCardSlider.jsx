import { useEffect, useRef, useState } from 'react';
import c from './MainCardSlider.module.css';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import sliderCardData from '../../sliderCard-data.json';

function MainCardSlider() {
  const g = useRef();
  const [SliderBtn, setSliderBtn] = useState(0);
  let left = () => {
    if (SliderBtn > 0) {
      setSliderBtn(SliderBtn - 200);
    }
  };
  let right = () => {
    if (SliderBtn < sliderCardData.length * 100) {
      setSliderBtn(SliderBtn + 200);
    }
  };

  useEffect(() => {
    g.current.scrollLeft = SliderBtn;
  }, [SliderBtn]);

  return (
    <div className={c.cards}>
      <button onClick={left} className={c.leftBtn}>
        <AiOutlineLeft />
      </button>
      <div className={c.wrap} ref={g}>
        {sliderCardData.map((el) => {
          return (
            <div>
              <div key={uuidv4} className={c.sliders}>
                <img src={el.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={right} className={c.rightBtn}>
        <AiOutlineRight />
      </button>
    </div>
  );
}
export default MainCardSlider;
