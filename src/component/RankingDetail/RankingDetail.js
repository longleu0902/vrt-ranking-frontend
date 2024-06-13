import "./RankingDetail.css";
import logo from "../../Image/logoteam.png";
import search from "../../Image/Search.png";
import { useRef, useState } from "react";
import { uid } from "uid";
import * as XLSX from 'xlsx';
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const RankingDetail = (props) => {
  const fakeData = [
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
        };
      }
    }
  };

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(list);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
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
        {list.map((item, index) => {
          return (
            <div
              key={index}
              ref={keyWord === item.id ? itemRef : null}
              className="item-ranking"
              style={{
                backgroundColor: keyWord == item.id ? "rgb(249, 106, 106)" : "",
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
                <p>Roller Team Binh Dinh</p>
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
                {item?.rank}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
