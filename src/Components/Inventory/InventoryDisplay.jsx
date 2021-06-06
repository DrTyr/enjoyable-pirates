//Library imports//////////////////////////////////////////
import React from "react";
///////////////////////////////////////////////////////////
import "./Inventory.css";
import { StackDisplay } from "./StackDisplay";
//import pirate from "../../Assets/Pirate.png";

export function Inventory({ inventory, caracterStates }) {
  //const numberOfSlot = 5;

  //console.log("inventory inside display :", inventory);
  //console.log("inventory length in Inventory:", inventory.length);

  //console.log(caracterStates);

  if (inventory.displayNotification) {
    inventory.displayNotification = false;
  }

  function generateSlotsOld() {
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

  function manageCaracterStates() {
    let slots = [];

    function getIndicatorColor(value) {
      let rectIndicatorColor = [];

      for (let i = 0; i <= Object.values(caracterStates)[value]; i++) {
        rectIndicatorColor[i] = (
          <div className="state-rect-indicator-red"> </div>
        );
      }
      if (rectIndicatorColor.length < 5) {
        for (let i = rectIndicatorColor.length; i <= 5; i++) {
          rectIndicatorColor[i] = (
            <div className="state-rect-indicator-blue"> </div>
          );
        }
      }

      return rectIndicatorColor;
    }

    //console.log("test :", Object.values(caracterStates)[1]);

    //////////////////////////////////////
    ////TENTER LE REFAIRE AVEC UNE MAP////
    //////////////////////////////////////

    for (let i = 0; i < Object.keys(caracterStates).length; i++) {
      slots[i] = (
        <div
          className="state-box"
          key={`caractStateSlot${i}`}
          onClick={() => console.log("test caract state")}
        >
          <div className="state-img-container"></div>
          {getIndicatorColor(i)}
        </div>
      );
    }

    //console.log("slots length :", slots.length);

    return slots;
  }

  function manageItemSlots() {
    let slots = [];
    let widthVar = 200;
    let heightVar = 200;
    let xpos = 0;
    let ypos = 0;

    for (let i = 0; i < inventory.list.objects.length; i++) {
      slots[i] = (
        <>
          <div
            className="item-box"
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
              {/* <circle
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
            </text> */}
            </svg>
          </div>
          <div className="stack-display">
            {inventory.list.objects[i].numberOfThisObject}
          </div>
        </>
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
            className="item-box"
            key={`InventorySlot${i}`}
            onClick={() => console.log("Hello sweety, je suis une case vide")}
          >
            {/* TEST DIV VIDE {i} */}
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
      <div className="left">
        <div className="state-box-container">{manageCaracterStates()}</div>
      </div>
      <div className="center"></div>
      <div className="right">
        <div className="item-box-container">
          {manageItemSlots()}
          {/* <svg viewBox="0 0 300 300">{generateSlots()}</svg> */}
          {/* {generateSlots()} */}
        </div>
      </div>
    </div>
  );
}
