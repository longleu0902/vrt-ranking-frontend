import React, { useState, useMemo } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { Divider, notification } from "antd";
import moment from "moment";

const { Option } = Select;
const Context = React.createContext({
  name: "Default",
});
export const ModelCreateUser = (props) => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [select, setSelect] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState("");

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement, message) => {
    api.error({
      message: `Tạo tài khoản không thành công !`,
      description: `Vui lòng nhập ${message} !`,
      placement,
    });
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const validate = (form) => {
    if (
      form.name.length > 0 &&
      form.password.length > 0 &&
      form.rePassword.length > 0 &&
      form.select.length > 0 &&
      form.number.length > 0 &&
      form.date !== null
    ) {
      if (form.password == form.rePassword) {
        return true;
      }
    }

    for (let i in form) {
      if (form[i] == "" || form[i] == null) {
        if (i == "description") continue;
        openNotification("topRight", i);
      }
    }

    return false;
  };

  const validatePassword = (password, rePassword) => {
    if (password !== rePassword) {
      openNotification("topRight", "Mật khẩu nhập lại không đúng");
      return false;
    }
    return true;
  };

  const handleFormSubmit = () => {
    const form = {
      name,
      password,
      rePassword,
      select,
      number,
      date,
      description,
    };

    const resetFields = () => {
      setName("");
      setPassword("");
      setRePassword("");
      setSelect("");
      setNumber("");
      setDate(null);
      setDescription("");
    };

    const check = validate(form);
    const checkPassword = validatePassword(password , rePassword);
    if (check == true && checkPassword == true) {
      resetFields();
      onClose();
      props.success();
    }
  };

  

  return (
    <Context.Provider>
      {contextHolder}
      <Button
        style={{ backgroundColor: "#fff", color: "#000", border: "none" }}
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        Thêm tài khoản quản trị
      </Button>
      <Drawer
        title="Tạo mới tài khoản"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Huỷ</Button>
            <Button onClick={handleFormSubmit} type="primary">
              Đồng ý
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên đăng nhập"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập đủ thông tin ",
                  },
                ]}
              >
                <Input
                  value="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tên đăng nhập"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu",
                  },
                ]}
              >
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                  }}
                  placeholder="Vui lòng nhập mật khẩu"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="re-password"
                label="Xác nhận mật khẩu"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập lại mật khẩu",
                  },
                ]}
              >
                <Input
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  style={{
                    width: "100%",
                  }}
                  placeholder="Vui lòng nhập lại mật khẩu"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Người tạo"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn người khởi tạo",
                  },
                ]}
              >
                <Select
                  value={select}
                  onChange={(value) => setSelect(value)}
                  placeholder="Vui lòng chọn người khởi tạo"
                >
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="number"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại",
                  },
                ]}
              >
                <Input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  style={{
                    width: "100%",
                  }}
                  placeholder="Vui lòng nhập số điện thoại"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="Ngày sinh"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ngày sinh",
                  },
                ]}
              >
                <DatePicker
                  onChange={(dateString) => setDate(dateString)}
                  value={date ? moment(date, "YYYY-MM-DD") : null}
                  format="YYYY-MM-DD"
                  style={{
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Mô tả bản thân"
                rules={[
                  {
                    required: false,
                    message: "Mô tả bản thân",
                  },
                ]}
              >
                <Input.TextArea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Mô tả bản thân"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </Context.Provider>
  );
};
