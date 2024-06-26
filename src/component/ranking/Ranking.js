import { useParams } from "react-router-dom";
import './Ranking.css';
import { RankingDetail } from "../RankingDetail/RankingDetail";
import { useEffect, useState } from "react";
import { Checkbox, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { LoginFrom } from "../login-form";
import { Tabs, ConfigProvider } from "antd";
import { RankByAge } from "../../Data/default-ranking-tab";
import { useDispatch, useSelector } from "react-redux";
import { setListRanking } from "../../Redux/data-ranking-reducer";
import { ButtonCustom } from "../Button/Button";

export const Ranking = () => {
  const dispatch = useDispatch();
  const listRankingStore = useSelector((state) => state.dataRanking.list);
  const [checkedList, setCheckedList] = useState([]);
  const [list, setList] = useState([]);
  const { slug, id } = useParams();

  const getData = () => {
    // Get data speed skating man
    if (id == 1) {
      if (checkedList == "1") {
        console.log("check");
        setList(listRankingStore);
        return;
      }
      if (checkedList == "2") {
        setList([]);
        return;
      }
      if (checkedList == "3") {
        setList(listRankingStore);
        return;
      }
      if (checkedList == "4") {
        setList([]);
        return;
      }
      if (checkedList == "5") {
        setList(listRankingStore);
        return;
      }
      if (checkedList == "6") {
        setList([]);
        return;
      }
    }

    // get data speed skating women

    if (id == 2) {
      setList([]);
      return;
    }

    // more id
  };

  useEffect(() => {
    getData();
  }, [id, checkedList]);

  const [modalLogin, setModalLogin] = useState(false);

  const onChange = (key) => {
    console.log("check age", key);
    setCheckedList([...key]);
  };

  useEffect(() => {
    onChange("1");
  }, []);

  return (
    <div className="container-ranking">
      <div className="header-ranking">
        <div className="title-ranking">
          <h3 style={{ textAlign: "start" }}>
            RANKING {slug.toUpperCase().replace(/-/g, " ")}
          </h3>
          {/* <button onClick={() => setModalLogin(true)} className="btn-login">
          <UserOutlined />
          <a style={{ margin: "0 5px" }}>Login</a>
        </button> */}
        </div>

        {(id == 1 || id == 2 || id == 3 || id == 4) && (
          <div className="choose-age">
            {RankByAge.map((item, index) => {
              return (
                <ButtonCustom
                  key={index}
                  label={item?.label}
                  onChange={onChange}
                  value={item?.key}
                  active={checkedList}
                />
              );
            })}
          </div>
        )}
      </div>

      {id == 1 || id == 2 || id == 3 || id == 4 ? (
        <>
          {checkedList &&
            checkedList.map((item, index) => {
              return (
                <div key={index}>
                  <RankingDetail list={list} />
                </div>
              );
            })}
        </>
      ) : (
        <RankingDetail list={list} />
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
