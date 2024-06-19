import { useParams } from "react-router-dom";
import './Ranking.css';
import { RankingDetail } from "../RankingDetail/RankingDetail";
import { useEffect, useState } from "react";
import { Checkbox, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { LoginFrom } from "../login-form";
import { Tabs, ConfigProvider } from "antd";
import { RankByAge } from "../../Data/default-ranking-tab";

export const Ranking = () => {
  const { slug, id } = useParams();
  const [modalLogin, setModalLogin] = useState(false);

  const [checkedList, setCheckedList] = useState([]);
  const onChange = (key) => {
    console.log(key);
    setCheckedList([...key]);
  };

  useEffect(()=>{
    onChange("1")
  },[])

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
        <div className="choose-age">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#000",
                borderRadius: 2,
                colorBgContainer: "#f6ffed",
              },
            }}
          >
            <Tabs defaultActiveKey="1" items={RankByAge} onChange={onChange} />
          </ConfigProvider>
        </div>
      )}

      {id == 1 || id == 2 || id == 3 || id == 4 ? (
        <>
          {checkedList &&
            checkedList.map((item, index) => {
              return (
                <div key={index}>
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
        style={{ textAlign: "center" }}
      >
        <h2>LOGIN FORM</h2>
        <LoginFrom />
      </Modal>
    </div>
  );
};
