/** @format */

import About from "./content/about";
import HomeCV from "./content/homecv";
import Project from "./content/project";
import Skill from "./content/skill";
import Contact from "./content/contact";

interface IPropsSider {
  showSider: boolean;
  setShowSider: (value: boolean) => void;
}
const RightPart = ({ showSider, setShowSider }: IPropsSider) => {
  return (
    <>
      <div className={`arlo_tm_rightpart ${!showSider ? "opened" : ""}`}>
        <div className="rightpart_inner">
          <HomeCV />

          <About />

          <Skill />

          <Project />

          <Contact />
        </div>
      </div>
    </>
  );
};

export default RightPart;
