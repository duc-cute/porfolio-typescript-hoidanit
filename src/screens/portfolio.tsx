/** @format */

import LeftPart from "../components/leftpart";
import MobileMenu from "../components/mobile/menu";
import PreLoader from "../components/preloader";
import RightPart from "../components/rightpart";
import { FloatButton } from "antd";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const Portfolio = () => {
  const [showSider, setShowSider] = useState<boolean>(true);
  useEffect(() => {
    if (isMobile) {
      console.log("isMobile ", isMobile);
      setShowSider(false);
    }
  }, [isMobile]);

  return (
    <>
      <div className="arlo_tm_wrapper_all">
        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close">
            <a href="#"></a>
          </span>
        </div>

        <PreLoader />

        <MobileMenu />

        <div className="arlo_tm_content">
          <LeftPart showSider={showSider} setShowSider={setShowSider} />

          <RightPart showSider={showSider} setShowSider={setShowSider} />

          <FloatButton.BackTop />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
