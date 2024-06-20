import { Avatar, Col, Divider, Drawer, List, Row } from "antd";
import {
  PhoneFilled,
  MailFilled,
  EnvironmentFilled,
  CalendarFilled,
} from "@ant-design/icons";
import "./styles.css";
import { TimelineView } from "../Timeline/Timeline";


export const ProfilePLayer = (props) => {
  const { onClose, open, items } = props;

  const achievements = [
    { id: 1, date: "01/01/2023", achievement: "Đoạt Huy chương Vàng Olympic" },
    { id: 2, date: "02/02/2023", achievement: "Vô địch Giải Grand Slam" },
    { id: 3, date: "03/03/2023", achievement: "Lập kỷ lục thế giới" },
    {
      id: 4,
      date: "04/04/2023",
      achievement: "Đoạt Huy chương Vàng Thế vận hội",
    },
    {
      id: 5,
      date: "05/05/2023",
      achievement: "Đạt giải Cầu thủ xuất sắc nhất năm",
    },
  ];

  console.log("check item", items);
  return (
    <Drawer
      width={640}
      placement="right"
      closable={false}
      onClose={onClose}
      open={open}
    >
      <header>
        <button className="btn-close-profile" onClick={onClose}>
          X
        </button>
      </header>
      <div className="container-profile-player">
        <Row gutter={24}>
          <Col xs={24} sm={24} md={9} lg={9} xl={9}>
            <div className="item-profile-player-left">
              <div className="img-profile">
                {items.avatar == null ? (
                  <Avatar
                  style={{width:"100%", height:"100%"}}
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
                  />
                ) : (
                  <img src={items?.avatar} />
                )}
              </div>
              <div className="contact-profile">
                <h3>CONTACTS</h3>
                <p>
                  <span className="icon-contact-profile">
                    <PhoneFilled />
                  </span>
                  0393405400
                </p>
                <p>
                  <span className="icon-contact-profile">
                    <MailFilled />
                  </span>
                  longleu0902@gmail.com
                </p>
                <p>
                  <span className="icon-contact-profile">
                    <CalendarFilled />
                  </span>
                  17/11/2000
                </p>
                <p>
                  <span className="icon-contact-profile">
                    <EnvironmentFilled />
                  </span>
                  Hà Nội
                </p>
              </div>

              <div className="skill-profile">
                <h3>SKILLS</h3>
                <hr
                  style={{
                    backgroundColor: "#000",
                    height: "2px",
                    border: "none",
                  }}
                />
                <p>- Slalom</p>
                <p>- Speed slalom</p>
                <p>- Speed skating</p>
              </div>

              <div className="skill-profile">
                <h3>HOBBIES</h3>
                <hr
                  style={{
                    backgroundColor: "#000",
                    height: "2px",
                    border: "none",
                  }}
                />
                <p>- Đọc sách</p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={15} lg={15} xl={15}>
            <div className="item-profile-player-right">
              <div>
                <h1>{items?.name}</h1>
                <span>Vận động viên</span>
              </div>

              <div className="target-player">
                <h3>ABOUT ME </h3>
                <p>
                  Là một Software Developer có kinh nghiệm với mục tiêu chuyển
                  đến lập nghiệp tại Hà Nội vào tháng 8 và mong muốn được cống
                  hiến tại một công ty Startup nhiều tiềm năng. Tôi có hơn 5 năm
                  kinh nghiệm lập trình JavaScript và hơn 7 năm kinh nghiệm
                  trong ngành công nghệ.
                </p>
              </div>

              <div className="achievements-profile">
                <h3>ACHIEVEMENTS</h3>
                <hr
                  style={{
                    backgroundColor: "#000",
                    height: "2px",
                    border: "none",
                    marginBottom: 24,
                  }}
                />
                <TimelineView data={achievements} />
              </div>
              <div className="team-profile">
                <h3>TEAM</h3>
                <hr
                  style={{
                    backgroundColor: "#000",
                    height: "2px",
                    border: "none",
                  }}
                />
                <Row gutter={24}>
                  <Col span={7}>
                    <p>Name :</p>
                    <p>Founding : </p>
                  </Col>
                  <Col span={17}>
                    <p>{items?.team ? items?.team : "nothing"}</p>
                    <p>11/11/2020</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Drawer>
  );
};
