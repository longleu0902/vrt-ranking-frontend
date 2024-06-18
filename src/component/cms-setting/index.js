import { useDispatch } from "react-redux";
import { setLogin } from "../../Redux/login-reducer";
import { useNavigate } from "react-router-dom";
import { ModelCreateUser } from "../model-create-user";
import { Card } from "antd";
import {message } from 'antd';

export const CmsSetting = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const gridStyle = {
    width: "25%",
    textAlign: "center",
    cursor: "pointer"
  };

  const handleLogOut = () => {
    const payload = {
      username: "test",
      token: "",
      isAuthentication: false,
    };
    dispath(setLogin(payload));
    navigate("/");
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  return (
    <>
      <Card title="Cài Đặt">
        <Card.Grid style={gridStyle}>   {contextHolder} <ModelCreateUser success={success} /></Card.Grid>
        <Card.Grid hoverable={true} style={gridStyle}>
          Content
        </Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid onClick={() => handleLogOut()} style={gridStyle}>Đăng xuất</Card.Grid>
      </Card>
    </>
  );
};
