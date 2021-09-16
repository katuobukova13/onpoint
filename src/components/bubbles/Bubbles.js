import bubble_1 from "../../img/3_blue_1.png";
import bubble_2 from "../../img/3_blue_2.png";
import bubble_3 from "../../img/3_blue_3.png";
import bubble_4 from "../../img/3_blue_4.png";
import bubble_5 from "../../img/3_blue_5.png";
import pink_1 from "../../img/3_pink_1.png";
import pink_2 from "../../img/3_pink_2.png";
import pink_3 from "../../img/3_pink_3.png";
import "./Bubbles.css";

const Bubbles = () => {
  return (
    <>
      <img src={bubble_1} alt="bubble" className="bubble bubble__1" />
      <img src={bubble_2} alt="bubble" className="bubble bubble__2" />
      <img src={bubble_3} alt="bubble" className="bubble bubble__3" />
      <img src={bubble_4} alt="bubble" className="bubble bubble__4" />
      <img src={bubble_5} alt="bubble" className="bubble bubble__5" />
      <img src={pink_1} alt="bubble" className="bubble pink__1" />
      <img src={pink_2} alt="bubble" className="bubble pink__2" />
      <img src={pink_3} alt="bubble" className="bubble pink__3" />
    </>
  );
};

export default Bubbles;
