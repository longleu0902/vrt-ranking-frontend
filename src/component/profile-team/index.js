import { useLocation } from "react-router-dom";
import "./styles.css";
import { Col, Empty, Row } from "antd";
import logo from "../../Image/logoteam.png";
import { RankingDetail } from "../RankingDetail/RankingDetail";
import { fakeData } from "../../Data/fake-data-ranking";

export const ProfileTeam = () => {
  const { state } = useLocation();
  console.log(("state", state));
  if (state == null)
    return (
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 500,
        }}
      >
        <Empty />
      </h1>
    );
  return (
    <>
      <div className="container-profile-team">
        <div className="info-team">
          <Row gutter={24}>
            <Col xs={24} sm={5}>
              <div className="logo-profile-team">
                <img src={logo} alt="Logo" />
              </div>
            </Col>
            <Col xs={24} sm={19}>
              <div className="information-profile-team">
                <span className="text-profile-team">Team: {state}</span>
                <span className="text-profile-team">Date: 11/11/2011</span>
                <span className="text-profile-team">
                  Location: Park 7 timecity, Hoang Mai, Ha Noi
                </span>
                <span style={{ fontSize: 14 }} className="text-profile-team">
                  Description: Việc kiên trì là vô cùng quan trọng khi nói đến
                  việc huấn luyện và thể thao. Các buổi tập đều đặn, dinh dưỡng
                  đúng cách và giấc ngủ đủ là những thành phần quan trọng giúp
                  cơ thể của bạn thích ứng, trở nên mạnh mẽ và hoạt động tốt
                  nhất. Đặt ra mục tiêu cụ thể và theo dõi tiến triển của mình
                  cũng giúp bạn duy trì động lực và trên con đường tiến tới
                  thành công.
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <RankingDetail type={'listTeam'} list={fakeData} />
      </div>
    </>
  );
};
