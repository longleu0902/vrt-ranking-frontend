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

// typeProps = {
//   list : array ,
//   type : listTeam || null
// }


export const RankingDetail = (props) => {
  const { list, type } = props;
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
          element.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <p
            style={{ alignItems: "center", justifyContent: "center" }}
            className="name"
          >
            Name
          </p>
          <p
            style={{ textAlign: "center", justifyContent: "center" }}
            className="team"
          >
            {type == "listTeam" ? "Category" : "Team"}
          </p>
          <p className="age">Age</p>
          <p className="point">Point</p>
          <p className="rank">Rank</p>
        </div>
        <div style={{ height: 600, overflow: "scroll" }}>
          {list.map((item, index) => {
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
                    keyWord == item.id ? "rgb(249, 106, 106)" : "#fff",
                }}
              >
                <div style={{ padding: "0 0px" }} className="search">
                  {item.id}
                </div>
                <div style={{ padding: "0 0px" }} className="name">
                  <div className="avatar-name">
                    {item.avatar !== null ? (
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                        className="logo"
                        src={item?.avatar}
                        alt="Logo"
                      />
                    ) : (
                      <Avatar
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                        size="large"
                        icon={<UserOutlined />}
                      />
                    )}
                  </div>
                  <p style={{ fontWeight: "700" }}>{item?.name}</p>
                </div>
                <div
                  style={{
                    padding: "0 0px",
                    justifyContent: type == "listTeam" ? "center" : "",
                  }}
                  className="team"
                >
                  {type !== "listTeam" ? (
                    <>
                      <div className="avatar-team">
                        {item.logoTeam !== null ? (
                          <img
                            style={{ width: "100%", height: "100%" }}
                            className="logo"
                            src={item?.logoTeam}
                            alt="Logo"
                          />
                        ) : (
                          <Avatar size="large" icon={<UserOutlined />} />
                        )}
                      </div>
                      <p>{item?.team}</p>
                    </>
                  ) : (
                    <>{item?.category}</>
                  )}
                </div>
                <p className="age">{item?.age}</p>
                <p style={{ color: "rgb(22, 163, 74)" }} className="point">
                  {item?.point}
                </p>
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
      </div>

      <button className="btn-export" onClick={exportToExcel}>
        Export to Excel
      </button>
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
