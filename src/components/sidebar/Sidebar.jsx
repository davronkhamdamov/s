import c from './Sidebar.module.css';
import { RiArrowLeftLine } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import data from '../../all.menu.json';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const sidebaropen = useRef();
  const [sidebarLimit, setSidebarLimit] = useState(4);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(null);
  useEffect(() => {
    if (selectedSidebarItem) {
      sidebaropen.current.scrollLeft = sidebaropen.current.offsetWidth;
    } else {
      sidebaropen.current.scrollLeft = 0;
    }
  }, [selectedSidebarItem]);

  return (
    <>
      <div
        ref={sidebaropen}
        className={
          isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`
        }
      >
        <div className={c.sidebarWrapper}>
          <div className={c.sliderLogin}>
            <FaUserCircle className={c.sliderLoginUserLogo} />
            <h2>Hello, sign in</h2>
          </div>
          {data.map((el) => {
            return (
              <div className={c.cliderData}>
                <h2 className={c.subBarTitle}>{el.subBarTitle}</h2>
                {el.items.slice(0, sidebarLimit).map((e) => {
                  return (
                    <div
                      className={c.subListTitle}
                      onClick={() => {
                        setSelectedSidebarItem(e.subLists);
                      }}
                    >
                      <p className={c.subListText}>
                        {e.subListTitle}
                        <AiOutlineArrowRight />
                      </p>
                    </div>
                  );
                })}
                <div
                  onClick={() => {
                    sidebarLimit <= 4
                      ? setSidebarLimit(el.items.length)
                      : setSidebarLimit(4);
                  }}
                >
                  <p className={c.sidebarAllData}>
                    {sidebarLimit <= 4 ? 'See More' : 'See Less'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={c.sliderOpen}>
          <div className={c.sliderLogin}>
            <FaUserCircle className={c.sliderLoginUserLogo} />
            <h2>Hello, sign in</h2>
          </div>
          {selectedSidebarItem?.map((element) => {
            return (
              <div className={c.sliderOpenWrapper}>
                <div
                  className={c.backBtn}
                  onClick={() => {
                    setSelectedSidebarItem(null);
                  }}
                >
                  <RiArrowLeftLine className={c.backicon} />
                  Main Menu
                </div>
                <h2 className={c.sliderOpenTitle}>{element.title}</h2>
                {element.text.map((el) => {
                  return (
                    <div className={c.openSlideText}>
                      <p>{el}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <FiX
        className={isSidebarOpen === true ? `${c.close}` : `${c.hidden}`}
        onClick={() => {
          setIsSidebarOpen(false);
        }}
      />
    </>
  );
};

export default Sidebar;
