//Library imports//////////////////////////////////////////
import React, { Fragment, useState, useEffect } from "react";
///////////////////////////////////////////////////////////
import "./Inventory.css";
//Assets imports///////////////////////////////////////////
import inventoryIcon from "../../Assets/InventoryIcon.png";
import InventoryIconWithNotification from "../../Assets/InventoryIconWithNotification.png";
///////////////////////////////////////////////////////////
import { Inventory } from "./InventoryDisplay";

import PopUp from "../PopUp";

export function InventoryButton({ inventory }) {
  const [display, setDisplay] = useState(false);

  let IconToDisplay = null;

  if (inventory.displayNotification) {
    IconToDisplay = InventoryIconWithNotification;
  } else {
    IconToDisplay = inventoryIcon;
  }

  return (
    <>
      {display && (
        <PopUp closeCallBack={() => setDisplay(!display)}>
          <Inventory inventory={inventory} />
        </PopUp>
      )}
      {/* <input
        className="inventory-button"
        type="image"
        src={inventoryIcon}
        alt=""
        onClick={() => {
          setDisplay(!display);
        }}
      /> */}
      <button
        className="inventory-button"
        onClick={() => {
          setDisplay(!display);
          inventory.displayNotification = false;
        }}
      >
        <img alt="Inventorybutton" src={IconToDisplay} />
      </button>
    </>
  );
}
