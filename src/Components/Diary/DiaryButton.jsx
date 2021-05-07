//Library imports//////////////////////////////////////////
import React, { Fragment, useState } from "react";
///////////////////////////////////////////////////////////
import "./Diary.css";
//Assets imports///////////////////////////////////////////
import diaryIcon from "../../Assets/DiaryIcon.png";
///////////////////////////////////////////////////////////
import PopUp from "../PopUp";

export function DiaryButton() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      {display && (
        <PopUp closeCallBack={() => setDisplay(!display)}>
          WORK IN PROGRESS
        </PopUp>
      )}
      <input
        className="diary-button"
        type="image"
        src={diaryIcon}
        alt=""
        onClick={() => {
          // setInventoryIsDisplay(inverseBoolean(inventoryIsDisplay));
          setDisplay(!display);
        }}
      />
    </>
  );
}
