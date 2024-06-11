import { useEffect, useState } from 'react';
import { Banner } from '../Banner/Banner';
import './Nav.css'
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();

  const defautMenuTop = [
    {
      id: 1,
      name: "Home",
      active: false,
    },
    {
      id: 2,
      name: "About",
      active: false,
    },
    {
      id: 3,
      name: "Events",
      active: false,
    },
    {
      id: 4,
      name: "Rakings",
      active: false,
    },
    {
      id: 5,
      name: "Contact Us",
      active: false,
    },
  ];

  const defaultMenuBottom = [
    {
      id: 1,
      name: "Senior male speed",
      active: false,
    },
    {
      id: 2,
      name: "Senior female speed",
      active: false,
    },
    {
      id: 3,
      name: "Junior male speed",
      active: false,
    },
    {
      id: 4,
      name: "Junior female speed",
      active: false,
    },
    {
      id: 5,
      name: "Classic slalom senior man",
      active: false,
    },
    {
      id: 6,
      name: "Classic slalom senior woman",
      active: false,
    },
    {
      id: 7,
      name: "Classic slalom junior man",
      active: false,
    },
    {
      id: 8,
      name: "Classic slalom junior woman",
      active: false,
    },
    {
      id: 9,
      name: "Fish speed junior man",
      active: false,
    },
    {
      id: 10,
      name: "Fish speed junior woman",
      active: false,
    },
    {
      id: 11,
      name: "Fish speed senior man",
      active: false,
    },
    {
      id: 12,
      name: "Fish speed senior woman",
      active: false,
    },
    {
      id: 13,
      name: "Speed slalom senior man",
      active: false,
    },
    {
      id: 14,
      name: "Speed slalom senior woman",
      active: false,
    },
  ];

  const [menuTop, setMenuTop] = useState(defautMenuTop);
  const [menuBottom, setMenuBottom] = useState(defaultMenuBottom);

  const clickMenuTop = (data) => {
    const _menuTop = [...defautMenuTop];

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

        break;

      case 3:
        //
        clickMenuBottom(undefined);

        break;

      case 4:
        //
        clickMenuBottom(defaultMenuBottom[0]);
        break;

      case 5:
        //
        clickMenuBottom(undefined);

        break;
    }
  };

  const clickMenuBottom = (data) => {
    const _menuBottom = [...defaultMenuBottom];

    if (data == undefined) {
      setMenuBottom(_menuBottom);
      return;
    }
    const idx = _menuBottom.findIndex((item) => item.id == data.id);
    _menuBottom[idx]["active"] = true;
    setMenuBottom(_menuBottom);

    switch (data.id) {
      case 1:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;

      case 2:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;

      case 3:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;

      case 4:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;

      case 5:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 6:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 7:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 8:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 9:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 10:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 11:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 12:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 13:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
      case 14:
        //
        clickMenuTop(undefined);
        navigate(`/ranking/${data.id}/${makeSlug(data.name)}`);

        break;
    }
  };

  useEffect(()=> {
    clickMenuTop(defautMenuTop[0])
  },[])

  const makeSlug = (input) => {
    const slug = input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    return slug.substring(0, 50);
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
                        background: item.active ? "#fff" : "",
                      }}
                      className="item-menu-bottom"
                    >
                      {/* {item.active ? (
                                                <div className='borderLeftActive'></div>
                                            ) : (
                                                <div className='borderLeft'></div>
                                            )} */}
                      <p
                        style={{
                          color: item.active ? "#000" : "#fff",
                          // position: 'absolute',
                          // zIndex: 1,
                          // left: 0,
                          cursor: "pointer",
                          fontSize: 10,
                        }}
                      >
                        {item.name}
                      </p>
                      {/* {item.active ? (
                                                <div className='borderRightActive'></div>
                                            ) : (
                                                <div className='borderRight'></div>
                                            )} */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};