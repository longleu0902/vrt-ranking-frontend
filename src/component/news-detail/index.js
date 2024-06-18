import { useLocation, useNavigate } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import "./styles.css";

export const NewDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = { ...state };
  // console.log("check data detail", data);

  const firstHalf = (str) => {
    if (str !== undefined) {
      const halfLength = Math.ceil(str.length / 2);

      const firstHalf = str.substring(0, halfLength);
      return firstHalf;
    }
  };

  const secondHalf = (str) => {
    if (str !== undefined) {
      const halfLength = Math.ceil(str.length / 2);
      const secondHalf = str.substring(halfLength);
      return secondHalf;
    }
  };

  return (
    <div className="container-news">
      <article class="article-detail">
        <h2>{data?.category}</h2>
        <p class="metadata">Published on {data?.date}</p>
        <p>{firstHalf(data?.description)}</p>
        <img
          style={{ maxHeight: "100%" }}
          src={data?.img}
          alt="Article Image"
        />
        <p>{secondHalf(data?.description)}</p>
        <a onClick={() => navigate("/")} href="#" class="back-button">
          Back to Home
        </a>
      </article>
    </div>
  );
};
