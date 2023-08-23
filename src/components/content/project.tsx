/** @format */
import { FaReact } from "react-icons/fa";
import { BiLogoNodejs } from "react-icons/bi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiSpotifyLogo } from "react-icons/pi";
import { GrLinkNext } from "react-icons/gr";
import { Modal } from "antd";
import { useState } from "react";

interface IDataProject {
  image: JSX.Element;
  title: string;
  shortDesc: string;
  detail: {
    description: string;
    frontend: string;
    member: string;
    role: string;
    demo: string;
    github: string;
  };
}
const Project = () => {
  const dataProject: IDataProject[] = [
    {
      image: <FaReact size={40} color="#2bebfd" />,
      title: "Ecommerce Book",
      shortDesc: "Website thương mại điện tử hỗ trợ quản lý và mua bán sách",
      detail: {
        description: "Xây dụng website thương mại điện tử clone Tiki",
        frontend: "ReactJS , Ant Design ,Redux Toolkit",
        member: "1",
        role: "FrontEnd Developer",
        demo: "https://ecommerce-book.vercel.app/",
        github: "https://github.com/duc-cute/ecommerce-book",
      },
    },
    {
      image: <TiWeatherPartlySunny size={40} color="#48c1ff" />,
      title: "Weather App",
      shortDesc: "Website xem thông tin dự báo thời tiết trong 1 vài ngày",
      detail: {
        description: "Xây dụng website xem dự báo thời tiết",
        frontend: "HTML,CSS JavaScript",
        member: "1",
        role: "Developer",
        demo: "https://duc-cute.github.io/weather-app/",
        github: "https://github.com/duc-cute/weather-app",
      },
    },
    {
      image: <BiLogoNodejs size={40} color="#43853d" />,
      title: "Technology Devices",
      shortDesc: "Website thương mại điện tử hỗ trợ quản lý và mua bán sách",
      detail: {
        description: "Xây dụng website thương mại điện tử clone Shoppe",
        frontend: "HTML,CSS,JavaScript",
        member: "1",
        role: "Developer",
        demo: "https://duc-cute.github.io/technology-store/",
        github: "https://github.com/duc-cute/technology-store",
      },
    },
    {
      image: <PiSpotifyLogo size={40} color="#1fd662" />,
      title: "Music Player App",
      shortDesc: "Web App nghe nhạc ",
      detail: {
        description: "Xây dụng web app nghe nhạc",
        frontend: "HTML,CSS,JavaScript",
        member: "1",
        role: "Developer",
        demo: "https://duc-cute.github.io/music-player/",
        github: "https://github.com/duc-cute/music-player",
      },
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState<IDataProject | null>(null);

  const handleShowModal = (item: IDataProject) => {
    setIsModalOpen(true);
    setDataModal(item);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataModal(null);
  };
  return (
    <>
      <div className="arlo_tm_section" id="project">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Project</h3>
              <span>Các dự án đã hoàn thiện</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProject.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="inner">
                        <div className="icon">{item.image}</div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDesc}</p>
                        </div>
                        <div
                          className="desc"
                          onClick={() => handleShowModal(item)}
                        >
                          <GrLinkNext /> Xem chi tiết
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={dataModal && dataModal.title && `Dự án ${dataModal?.title}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        {dataModal && (
          <ul>
            <li>Miêu tả : {dataModal.detail.description}</li>
            <li>FrontEnd : {dataModal.detail.frontend}</li>
            <li>Số lượng thành viên dự án : {dataModal.detail.member}</li>
            <li>Vai trò : {dataModal.detail.role}</li>
            <li>
              <a href={dataModal.detail.demo}>Demo : {dataModal.detail.demo}</a>
            </li>
            <li>
              <a href={dataModal.detail.github}>
                Github : {dataModal.detail.github}
              </a>
            </li>
          </ul>
        )}
      </Modal>
    </>
  );
};

export default Project;
