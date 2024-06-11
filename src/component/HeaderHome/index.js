import "./styles.css";
import { Row, Col } from "antd";
import headerContent from "../../Image/headerContent.png";
import logotest from "../../Image/logoteam.png";
import React, { useState } from "react";

export const HeaderHome = () => {
  const fakeData = [
    {
      id: 1,
      name: "Hoag Huy Hieu",
      point: 10040,
      logo: logotest,
      avatar:
        "https://wyldata.com/media/athletes/182520734449287675488356834599076136693.png",
      rank: 1,
    },
    {
      id: 2,
      name: "Hoag Huy Hieu",
      point: 10040,
      logo: logotest,
      avatar:
        "https://wyldata.com/media/athletes/182520734449287675488356834599076136693.png",
      rank: 6,
    },
    {
      id: 3,
      name: "Hoag Huy Hieu",
      point: 10040,
      logo: logotest,
      avatar:
        "https://wyldata.com/media/athletes/182520734449287675488356834599076136693.png",
      rank: 1,
    },
    {
      id: 4,
      name: "Hoag Huy Hieu",
      point: 10040,
      logo: logotest,
      avatar:
        "https://wyldata.com/media/athletes/182520734449287675488356834599076136693.png",
      rank: 2,
    },
    {
      id: 5,
      name: "Hoag Huy Hieu",
      point: 10040,
      logo: logotest,
      avatar:
        "https://wyldata.com/media/athletes/182520734449287675488356834599076136693.png",
      rank: 4,
    },
    {
      id: 6,
      name: "Hoag Huy Hieu",
      point: 10040,
      logo: logotest,
      avatar:
        "https://wyldata.com/media/athletes/182520734449287675488356834599076136693.png",
      rank: 6,
    },
    {
      id: 7,
      name: "Hoag Huy Hieu",
      point: 10040,
      logo: logotest,
      avatar:
        "https://wyldata.com/media/athletes/182520734449287675488356834599076136693.png",
      rank: 8,
    },
    {
      id: 4,
      name: "Hoag Huy Hieu",
      point: 10040,
      logo: logotest,
      avatar:
        "https://wyldata.com/media/athletes/182520734449287675488356834599076136693.png",
      rank: 1,
    },
    {
      id: 8,
      name: "Hoag Huy Hieu",
      point: 10040,
      logo: logotest,
      avatar:
        "https://wyldata.com/media/athletes/182520734449287675488356834599076136693.png",
      rank: 1,
    },
  ];

  const [renderPlayerTop, setRenderPlayerTop] = useState(fakeData);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, renderPlayerTop.length - 1)
    );
  };
  return (
    <>
      <header className="header-home">
        <Row>
          <Col span={4}>
            {/* <p style={{fontWeight : 700 , color:'#fff'}}>Roller skating ranking</p> */}
            <div style={{ display: "flex" }}>
              <div className="title">
                <p style={{ fontWeight: 900, color: "#fff", fontSize: 20 }}>
                  Top
                </p>
                <div
                  style={{
                    width: "100%",
                    height: 3,
                    backgroundColor: "#1dd01d",
                  }}
                ></div>
                <p style={{ fontWeight: 900, color: "#fff", fontSize: 20 }}>
                  Player
                </p>
              </div>
              <img style={{ height: 140 }} src={headerContent} />
            </div>
          </Col>
          <Col span={20}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "2px 20px",
              }}
            >
              <button
                className="button-slide"
                onClick={goToPrev}
                disabled={currentIndex === 0}
              >
                Previous
              </button>
              <button
                className="button-slide"
                onClick={goToNext}
                disabled={currentIndex === renderPlayerTop.length - 1}
              >
                Next
              </button>
            </div>

            <div className="top-player-slider">
              <div
                style={{ transform: `translateX(-${currentIndex * 11}%)` }}
                className="top-player-list"
              >
                {renderPlayerTop.map((item, index) => {
                  return (
                    <div className="top-player-list-item">
                      <div className="flex-end-item">
                        <a className="number-ranking">{item?.rank}</a>
                      </div>
                      <img
                        style={{ width: 100, height: 100 }}
                        src={item.avatar}
                      />
                      <div className="flex-end-item">
                        <p
                          style={{
                            color: "#000",
                            fontWeight: 700,
                            fontSize: 12,
                          }}
                        >
                          {item.name}
                        </p>
                        <a style={{ color: "#1dd01d", fontWeight: 700 }}>
                          1400
                        </a>
                      </div>

                      <div className="logoTeam">
                        <img src={item.logo} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </header>
    </>
  );
};
