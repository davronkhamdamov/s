import c from './Footer.module.css';
import footerHeroData from '../../footer.data.json';
import amazonLogo from '../../assets/images/logo.png';
import footerMainData from '../../footer.main.json';
import { v4 as uuidv4 } from 'uuid';

const Footer = () => {
  return (
    <footer>
      <div className={c.footerHero}>
        {footerHeroData.map((el) => {
          return (
            <div
              key={uuidv4()}
              className={c.footerTitle}
              style={{ width: `${el.title.length * 0.6}%` }}
            >
              <h3 className={c.title}>{el.title}</h3>
              {el.links.map((el) => {
                return (
                  <p key={uuidv4()} className={c.link}>
                    {el.link}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={c.footerWrapper}>
        <div className={c.footerItem}>
          <img className={c.footerLogo} src={amazonLogo} alt="" />
          <div className={c.footerServies}>
            <select className={c.footerSelect}>
              <option value="en">English</option>
              <option value="ru">Russia</option>
              <option value="uz">Uzbekistan</option>
            </select>
            <select className={c.footerSelect}>
              <option value="usd">USD-U.S.Dollor</option>
              <option value="ussd">Uzbekistan</option>
            </select>
            <select className={c.footerSelect}>
              <option value="usa">United States</option>
              <option value="rus">Russia</option>
              <option value="uzb">Uzbekistan</option>
            </select>
          </div>
        </div>
      </div>
      <div className={c.footerHeroWrapper}>
        <div className={c.footerMain}>
          {footerMainData.map((el) => {
            return (
              <a key={uuidv4()} href={el.title} className={c.FooterMainItem}>
                <p key={uuidv4()} className={c.FooterMainTitle}>
                  {el.title}
                </p>
                <p className={c.FooterMainText}>{el.text}</p>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
