/** @format */
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <>
      <div className="arlo_tm_section" id="skill">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ năng FrontEnd</h4>
                  <ul className="arlo_tm_mini_list">
                    <li>Cắt ghép Template Website Responsive</li>
                    <li>
                      FrameWork/Library:ReactJS,Tailwind,Ant Design,Boostrap
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">HTML/CSS/Javascript</span>
                        <span className="number">95%</span>
                      </span>
                      <ProgressBar
                        completed={95}
                        height="5px"
                        bgColor="#000"
                        isLabelVisible={false}
                      />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="85"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">ReactJS(TypeScript)</span>
                        <span className="number">85%</span>
                      </span>
                      <ProgressBar
                        completed={85}
                        height="5px"
                        bgColor="#000"
                        isLabelVisible={false}
                      />
                    </div>

                    <div
                      className="arlo_tm_progress"
                      data-value="75"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Design UI/UX</span>
                        <span className="number">75%</span>
                      </span>
                      <ProgressBar
                        completed={75}
                        height="5px"
                        bgColor="#000"
                        isLabelVisible={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ năng BackEnd</h4>
                  <ul className="arlo_tm_mini_list">
                    <li>Ngôn ngữ lập trình: Java,Javascript,C#</li>
                    <li>FrameWork:Express,NestJS</li>
                    <li>Database:MySql,MongoDB</li>
                  </ul>
                </div>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">NestJS</span>
                        <span className="number">95%</span>
                      </span>
                      <ProgressBar
                        completed={95}
                        height="5px"
                        bgColor="#000"
                        isLabelVisible={false}
                      />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="85"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Express</span>
                        <span className="number">85%</span>
                      </span>
                      <ProgressBar
                        completed={85}
                        height="5px"
                        bgColor="#000"
                        isLabelVisible={false}
                      />
                    </div>

                    <div
                      className="arlo_tm_progress"
                      data-value="75"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Database MongoDB</span>
                        <span className="number">75%</span>
                      </span>
                      <ProgressBar
                        completed={75}
                        height="5px"
                        bgColor="#000"
                        isLabelVisible={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
