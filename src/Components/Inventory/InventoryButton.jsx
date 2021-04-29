//Library imports//////////////////////////////////////////
import React, { Fragment, useState } from "react";
///////////////////////////////////////////////////////////
import "./Inventory.css";
//Assets imports///////////////////////////////////////////
import inventoryIcon from "../../Assets/InventoryIcon.png";
///////////////////////////////////////////////////////////
import { Inventory } from "./InventoryDisplay";
import PopUp from "../PopUp";

export function InventoryButton() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      {display && (
        <PopUp closeCallBack={() => setDisplay(!display)}>
          <Inventory />
        </PopUp>
      )}
      <input
        className="inventory-button"
        type="image"
        src={inventoryIcon}
        alt=""
        onClick={() => {
          // setInventoryIsDisplay(inverseBoolean(inventoryIsDisplay));
          setDisplay(!display);
        }}
      />
    </>
  );
}
