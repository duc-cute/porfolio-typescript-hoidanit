/** @format */
import imgInner from "@/assets/img/hero/img.jpg";
import imgLayer from "@/assets/img/about/550x640.jpg";
import cvPDF from "@/assets/cv.pdf";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Về tác giả</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.1">
                      <img src={imgLayer} alt="550x640" />
                      <div className="inner" data-img-url={imgInner}></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src={imgLayer} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      I'm Đức ...Mình là &nbsp;
                      <TypeAnimation
                        sequence={[
                          "Freelancer",
                          2000,
                          "UI/UX Designer",
                          2000,
                          "Web Developer",
                          2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                      />
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Xin chào, mình là <strong>Nguyễn Đức</strong>. Mình là 1
                      Web developer, Mình đang mong muốn 1 công việc thực tập vị
                      trí FE Website. Mình có làm qua 1 vài dự án và có 1 số kĩ
                      năng cần thiết để xin vị trí thực tập.
                      <br />
                      Hiện tại mình đang học năm 3 của Đại học Công nghệ Đông Á.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Birthday:</label> 15.01.2003
                        </span>
                      </li>

                      <li>
                        <span>
                          <label>Study:</label> Đại học Công nghệ Đông Á
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Degree:</label> Intern
                        </span>
                      </li>

                      <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="mailto:ducnguyen150120035555@gmail.com">
                            ducnguyen1501&#64;gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Phone:</label> <a href="#">0888804085</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Github:</label>{" "}
                          <a href="https://github.com/duc-cute">
                            &#64;https://github.com/duc-cute
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={cvPDF} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
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

export default About;
