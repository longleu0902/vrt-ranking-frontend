import { useParams } from "react-router-dom";
import './Ranking.css';
import { RankingDetail } from "../RankingDetail/RankingDetail";
import { useState } from "react";
import { Checkbox, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { LoginFrom } from "../login-form";
export const Ranking = () => {
  const { slug, id } = useParams();
  const [modalLogin, setModalLogin] = useState(false);

  //check-box
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = [" < 5", "6-7 ", "8-9", "10-11", "12-13", " >13"];
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
      <div className="title-ranking">
        <h3 style={{ textAlign: "start" }}>
          RANKING {slug.toUpperCase().replace(/-/g, " ")}
        </h3>
        <button onClick={() => setModalLogin(true)} className="btn-login">
          <UserOutlined />
          <a style={{ margin: "0 5px" }}>Login</a>
        </button>
      </div>

      {(id == 1 || id == 2 || id == 3 || id == 4) && (
        <div className="check-box">
          <Checkbox
            className="custom-checkbox"
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            ALL
          </Checkbox>
          <CheckboxGroup
            className="custom-checkbox"
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </div>
      )}

      {id == 1 || id == 2 || id == 3 || id == 4? (
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
      <Modal
        centered
        open={modalLogin}
        onCancel={() => setModalLogin(false)}
        footer={null}
        width="50%"
        style={{textAlign:'center'}}
      >
        <h2>LOGIN FORM</h2>
        <LoginFrom />
      </Modal>
    </div>
  );
};
