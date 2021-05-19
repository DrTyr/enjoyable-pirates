//Library imports//////////////////////////////////////////
import React from "react";
///////////////////////////////////////////////////////////
import "./Inventory.css";

export function Inventory({ inventory }) {
  //const numberOfSlot = 5;

  //console.log("inventory inside display :", inventory);
  //console.log("inventory length in Inventory:", inventory.length);

  if (inventory.displayNotification) {
    inventory.displayNotification = false;
  }

  function generateSlots() {
    let slots = [];

    for (let i = 0; i < inventory.list.length; i++) {
      slots[i] = (
        <g
          className="slot-box"
          key={`InventorySlot${i}`}
          onClick={() =>
            console.log(
              "Hello sweety, je suis l'item : ",
              inventory.list[i].name,
            )
          }
        >
          <rect
            id={`${i}`}
            //x={`${i * 40 + j * 40}`}
            x={`${10 + i * 40}`}
            //y={`${j * 10}`}
            y="10"
            width="30"
            height="30"
            strokeWidth="1"
            style={{ stroke: "black" }}
            fill={inventory.list[i].fill}
          />
        </g>
      );
    }

    //console.log("slots length :", slots.length);

    if (slots.length < inventory.inventorySize) {
      for (let i = inventory.list.length; i < inventory.inventorySize; i++) {
        slots[i] = (
          <g className="slot-box" key={`InventorySlot${i}`}>
            <rect
              id={`${i}`}
              //x={`${i * 40 + j * 40}`}
              x={`${10 + i * 40}`}
              //y={`${j * 10}`}
              y="10"
              width="30"
              height="30"
              strokeWidth="1"
              style={{ stroke: "black", fill: "white" }}
              //fill="url(#treeLeef2)"
            />
          </g>
        );
      }
    }

    return slots;
  }

  return (
    <div className="inventory-overlay">
      Work in progress
      <div className="slot-box-block">
        <svg viewBox="0 0 300 300">{generateSlots()}</svg>
      </div>
    </div>
  );
}
