//Library imports//////////////////////////////////////////
import React from "react";
///////////////////////////////////////////////////////////
import "./FightDisplay.css";

export function FightDisplay() {
  return (
    <div className="main-div">
      <div className="top-half">
        <div className="top-half-left ">TEST TOP HALF LEFT</div>
        <div className="top-half-right">TEST TOP HALF RIGHT</div>
      </div>
      <div className="bottom-half">
        <div className="bottom-half-left ">
          <div className="bottom-half-left-top">TEST BOTTOM HALF LEFT TOP </div>
          <div className="bottom-half-left-bottom">
            <g className="encounter-image" id="encounter-image">
              <svg viewBox="0 0 150 150">
                <rect
                  id="encouterImg"
                  //x={`${i * 40 + j * 40}`}
                  x="30"
                  //y={`${j * 10}`}
                  y="0"
                  width="150"
                  height="150"
                  strokeWidth="1"
                  //style={{ stroke: "black", fill: "red" }}
                  fill={"url(#player)"}
                />
              </svg>
            </g>
          </div>
        </div>

        <div className="bottom-half-right">TEST BOTTOM HALF RIGHT</div>
      </div>
    </div>
  );
}
