//Library imports//////////////////////////////////////////
import React, { useState } from "react";
///////////////////////////////////////////////////////////
import "./FightDisplay.css";
import { FightDisplay } from "./FightDisplay";
//Assets imports///////////////////////////////////////////
import diaryIcon from "../../Assets/DiaryIcon.png";
///////////////////////////////////////////////////////////
import PopUp from "../PopUp";

export function FightButton({caracterStats}) {
  const [display, setDisplay] = useState(false);

  return (
    <>
      {display && (
        <PopUp closeCallBack={() => setDisplay(!display)}>
          <FightDisplay caracterStats={caracterStats}/>
        </PopUp>
      )}
      <button
        className="fight-button"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        <img alt="Iventorybutton" src={diaryIcon}></img>
      </button>
    </>
  );
}
