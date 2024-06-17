import "./styles.css";
import { Row, Col, Flex } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomeContent = () => {
    const fakeData = [
        {
            id: 1,
            img: "https://www.worldskate.org/images/AIS_Trieste_2024/medium/RZ9_8394.jpg",
            category: "Inline Freestyle",
            date: "30 May 2024",
            description: "The Inline Freestyle World Cup took place for the first time in Milan, showcasing the incredible talent and skill of skaters from around the globe. Participants dazzled the audience with breathtaking routines, combining athleticism, creativity, and precision. The event marked a significant milestone in the sport's history, drawing attention to the dynamic and expressive nature of inline freestyle skating."
        },
        {
            id: 2,
            img: "https://www.worldskate.org/images/OQS_ANNOUNCEMENT/medium/Ginwoo_Onodera_Jagger_Eaton_Chris_JOslin_podium_WST_Street_WCH_OQS_shanghai_Atiba_Jefferson-3.jpg",
            category: "Category 1",
            date: "Date 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo nec quam consequat sagittis. Sed vel fringilla lorem. Quisque consectetur purus sit amet urna lacinia, vel posuere ipsum ultrices. Duis congue, lacus sit amet feugiat auctor, urna odio scelerisque odio, nec efficitur quam nunc sit amet justo."
        },
        {
            id: 3,
            img: "https://www.worldskate.org/images/discipline/medium/medium/RZ9_0610.jpg",
            category: "Category 2",
            date: "Date 2",
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vehicula convallis mauris, a elementum risus gravida eu. In tincidunt neque et consequat volutpat. Suspendisse luctus ex vel erat interdum faucibus."
        },
        {
            id: 4,
            img: "https://www.worldskate.org/images/OQS_ANNOUNCEMENT/medium/OQS_session_visual_with_cities.jpg",
            category: "Category 3",
            date: "Date 3",
            description: "Integer tincidunt enim ut turpis finibus feugiat. Nam sit amet nibh vel metus ultricies gravida. Duis sed lacinia risus. Ut a eros in nisi malesuada dignissim. Vivamus at dui quis elit fermentum placerat."
        },
        {
            id: 5,
            img: "https://www.worldskate.org/images/WSMT_MARATHON/large/medium/tagliata.jpg",
            category: "Category 4",
            date: "Date 4",
            description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus vitae placerat mauris. Curabitur tempus velit id orci elementum, vitae finibus purus scelerisque. Cras posuere justo ut metus ultrices ullamcorper."
        },
        {
            id: 6,
            img: "https://www.worldskate.org/images/Marathon/medium/cover._articolo.png",
            category: "Category 5",
            date: "Date 5",
            description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            nulla aliquet, scelerisque massa at, fermentum nisl. Integer sit
            amet ultrices felis. Curabitur ac leo at lorem lobortis dignissim.
            Duis eget nisi non mi euismod ultricies. Vestibulum vehicula
            turpis in justo posuere, id dignissim mi eleifend. Nam efficitur
            quam a velit ultrices blandit. Quisque sed nulla ut libero
            venenatis laoreet. Fusce in lorem vitae tellus condimentum
            hendrerit. Aliquam volutpat sapien eget odio maximus, quis
            consequat urna fermentum. Donec rhoncus mauris in ligula dapibus,
            et pretium metus laoreet. Nulla facilisi. Phasellus congue risus
            non odio ultrices, in egestas quam volutpat.
        `,
         
        },
        {
            id: 7,
            img: "https://www.worldskate.org/images/Roller_freestyle/medium/fise_mtp_rollerfreestyleworldcup_demifinale_BastienSeon_052622-11_1.jpg",
            category: "Category 6",
            date: "Date 6",
            description: "Sed varius enim a velit tincidunt, nec ultrices arcu varius. Sed blandit, mi eu ullamcorper dapibus, mi velit auctor justo, eu vestibulum leo ipsum vitae neque."
        },
        {
            id: 8,
            img: "https://www.worldskate.org/images/medium/cover_academy_.png",
            category: "Category 7",
            date: "Date 7",
            description: "Donec posuere euismod leo, ut placerat est. Maecenas vestibulum, urna at sodales vulputate, ipsum nisi tristique orci, ac euismod mauris velit sit amet mauris. Integer consectetur tincidunt malesuada."
        },
        {
            id: 9,
            img: "https://www.worldskate.org/images/inline_freestyle_shanghai/medium/Facetune_22-10-2023-22-53-59.jpg",
            category: "Category 8",
            date: "Date 8",
            description: "Fusce nec leo fermentum, vehicula lorem in, vehicula libero. Morbi quis ultrices eros. Vestibulum in nulla et ex finibus suscipit. Curabitur dapibus neque et metus facilisis, eget laoreet justo commodo."
        },
        {
            id: 10,
            img: "https://www.worldskate.org/images/Artistic_Ibague_2023/medium/RZ9_0124.jpg",
            category: "Category 9",
            date: "Date 9",
            description: "Phasellus vel purus auctor, hendrerit felis sit amet, rhoncus velit. Cras tristique urna non posuere auctor. Integer sit amet diam tincidunt, feugiat nunc ac, euismod justo."
        }
        // Thêm các mục dữ liệu khác nếu cần
    ];

    const navigate = useNavigate()
    
    
      

  const [list, setList] = useState(fakeData);
const hanldeClickItem = (data)=> {  
    navigate("/new-detail" , {state : {...data}})
}
  return (
    <div className="container-home">
      <div style={{ gap: "10px", display: "flex" }}>
        <span style={{ fontWeight: 800 }}>Home</span>
        <CaretRightOutlined />
        <span>News</span>
      </div>
      <Row gutter={[16, 16]}>
        {list &&
          list.map((item, index) => {
            return (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                <div onClick={()=>hanldeClickItem(item)} className="home-item">
                  <img src={item?.img} />
                  <div className="item-description">
                    <div className="home-item-title">
                      <a className="text-title">{item?.category}</a>
                      <hr style={{ width: 120 }}></hr>
                      <a className="text-title">{item?.date}</a>
                    </div>
                    <div className="home-item-description">
                      <p className="text-desciption">{item?.description}</p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
