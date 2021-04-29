import React from "react";
import "./PopUp.css";

const stopEventPropagation = event => {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

const PopUp = props => (
  <div id="pop-up" className="StyledPopUp" onClick={props.closeCallBack}>
    <div className="pop-up-body" onClick={stopEventPropagation}>
      <div className="cross" onClick={props.closeCallBack}>
        &times;
      </div>
      {props.children}
    </div>
  </div>
);

export default PopUp;
