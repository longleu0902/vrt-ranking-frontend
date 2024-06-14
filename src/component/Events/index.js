
import { TimelineView } from "../Timeline/Timeline";

export const Events = () => {

    const achievements = [
        { id: 1, date: "01/01/2023", achievement: "Đoạt Huy chương Vàng Olympic" },
        { id: 2, date: "02/02/2023", achievement: "Vô địch Giải Grand Slam" },
        { id: 3, date: "03/03/2023", achievement: "Lập kỷ lục thế giới" },
        { id: 4, date: "04/04/2023", achievement: "Đoạt Huy chương Vàng Thế vận hội" },
        { id: 5, date: "05/05/2023", achievement: "Đạt giải Cầu thủ xuất sắc nhất năm" },
      ];



  return (
    <div style={{textAlign:'start' , width :'50%' ,height: "100vh", padding : "12px 24px" , margin : "12px"}}>
        <h3>Information & Events</h3>
      <TimelineView data = {achievements} />
    </div>
  );
};
