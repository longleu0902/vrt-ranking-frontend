import "./styles.css";
import { Row, Col, Flex } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataNews } from "../../Data/default-data-news";

export const HomeContent = () => {
  const navigate = useNavigate();

  const [list, setList] = useState(dataNews);
  const hanldeClickItem = (data) => {
    navigate("/news-detail", { state: { ...data } });
  };
  return (
    <div className="container-home">
      <div style={{ gap: "10px", display: "flex" , color :"#fff" }}>
        <span style={{ fontWeight: 800 }}>Home</span>
        <CaretRightOutlined />
        <span>News</span>
      </div>
      <Row gutter={[16, 16]}>
        {list &&
          list.map((item, index) => {
            return (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                <div
                  onClick={() => hanldeClickItem(item)}
                  className="home-item"
                >
                  <img src={item?.img} />
                  <div className="item-description">
                    <div className="home-item-title">
                      <a className="text-title">{item?.category}</a>
                      <hr style={{ width: 120 }}></hr>
                      <a className="text-title">{item?.date}</a>
                    </div>
                    <div className="home-item-description">
                      <p className="text-desciption">{item?.description}</p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
