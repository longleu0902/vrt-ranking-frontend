import { useParams } from "react-router-dom";
import './Ranking.css';
import { RankingDetail } from "../RankingDetail/RankingDetail";

export const Ranking = () => {
  const { slug, id } = useParams();
  console.log("check data", slug);
  console.log("check data type", id);

  return (
    <div className="container">
      <h3>Ranking {slug.replace(/[^\w\s]/gi, '').toLowerCase()}</h3>
      <RankingDetail/>
    </div>
  );
};
