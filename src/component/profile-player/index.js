import { Avatar, Col, Divider, Drawer, List, Row } from "antd";
import {
  PhoneFilled,
  MailFilled,
  EnvironmentFilled,
  CalendarFilled,
} from "@ant-design/icons";
import "./styles.css";
import avatar from "../../Image/logoteam.png";
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
        <Row>
          <Col span={9}>
            <div className="item-profile-player-left">
              <div className="img-profile">
                <img src={avatar} />
              </div>
              <div className="contact-profile">
                <h3>Thông tin liên hệ</h3>
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
                <h3>Kĩ năng</h3>
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
                <h3>Sở thích</h3>
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
          <Col span={15}>
            <div className="item-profile-player-right">
              <div>
                <h1>Lê Bùi Bảo Long</h1>
                <span>Vận động viên</span>
              </div>

              <div className="target-player">
                <h3>Mục tiêu </h3>
                <p>
                  Là một Software Developer có kinh nghiệm với mục tiêu chuyển
                  đến lập nghiệp tại Hà Nội vào tháng 8 và mong muốn được cống
                  hiến tại một công ty Startup nhiều tiềm năng. Tôi có hơn 5 năm
                  kinh nghiệm lập trình JavaScript và hơn 7 năm kinh nghiệm
                  trong ngành công nghệ.
                </p>
              </div>

              <div className="achievements-profile">
                <h3>Thành tự đạt được</h3>
                <hr
                  style={{
                    backgroundColor: "#000",
                    height: "2px",
                    border: "none",
                    marginBottom: 24
                  }}
                />
                <TimelineView data={achievements} />
              </div>
              <div className="team-profile">
                <h3>Đội đang thi đấu</h3>
                <hr
                  style={{
                    backgroundColor: "#000",
                    height: "2px",
                    border: "none",
                  }}
                />
                <TimelineView data={achievements} />
               
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Drawer>
  );
};
