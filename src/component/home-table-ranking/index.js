import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import { fakeData } from "../../Data/fake-data-ranking";
import { ProfilePLayer } from "../profile-player";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Point",
    dataIndex: "point",
    key: "point",
  },
  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank",
    render: (text) => <a style={{ color: "#000", fontWeight: 700 }}>{text}</a>,
  },
];

export const HomeTableRanking = () => {
  const [open, setOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleRowClick = (record) => {
    console.log("Clicked row:", record); // Log the clicked row data
    setDataModal({...record})
    showDrawer();
  };
  return (
    <div style={{ background: "#fff" }} className="container-home">
      <div style={{ gap: "10px", display: "flex" }}>
        <span style={{ fontWeight: 800 }}>Home</span>
        <CaretRightOutlined />
        <span>Top 50 player</span>
      </div>
      <div style={{ padding: "24px 0" }}></div>
      <Table
        dataSource={fakeData}
        responsive="true"
        size="small"
        columns={columns}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
      <ProfilePLayer data={dataModal} open={open} onClose={onClose} />
    </div>
  );
};
