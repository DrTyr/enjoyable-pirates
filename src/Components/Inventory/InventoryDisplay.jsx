//Library imports//////////////////////////////////////////
import React from "react";
///////////////////////////////////////////////////////////
import "./Inventory.css";
import { StackDisplay } from "./StackDisplay";
import {DisplayStats} from "../PlayerStats/StatsDisplay"
import { equipItem } from "./ManageInventory";
import { drawRectSVG } from "../../library";
//import pirate from "../../Assets/Pirate.png";

export function Inventory({ inventory, caracterStats, itemsOnCaracter, setItemsOnCaracter }) {
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
            onClick={() => equipItem(inventory.list.objects[i], itemsOnCaracter, setItemsOnCaracter, inventory)
            }
          >
            {drawRectSVG(i, xpos, ypos, widthVar, heightVar, inventory.list.objects[i].fill)}
            
          <div className="stack-display">
            {inventory.list.objects[i].numberOfThisObject}
          </div>
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
        <div className="stats-box-container"><DisplayStats caracterStats={caracterStats} /></div>
      </div>
      <div className="center">
        <div className="center-left">
        <div className="left-arm">
        {drawRectSVG("torso", 0,0,200,200,itemsOnCaracter.leftArm.itemFill)}

        </div>
        </div>
        <div className="center-center">
        <div className="head">
          
          {drawRectSVG("head", 0,0,200,200,itemsOnCaracter.head.itemFill)}
          
          </div>
        <div className="torso">
        
        {drawRectSVG("torso", 0,0,200,200,itemsOnCaracter.torso.itemFill)}


        </div>
        <div className="legs">       
         {drawRectSVG("torso", 0,0,200,200,itemsOnCaracter.legs.itemFill)}
</div>
        </div>
        <div className="center-right">
        <div className="right-arm">
        {drawRectSVG("torso", 0,0,200,200,itemsOnCaracter.rightArm.itemFill)}

        </div>
        </div>
      </div>
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
