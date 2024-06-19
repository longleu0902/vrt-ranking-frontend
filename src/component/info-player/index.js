import React, { useState } from "react";
import { Badge, Button, Descriptions } from "antd";
import { TimelineView } from "../Timeline/Timeline";
import { ProfilePLayer } from "../profile-player";
export const InfoPlayer = (props) => {
  // show profile
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  /////////////////////////////

  const moreProfile = () => {
    props?.close(false);
    showDrawer();
  };


  const data = { ...props.data };
  const items = [
    {
      key: "1",
      label: "ID",
      children: data?.id,
    },
    {
      key: "2",
      label: "Age",
      children: data?.age,
    },
    {
      key: "3",
      label: "Ranking",
      children: data?.rank,
    },
    {
      key: "4",
      label: "Name",
      children: data?.name,
    },
    {
      key: "9",
      label: "Gender",
      children: data?.gender,
    },

    {
      key: "8",
      label: "Category",
      children: data?.category,
    },
    {
      key: "7",
      label: "Point",
      children: data?.point,
    },

    {
      key: "5",
      label: "Team",
      children: data?.tean,
      span: 2,
    },
    {
      key: "6",
      label: "Status",
      children: <Badge status="processing" text="Running" />,
      span: 3,
    },
    {
      key: "10",
      label: "Achievement",
      span: 3,
      children: (
        <>
          <TimelineView data={data?.achievements} />
        </>
      ),
    },
  ];


  return (
    <>
      <Descriptions labelStyle={{ fontWeight: 900 }} bordered items={items} />
      <ProfilePLayer items={items} open={open} onClose={onClose} />
      <Button
        style={{
          backgroundColor: "#000",
          padding: "16px 0",
          margin: "12px 0px",
          width: "100%",
        }}
        onClick={moreProfile}
        type="primary"
      >
        More Infomaiton
      </Button>
    </>
  );
};
