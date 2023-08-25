/** @format */
import destopLogo from "@/assets/img/logo/9065323.png";
import { useState, useEffect } from "react";
interface IPropsSider {
  showSider: boolean;
  setShowSider: (value: boolean) => void;
}
const LeftPart = ({ showSider, setShowSider }: IPropsSider) => {
  const [activeTab, setActiveTab] = useState<string>("home");
  useEffect(() => {
    const { hash } = window.location;
    const tab = hash.replace("#", "");
    setActiveTab(tab);

    let section = document.querySelector(`${hash}`);
    setTimeout(() => {
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 1000);

    console.log("---> window", window.location);
  }, []);
  const listMenu: string[] = ["home", "about", "skill", "project", "contact"];
  const handleActiveTab = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item: string
  ) => {
    setActiveTab(item);
    let section = document.querySelector(`#${item}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className={`arlo_tm_leftpart_wrap ${!showSider ? "opened" : ""}`}>
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={destopLogo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              {listMenu.map((item, index) => {
                return (
                  <li key={index} onClick={(e) => handleActiveTab(e, item)}>
                    <a
                      className={`${item === activeTab ? "active" : ""}`}
                      href={`#${item}`}
                    >
                      {item.toLocaleUpperCase()}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="#">
                    <i className="xcon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            className={`arlo_tm_resize ${!showSider ? "opened" : ""}`}
            href="#"
            onClick={() => setShowSider(!showSider)}
          >
            <i className={`xcon-angle-left ${!showSider ? "opened" : ""}`}></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftPart;
