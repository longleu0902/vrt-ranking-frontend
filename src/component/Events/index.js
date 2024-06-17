
import { Col, Row } from "antd";
import { TimelineView } from "../Timeline/Timeline";
import "./styles.css";
import logo from "../../Image//logoteam.png";
import { Avatar, Card } from "antd";
const { Meta } = Card;

export const Events = () => {
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

  const data = {
    id: 1,
    title: "GIẢI ROLLER SPORTS CÁC CÂU LẠC BỘ XUẤT SẮC QUỐC GIA NĂM 2024",
    date : "30 May 2024",
    description: `
      DANH SÁCH VĐV THAM GIA GIẢI ROLLER SPORTS CÁC CÂU LẠC BỘ XUẤT SẮC QUỐC GIA NĂM 2024
      - Vận động viên kiểm tra kỹ thông tin theo danh sách VĐV bên dưới để BTC cập nhật sửa đổi kịp thời 👇
      ⏰ THỜI GIAN ĐỊA ĐIỂM
      - Thời gian: từ ngày 08-09/06/2024
      - Địa điểm: Cung Văn hóa thiếu nhi , thành phố Hải Phòng. 
      - Lịch trình cụ thể từng môn thi: (cập nhập sau)
      - Cập nhật thông tin trên Fanpage để biết chính xác thông tin Họp lãnh đội, timeline sự kiện và nhiều thông tin quan trọng khác.
      Ad đang rất nóng lòng chờ đón giải đấu diễn ra. 
  
      🎯 Danh sách VĐV các bản đấu :
      https://bom.so/rOmsAu
      🎯 Tham khảo điều lệ thi đấu tại link: https://bom.so/yWWeIK 
  
      THÔNG TIN LIÊN HỆ
      Hồ Chí Minh : Mr. Nguyễn Đức Mạnh 
      Email : manhnguyen@iskate.vn 
      Sdt: 0797628557
      Hà Nội : Mr. Đường Văn Tuấn
      Email : Tuanduongsfv@gmail.com
      Sdt: 0942456935
      ____________________________
      Sự kiện: Giải Roller Sports các Câu lạc bộ xuất sắc quốc gia năm 2024 
      ● Thời gian: ngày 08-09/06/2024
      ● Địa điểm: Công viên trung tâm, thành phố Hải Phòng.
      ● Đơn vị tổ chức: Cục Thể dục Thể thao, Ủy ban Olympic Việt Nam, Liên đoàn trượt băng và Roller Việt Nam phối hợp cùng với Sở Văn hóa & Thể thao Hải Phòng, Công ty TNHH Thể thao iSkate. 
      #SFV #SkatingFederationOfVietNam #LiênĐoànTrượtBăngvàRollerViệtNam 
      #iSkate #Flyingeagle #S+ #GoxAcademy #Sugatti #RollerXHaiPhong
      #rollersports #SpeedSkating #inlineSpeedSkating #Vietroller
    `,
  };

  const desciption = () => {
    return <>ac</>;
  };

  return (
    <Row>
      <Col
        xs={{ span: 24, order: 1 }}
        sm={{ span: 14, order: 2 }}
        md={{ span: 14, order: 2 }}
        lg={{ span: 14, order: 2 }}
        xl={{ span: 14, order: 2 }}
      >
        <div
          style={{
            textAlign: "start",
            padding: "12px 24px",
            margin: "12px",
            border : "1px solid #ccc",
            borderRadius : 10,
          }}
        >
          <div className="post-title">
          <Avatar src={logo} />
          <div>
          <a style={{fontSize : 15 , color :"#000"}}>{data?.title}</a>
          <p style={{fontSize : 12 , color :"#ccc"}}>{data?.date}</p>
          </div>
          </div>
          <div className="post-desciption">
            <p style={{ whiteSpace: 'pre-wrap'}}>{data?.description}</p>
          </div>
        </div>
      </Col>
      <Col
        xs={{ span: 24, order: 2 }}
        sm={{ span: 10, order: 1 }}
        md={{ span: 10, order: 1 }}
        lg={{ span: 10, order: 1 }}
        xl={{ span: 10, order: 1 }}
      >
        <div
          style={{
            textAlign: "start",
            height: "100vh",
            padding: "12px 24px",
            margin: "12px",
          }}
        >
          <div style={{ margin: "24px 0px" }}>
            <span className="events-title">Information & Events</span>
          </div>
          <TimelineView data={achievements} />
        </div>
      </Col>
    </Row>
  );
};
