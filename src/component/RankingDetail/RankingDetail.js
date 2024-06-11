import "./RankingDetail.css";
import logo from "../../Image/logoteam.png";
import { useState } from "react";

export const RankingDetail = (props) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8];

  

  const [list, setList] = useState(fakeData);
  return (
    <div className="table-ranking">
      <div className="tab-ranking">
        <p className="rank">Rank</p>
        <p className="change">-</p>
        <p style={{ alignItems: "center" }} className="name">
          Name
        </p>
        <p className="team">Team</p>
        <p className="age">Age</p>
        <p className="exam">Number of exams</p>
        <p className="point">Point</p>
      </div>
      {list.map((item, index) => {
        return (
          <div key={index} className="item-ranking">
            <p style={{
              // color : index < 3 ?'red' : '#000',
              fontWeight : index < 3 ?'900' : '400',
              fontSize : index < 3 ?'16px' : '12px',


            }
            } className="rank">{item}</p>
            <p className="change">-</p>
            <div className="name">
              <div className="avatar-name">
                <img
                  style={{ width: 30, height: 30 }}
                  className="logo"
                  src={logo}
                  alt="Logo"
                />
              </div>
              <p>Lê Bùi Bảo Long</p>
            </div>
            <div className="team">
              <div className="avatar-team">
                <img
                  style={{ width: 30, height: 30 }}
                  className="logo"
                  src={logo}
                  alt="Logo"
                />
              </div>
              <p>Roller Team Binh Dinh</p>
            </div>
            <p className="age">20</p>
            <p className="exam">01</p>
            <p className="point">100</p>
          </div>
        );
      })}
    </div>
  );
};
