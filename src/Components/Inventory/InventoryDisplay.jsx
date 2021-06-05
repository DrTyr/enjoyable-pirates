//Library imports//////////////////////////////////////////
import React from "react";
///////////////////////////////////////////////////////////
import "./Inventory.css";

import pirate from "../../Assets/Pirate.png";

export function Inventory({ inventory }) {
  //const numberOfSlot = 5;

  //console.log("inventory inside display :", inventory);
  //console.log("inventory length in Inventory:", inventory.length);

  if (inventory.displayNotification) {
    inventory.displayNotification = false;
  }

  function generateSlots() {
    let slots = [];

    for (let i = 0; i < inventory.list.objects.length; i++) {
      slots[i] = (
        <g
          className="slot-box"
          key={`InventorySlot${i}`}
          onClick={() =>
            console.log(
              "Hello sweety, je suis l'item : ",
              inventory.list.objects[i].name,
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
            fill={inventory.list.objects[i].fill}
          />
          <circle
            cx={`${10 + i * 40 + 30}`}
            cy="10"
            r="5"
            fill="white"
            style={{ stroke: "black" }}
          />
          <text
            x={`${10 + i * 40 + 30}`}
            y="12"
            fontSize="6"
            textAnchor="middle"
          >
            {inventory.list.objects[i].numberOfThisObject}
          </text>
        </g>
      );
    }

    //console.log("slots length :", slots.length);

    if (slots.length < inventory.inventorySize) {
      for (
        let i = inventory.list.objects.length;
        i < inventory.inventorySize;
        i++
      ) {
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

  function generateSlotsNew() {
    let slots = [];
    let widthVar = 200;
    let heightVar = 200;
    let xpos = 0;
    let ypos = 0;

    for (let i = 0; i < inventory.list.objects.length; i++) {
      slots[i] = (
        <div
          className="slot-box"
          key={`InventorySlot${i}`}
          onClick={() =>
            console.log(
              "Hello sweety, je suis l'item : ",
              inventory.list.objects[i].name,
            )
          }
        >
          <svg viewBox="0 0 200 200">
            <rect
              id={`${i}`}
              //x={`${i * 40 + j * 40}`}
              x={xpos}
              //y={`${j * 10}`}
              y={ypos}
              width={widthVar}
              height={heightVar}
              //strokeWidth="1"
              //style={{ stroke: "black" }}
              fill={inventory.list.objects[i].fill}
            />
            <circle
              cx={widthVar + 10}
              cy={xpos}
              r="6"
              fill="white"
              style={{ stroke: "black" }}
            />
            <text
              x={widthVar + 10}
              y={ypos + 3}
              fontSize="6"
              textAnchor="middle"
            >
              {inventory.list.objects[i].numberOfThisObject}
            </text>
          </svg>
        </div>
      );
    }

    if (slots.length < inventory.inventorySize) {
      for (
        let i = inventory.list.objects.length;
        i < inventory.inventorySize;
        i++
      ) {
        slots[i] = (
          <div
            className="slot-box"
            key={`InventorySlot${i}`}
            onClick={() => console.log("Hello sweety, je suis une case vide")}
          >
            TEST DIV VIDE {i}
            {/* <img src={pirate} alt="A Pirate" width="500" height="600" /> */}
          </div>
        );
      }
    }

    //console.log("slots length :", slots.length);

    return slots;
  }

  return (
    <div className="inventory-overlay">
      {/* Work in progress */}
      <div className="slot-box-block">
        {generateSlotsNew()}
        {/* <svg viewBox="0 0 300 300">{generateSlots()}</svg> */}
        {/* {generateSlots()} */}
      </div>
    </div>
  );
}
