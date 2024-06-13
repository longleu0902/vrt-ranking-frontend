import { useParams } from "react-router-dom";
import './Ranking.css';
import { RankingDetail } from "../RankingDetail/RankingDetail";
import { useState } from "react";
import { Checkbox } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Model } from "../model-login";
export const Ranking = () => {
  const { slug, id } = useParams();
  const [showModel, setShowModel] = useState(false);
  //check-box
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = [" < 5", " 5-7 ", "7-9", "9-12", "12-15", " >16"];
  const [checkedList, setCheckedList] = useState([" < 5"]);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  // console.log(checkedList);

  const hanldShowPlayerDetail = () => {
    setShowModel(true)
  };

  return (
    <div className="container">
      {showModel && (
        <Model setShowModel={setShowModel} />
      )}
      <div className="title-ranking">
        <h3 style={{ textAlign: "start" }}>
          RANKING {slug.toUpperCase().replace(/-/g, " ")}
        </h3>
        <button onClick={hanldShowPlayerDetail} className="btn-login">
          <UserOutlined />
          <a style={{ margin: "0 5px" }}>Login</a>
        </button>
      </div>

      {(id == 1 || id == 2) && (
        <div className="check-box">
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            ALL
          </Checkbox>
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </div>
      )}

      {id == 1 || id == 2 ? (
        <>
          {checkedList &&
            checkedList.map((item, index) => {
              return (
                <div key={index}>
                  {index > 0 && <h2 className="age-box">Age {item}</h2>}
                  <RankingDetail />
                </div>
              );
            })}
        </>
      ) : (
        <RankingDetail />
      )}
    </div>
  );
};
