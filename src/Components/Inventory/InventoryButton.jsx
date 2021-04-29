//Library imports//////////////////////////////////////////
import React, { Fragment, useState } from "react";
///////////////////////////////////////////////////////////
import "./Inventory.css";
import { inverseBoolean } from "../../library";
//Assets imports///////////////////////////////////////////
import inventoryIcon from "../../Assets/InventoryIcon.png";
///////////////////////////////////////////////////////////
import { InventoryDisplay } from "./InventoryDisplay";
import PopUp from "../PopUp";

export function InventoryButton() {
  const [displayInventory, setDisplayInventory] = useState(false);

  // console.log(inventoryIsDisplay);

  // document.getElementById("inventoryOverlay").style.display = "block"

  // document.getElementById("inventoryOverlay").style.display = "none"

  // setInventoryIsDisplay(inverseBoolean(inventoryIsDisplay)

  // inventoryIsDisplay ? <InventoryDisplay /> : <div></div>

  // {inventoryIsDisplay && <InventoryDisplay />}

  return (
    <>
      {displayInventory && (
        <PopUp closeCallBack={() => setDisplayInventory(!displayInventory)}>
          <InventoryDisplay />
        </PopUp>
      )}
      <input
        className="inventory-button"
        type="image"
        src={inventoryIcon}
        alt=""
        onClick={() => {
          // setInventoryIsDisplay(inverseBoolean(inventoryIsDisplay));
          setDisplayInventory(!displayInventory);
        }}
      />
    </>
  );
}
