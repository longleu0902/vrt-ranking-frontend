import { Timeline } from "antd";
import "./timeline.css"

export const TimelineView = (props) => {
  if (props.data == null) return;
  const data = [...props?.data];
  return (
    <>
      <Timeline mode={props?.mode || "left"}>
        {data.map((item, index) => (
          <Timeline.Item color="rgb(133, 30, 30)" key={index}>
            <a className="text-timeline" style={{color: "#000" }}>
              {item?.achievement}{` `}
            </a>
            ngày
            <a className="text-timeline" style={{color: "red" }}>{` `}{item?.date}</a>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
};
