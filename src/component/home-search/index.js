import React, { useEffect, useState } from "react";
import "./styles.css";
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";
import { useSelector } from "react-redux";
import _ from "lodash";
import { ProfilePLayer } from "../profile-player";

export const HomeSearch = () => {
  const [keyWord, setKeyWord] = useState("");
  const listRanking = useSelector((state) => state.dataRanking.list);

  const [list, setList] = useState([]);
  const filterList = () => {
    if (keyWord.length < 0) return;
    const _list = _.cloneDeep(listRanking);
    if(keyWord.length <= 0) return;
    const keyWordByList = _list.filter(
      (item) =>
        item.id.includes(keyWord.toLowerCase()) ||
        item.name.toLowerCase().includes(keyWord.toLowerCase())
    );
    setList(keyWordByList);
  };

  const [open, setOpen] = useState(false);
  const [dataModal, setDataModal] = useState({})
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const hanldeInfo = (data) => {
    console.log("check data search", data);
    setDataModal(data)
    showDrawer();
    setKeyWord("");
  };
  useEffect(() => {
    filterList();
  }, [keyWord]);
  return (
    <div className="container-home-search">
      {/* <div style={{ gap: "10px", display: "flex" }}>
        <span style={{ fontWeight: 800 }}>Home</span> 
        <CaretRightOutlined />
        <span>Search</span>
      </div> */}
      <div className="search-home">
        <div className="Search-btn">
          <input
            onChange={(e) => setKeyWord(e.target.value)}
            className="Search-input"
            placeholder="Seach ID or Name"
            value={keyWord}
          />
          <div className="line-search"></div>
          <SearchOutlined />
          {keyWord.length > 0  && (
            <div className="item-search">
              <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item, index) => (
                  <List.Item key={index} onClick={() => hanldeInfo(item)}>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                        />
                      }
                      title={<a>{item.id}</a>}
                      description={item.name}
                    />
                  </List.Item>
                )}
              />
            </div>
          )}
        </div>
      </div>
      <ProfilePLayer data={dataModal} open={open} onClose={onClose} />
    </div>
  );
};
