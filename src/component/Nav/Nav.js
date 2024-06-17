import { useEffect, useState } from 'react';
import { Banner } from '../Banner/Banner';
import './Nav.css'
import { useNavigate } from "react-router-dom";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { menuMobie, defautMenuTop, defaultMenuBottom } from "../../Data/default-menu";
import _ from "lodash";

export const Nav = () => {
  const navigate = useNavigate();
  const [menuTop, setMenuTop] = useState([]);
  const [menuBottom, setMenuBottom] = useState([]);

  const clickMenuTop = (data) => {
    const _menuTop = _.cloneDeep(defautMenuTop);

    if (data == undefined) {
      _menuTop[3]["active"] = true;
      setMenuTop(_menuTop);
      return;
    }
    const idx = _menuTop.findIndex((item) => item.id == data.id);
    _menuTop[idx]["active"] = true;
    setMenuTop(_menuTop);

    switch (data.id) {
      case 1:
        //
        clickMenuBottom(undefined);
        navigate("/");

        break;

      case 2:
        //
        clickMenuBottom(undefined);
        navigate("/about");

        break;

      case 3:
        //
        clickMenuBottom(undefined);
        navigate("/events");

        break;

      case 4:
        //
        clickMenuBottom(defaultMenuBottom[0]);
        break;

      case 5:
        //
        clickMenuBottom(undefined);
        navigate("/contact");

        break;
    }
  };

  const clickMenuBottom = (data) => {
    const _menuBottom = _.cloneDeep(defaultMenuBottom);

    if (data == undefined) {
      setMenuBottom(_menuBottom);
      return;
    }
    const idx = _menuBottom.findIndex((item) => item.id == data.id);
    _menuBottom[idx]["active"] = true;
    setMenuBottom(_menuBottom);

    switch (data.id) {
      case 1:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;

      case 2:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;

      case 3:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;

      case 4:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;

      case 5:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 6:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 7:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 8:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 9:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 10:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 11:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 12:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 13:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 14:
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
    }
  };

  useEffect(() => {
    clickMenuTop(defautMenuTop[0]);
  }, []);

  const makeSlug = (input) => {
    const slug = input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    return slug.substring(0, 50);
  };

  // mobie menu

  const [current, setCurrent] = useState("home");
  const handleClickMenuMobie = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    switch (e.key) {
      case "1":
        clickMenuBottom(undefined);
        navigate("/");

        break;

      case "2":
        clickMenuBottom(undefined);
        navigate("/about");

        break;

      case "3":
        clickMenuBottom(undefined);
        navigate("/events");

        break;

      case "4":
        clickMenuBottom(defaultMenuBottom[0]);
        break;

      case "5":
        clickMenuBottom(undefined);
        navigate("/contact");

        break;

      case "speed-skating-man":
      case "speed-skating-women":
      case "speed-skating-men-professional":
      case "speed-skating-women-professional":
      case "classic-slalom-senior-man":
      case "classic-slalom-senior-woman":
      case "classic-slalom-junior-man":
      case "classic-slalom-junior-woman":
      case "freestyle-slide-man":
      case "freestyle-slide-woman":
      case "speed-slalom-junior-woman":
      case "speed-slalom-junior-man":
      case "speed-slalom-senior-man":
      case "speed-slalom-senior-woman":
        clickMenuTop(undefined);
        navigate(
          `/ranking/${
            menuMobie[3]["children"][0]["children"].findIndex(
              (item) => item.key === e.key
            ) + 1
          }/${e.key}`
        );
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="nav">
        <div className="banner">
          <Banner />
          <div className="nav-box">
            <div className="nav-item" style={{ opacity: 0.8 }}>
              <div className="triangle"></div>
              <div style={{ height: 35 }} className="nav-item-icon">
                {menuTop.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => clickMenuTop(item)}
                      className="item-menu-top"
                    >
                      <p
                        className={
                          item.active ? "text-menu-active" : "text-menu"
                        }
                      >
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="nav-item"
              style={{ backgroundColor: "#000", width: "100%" }}
            >
              <div
                style={{ justifyContent: "space-between" }}
                className="nav-item-icon"
              >
                {menuBottom.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => clickMenuBottom(item)}
                      style={{
                        borderBottom: item.active ? "5px solid #ccc" : "",
                      }}
                      className="item-menu-bottom"
                    >
                      <p
                        style={{
                          color: "#fff",
                          cursor: "pointer",
                          fontSize: 10,
                          fontWeight: item.active ? "900" : "",
                        }}
                      >
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="nav-box-mobie">
            <Menu
              theme="light"
              style={{ width: "100%" }}
              onClick={handleClickMenuMobie}
              selectedKeys={[current]}
              mode="horizontal"
              items={menuMobie}
            />
          </div>
        </div>
      </div>
    </>
  );
};