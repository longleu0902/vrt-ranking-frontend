import { Col, Row } from "antd";
import "./styles.css";


export const Contact = () => {

    return (
      <div className="background-contact">
        <Row gutter={24}>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            style={{ height: 400, backgroundColor: "#fff", padding: "0px 0px" }}
          >
            <img
              className="img-contact"
              src="https://static.wixstatic.com/media/267ff0_74350d4fe973466a889fb7ee4c997bc0~mv2.jpg/v1/fill/w_740,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/267ff0_74350d4fe973466a889fb7ee4c997bc0~mv2.jpg"
              alt="First image"
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            style={{
              height: 400,
              // backgroundColor: "#ffe5cd",
            }}
          >
            <div className="text-contact">
              <p className="text-contact">
                Việc kiên trì là vô cùng quan trọng khi nói đến việc huấn luyện
                và thể thao. Các buổi tập đều đặn, dinh dưỡng đúng cách và giấc
                ngủ đủ là những thành phần quan trọng giúp cơ thể của bạn thích
                ứng, trở nên mạnh mẽ và hoạt động tốt nhất. Đặt ra mục tiêu cụ
                thể và theo dõi tiến triển của mình cũng giúp bạn duy trì động
                lực và trên con đường tiến tới thành công.
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12, order: 2 }}
            style={{ height: 400, padding: "0px 0px" }}
          >
            <img
              className="img-contact"
              src="https://static.wixstatic.com/media/267ff0_9eb64ba371ab47c4af7db409a0df7075~mv2.jpg/v1/fill/w_740,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/267ff0_9eb64ba371ab47c4af7db409a0df7075~mv2.jpg"
              alt="Second image"
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12, order: 1 }}
            style={{
              height: 400,
              // backgroundColor: "#ffe5cd",
            }}
          >
            <div className="text-contact">
              <p className="text-contact">
                Việc kiên trì là vô cùng quan trọng khi nói đến việc huấn luyện
                và thể thao. Các buổi tập đều đặn, dinh dưỡng đúng cách và giấc
                ngủ đủ là những thành phần quan trọng giúp cơ thể của bạn thích
                ứng, trở nên mạnh mẽ và hoạt động tốt nhất. Đặt ra mục tiêu cụ
                thể và theo dõi tiến triển của mình cũng giúp bạn duy trì động
                lực và trên con đường tiến tới thành công.
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            style={{ height: 400, padding: "0px 0px" }}
          >
            <img
              className="img-contact"
              src="https://static.wixstatic.com/media/267ff0_f4836554dff8452c9300968f6fd4c9da~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/267ff0_f4836554dff8452c9300968f6fd4c9da~mv2.jpg"
              alt="Third image"
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            style={{
              height: 400,
              // backgroundColor: "#ffe5cd"
            }}
          >
            <div className="text-contact">
              <p className="text-contact">
                Việc kiên trì là vô cùng quan trọng khi nói đến việc huấn luyện
                và thể thao. Các buổi tập đều đặn, dinh dưỡng đúng cách và giấc
                ngủ đủ là những thành phần quan trọng giúp cơ thể của bạn thích
                ứng, trở nên mạnh mẽ và hoạt động tốt nhất. Đặt ra mục tiêu cụ
                thể và theo dõi tiến triển của mình cũng giúp bạn duy trì động
                lực và trên con đường tiến tới thành công.
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12, order: 2 }}
            style={{ height: 400, padding: "0px 0px" }}
          >
            <img
              className="img-contact"
              src="https://static.wixstatic.com/media/267ff0_9eb64ba371ab47c4af7db409a0df7075~mv2.jpg/v1/fill/w_740,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/267ff0_9eb64ba371ab47c4af7db409a0df7075~mv2.jpg"
              alt="Second image"
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12, order: 1 }}
            style={{
              height: 400,
              //  backgroundColor: "#ffe5cd"
            }}
          >
            <div className="text-contact">
              <p className="text-contact">
                Việc kiên trì là vô cùng quan trọng khi nói đến việc huấn luyện
                và thể thao. Các buổi tập đều đặn, dinh dưỡng đúng cách và giấc
                ngủ đủ là những thành phần quan trọng giúp cơ thể của bạn thích
                ứng, trở nên mạnh mẽ và hoạt động tốt nhất. Đặt ra mục tiêu cụ
                thể và theo dõi tiến triển của mình cũng giúp bạn duy trì động
                lực và trên con đường tiến tới thành công.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
}