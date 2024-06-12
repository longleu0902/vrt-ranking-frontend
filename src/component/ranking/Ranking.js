import { useParams } from "react-router-dom";
import './Ranking.css';
import { RankingDetail } from "../RankingDetail/RankingDetail";
import { useState } from "react";
import { Checkbox } from "antd";

export const Ranking = () => {
  const { slug, id } = useParams();
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

  return (
    <div className="container">
      <h3>RANKING {slug.toUpperCase().replace(/-/g, " ")}</h3>

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
