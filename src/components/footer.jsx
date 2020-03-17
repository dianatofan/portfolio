import React from "react";
import "../styles/card.scss";
import mouse from "../../static/svg/mouse.svg";
import "../styles/footer.scss";

export default () =>
  <div className="footer">
    <div className="text">SCROLL TO EXPLORE</div>
    <img src={mouse} width={32} height={32} alt="" />
  </div>
