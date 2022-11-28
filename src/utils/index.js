import { useEffect } from 'react';
import './index.css';
import { useLocation } from 'react-router-dom';
const Container = (props) => {
  return <div className="container">{props.children}</div>;
};

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { pathname } = useLocation();
  if (pathname.includes('login') || pathname.includes('signup')) {
    return;
  }
  return (
    <div onClick={scrollToTop} className="back-to-top">
      <span>Back to top</span>
    </div>
  );
};

export { Container, BackToTop };
