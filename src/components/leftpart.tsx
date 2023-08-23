/** @format */
import destopLogo from "@/assets/img/logo/9065323.png";
interface IPropsSider {
  showSider: boolean;
  setShowSider: (value: boolean) => void;
}
const LeftPart = ({ showSider, setShowSider }: IPropsSider) => {
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
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
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
