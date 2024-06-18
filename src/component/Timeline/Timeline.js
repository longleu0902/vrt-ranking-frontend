import { Timeline } from "antd";
import "./timeline.css"
import { useNavigate } from "react-router-dom";

export const TimelineView = (props) => {
  const navigate = useNavigate();
  if (props.data == null) return;
  const data = [...props?.data];
  const handleMoveDetail = (data) => {
    console.log("click ");
    navigate("news-detail", { state: { ...data } });
  };
  return (
    <>
      <Timeline mode={props?.mode || "left"}>
        {data.map((item, index) => (
          <Timeline.Item
            onClick={() => handleMoveDetail(item)}
            color="rgb(133, 30, 30)"
            key={index}
          >
            <a className="text-timeline" style={{ color: "#000" }}>
              {item?.achievement}
              {` `}
            </a>
            ngày
            <a className="text-timeline" style={{ color: "red" }}>
              {` `}
              {item?.date}
            </a>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
};
