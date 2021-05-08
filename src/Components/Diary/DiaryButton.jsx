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
      <button
        className="diary-button"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        <img alt="Iventorybutton" src={diaryIcon}></img>
      </button>
    </>
  );
}
