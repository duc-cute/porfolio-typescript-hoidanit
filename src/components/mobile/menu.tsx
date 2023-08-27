/** @format */
import logoMobile from "@/assets/img/logo/mobile_logo.png";
import { useState, useEffect } from "react";
const MobileMenu = () => {
  const listMenu: string[] = ["home", "about", "skill", "project", "contact"];
  const [activeTab, setActiveTab] = useState<string>("home");

  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  const handlesetShowMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const handleActiveTab = (item: string) => {
    setActiveTab(item);
    let section = document.querySelector(`#${item}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const tab = hash.replace("#", "");
      setActiveTab(tab);
      let section = document.querySelector(`${tab}`);
      // setTimeout(() => {
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // }, 1000);
    }
  }, []);

  return (
    <>
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="index.html">
              <img src={logoMobile} alt="mobile_logo" />
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div
              className={`hamburger hamburger--collapse-r ${
                showMenuMobile ? "is-active" : ""
              }`}
              onClick={handlesetShowMobile}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          // className="arlo_tm_mobile_menu_wrap"
          className={`arlo_tm_mobile_menu_wrap ${
            showMenuMobile ? "" : "hidden"
          }`}
          // style={{ display: showMenuMobile ? "block" : "none" }}
          style={{ overflow: showMenuMobile ? "visible" : "hidden" }}
        >
          <div className="mob_menu">
            <ul className="anchor_nav">
              {listMenu.map((item, index) => {
                return (
                  <li key={index} onClick={() => handleActiveTab(item)}>
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
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
