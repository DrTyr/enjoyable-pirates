//Library imports//////////////////////////////////////////
import React, { Fragment, useState } from "react";
///////////////////////////////////////////////////////////
import "./Inventory.css";
//Assets imports///////////////////////////////////////////
import inventoryIcon from "../../Assets/InventoryIcon.png";
///////////////////////////////////////////////////////////
import { Inventory } from "./InventoryDisplay";
import PopUp from "../PopUp";

export function InventoryButton({ inventory }) {
  const [display, setDisplay] = useState(false);

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
        }}
      >
        <img alt="Inventorybutton" src={inventoryIcon}></img>
      </button>
    </>
  );
}
