//Library imports//////////////////////////////////////////
import React from "react";
///////////////////////////////////////////////////////////
import "./Inventory.css";

export function Inventory() {
  const numberOfSlot = 5;

  function generateSlots() {
    let slots = [];

    for (let i = 0; i <= numberOfSlot; i++) {
      slots[i] = (
        <g
          onClick={() => console.log("Hello sweety, je suis numéro " + i + ".")}
        >
          <rect
            id={`${i}`}
            //x={`${i * 40 + j * 40}`}
            x={`${10 + i * 40}`}
            //y={`${j * 10}`}
            y="10"
            width="30"
            height="30"
            strokeWidth="3"
            style={{ stroke: "black", fill: "white" }}
          />
        </g>
      );
    }
    return slots;
  }

  return (
    <div className="inventory-overlay">
      <div className="slot-box">
        <svg viewBox="0 0 300 300">{generateSlots()}</svg>
      </div>
    </div>
  );
}
