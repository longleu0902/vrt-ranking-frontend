import "./RankingDetail.css";
import logo from "../../Image/logoteam.png";
import search from "../../Image/Search.png";
import no1 from "../../Image/no1.png";
import no2 from "../../Image/no2.png";
import no3 from "../../Image/no3.png";
import { useRef, useState } from "react";
import { uid } from "uid";
import * as XLSX from 'xlsx';
import { Avatar, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { InfoPlayer } from "../info-player";

export const RankingDetail = (props) => {
  const fakeData = [
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team abc Thanh",
      age: "20",
      gender: "Men",
      avatar: "",
      logoTeam: logo,
      exams: "2",
      category: "Classic freestyle slalom",
      point: 1500,
      rank: 1,
      achievements: [
        { id: 1, date: "01/01/2023", achievement: "Đoạt Huy chương Vàng Olympic" },
        { id: 2, date: "02/02/2023", achievement: "Vô địch Giải Grand Slam" },
        { id: 3, date: "03/03/2023", achievement: "Lập kỷ lục thế giới" },
        { id: 4, date: "04/04/2023", achievement: "Đoạt Huy chương Vàng Thế vận hội" },
        { id: 5, date: "05/05/2023", achievement: "Đạt giải Cầu thủ xuất sắc nhất năm" },
      ]
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: "",
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: "",
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },

    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: "",
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },

    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },

    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },

    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },

    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },

    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },

    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },

    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },

    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: "gggg",
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
    {
      id: uid().slice(0, 4),
      name: "Hoang Huy Hieu",
      tean: "Roller Team Binh Thanh",
      age: "20",
      avatar: logo,
      logoTeam: logo,
      exams: "2",
      point: 1500,
      rank: 1,
    },
  ];

  const [list, setList] = useState(fakeData);
  const [keyWord, setKeyWord] = useState("");
  const itemRef = useRef(null);
  const [modalInfo, setModalInfo] = useState(false);
  const [dataInfo, setDataInfo] = useState(null);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setKeyWord(searchTerm);
    const filtered = list.filter((item) =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //Sroll to item
    if (e.key === "Enter") {
      if (filtered.length > 0) {
        const element = itemRef.current;
        if (element) {
          const yOffset = -100;
          const y = element.offsetTop + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }
  };

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(list);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };

  const handleMovePlayerInfo = (data) => {
    // navigate("/info-player", { state: { ...data } });
    setDataInfo({ ...data });
    setModalInfo(true);
  };

  return (
    <>
      <button className="btn-export" onClick={exportToExcel}>
        Export to Excel
      </button>
      <div className="table-ranking">
        <div className="tab-ranking">
          <div className="search">
            <div className="search-group">
              <input
                className="search-input"
                maxLength={4}
                placeholder="Search ID"
                value={keyWord}
                onChange={handleSearch}
                onKeyDown={handleSearch}
              />
            </div>
          </div>
          {/* <p className="change">Id</p> */}
          <p style={{ alignItems: "center" }} className="name">
            Name
          </p>
          <p className="team">Team</p>
          <p className="age">Age</p>
          <p className="exam">Exams</p>
          <p className="point">Point</p>
          <p className="rank">Rank</p>
        </div>
        {list.map((item, index ) => {
          const defaultBackGround = (index) => {
            if (index % 2 == 0) {
              return "#fcf9f9";
            }
          };

          const topRankingIcon = (index) => {
            if (index == 0) {
              return no1;
            }
            if (index == 1) {
              return no2;
            }
            if (index == 2) {
              return no3;
            }
          };
          return (
            <div
              key={index}
              onClick={() => handleMovePlayerInfo(item)}
              ref={keyWord === item.id ? itemRef : null}
              className="item-ranking"
              style={{
                backgroundColor:
                  keyWord == item.id
                    ? "rgb(249, 106, 106)"
                    : defaultBackGround(index),
              }}
            >
              <div style={{ padding: "0 6px" }} className="search">
                {item.id}
              </div>
              {/* <p className="change">{item.id}</p> */}
              <div className="name">
                <div className="avatar-name">
                  {item.avatar ? (
                    <img
                      style={{ width: 30, height: 30 }}
                      className="logo"
                      src={item?.avatar}
                      alt="Logo"
                    />
                  ) : (
                    <Avatar size="large" icon={<UserOutlined />} />
                  )}
                </div>
                <p>{item?.name}</p>
              </div>
              <div className="team">
                <div className="avatar-team">
                  <img
                    style={{ width: 30, height: 30 }}
                    className="logo"
                    src={item?.logoTeam}
                    alt="Logo"
                  />
                </div>
                <p>{item?.tean}</p>
              </div>
              <p className="age">{item?.age}</p>
              <p className="exam">{item?.exams}</p>
              <p className="point">{item?.point}</p>
              <p
                style={{
                  // color : index < 3 ?'red' : '#000',
                  fontWeight: index < 3 ? "900" : "400",
                  fontSize: index < 3 ? "16px" : "14px",
                }}
                className="rank"
              >
                {index < 3 ? (
                  <img
                    className="top-ranking-icon"
                    src={topRankingIcon(index)}
                  />
                ) : (
                  item?.rank
                )}
              </p>
            </div>
          );
        })}
      </div>
      <Modal
        title="INFOMATION"
        centered
        open={modalInfo}
        onCancel={() => setModalInfo(false)}
        footer={null}
        width="auto"
      >
        <InfoPlayer close={setModalInfo} data={dataInfo} />
      </Modal>
    </>
  );
};
