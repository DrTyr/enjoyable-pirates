//Library imports//////////////////////////////////////////
import React, { useEffect, useState } from "react";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////
//import "../../App.css";
//import "./SvgGridDisplay.css";
import "./EncounterDisplay.css";
///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import { detectEncounter } from "./EncounterSceneGenerator";
import { AddObjectInInventory } from "../Inventory/ManageInventory";
import { ManageDeleteOnMap } from "../MapDisplay/ManageMapModifications";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
///////////////////////////////////////////////////////////

//React Component names MUST begin with a maj so React know its a component
export function EncounterDisplay({
  encounterType,
  encounterIsDisplay,
  setSceneIsOn,
  inventory,
  grid,
  setGrid,
  currentUnit,
  //itemList,
}) {
  const [encounterImageSize, setEncounterImageSize] = useState({
    width: 0,
    height: 0,
  });
  const [scene, setscene] = useState(detectEncounter(encounterType));

  //console.log("currentUnit :", currentUnit);

  // if (encounterType != null) {
  //   setEncounterIsOn(true);
  // } else setEncounterIsOn(false);

  useEffect(() => {
    setEncounterImageSize({
      width: document.getElementById("encounter-image").clientWidth,
      height: document.getElementById("encounter-image").clientHeight,
    });
    setscene(detectEncounter(encounterType));
  }, [encounterType, encounterIsDisplay]);

  function answersToDisplay() {
    // if (scene.answers.length === 0) {
    //   return null;
    // }

    //console.log(scene.answers[0].text);

    //console.log("scene.answers[0].exit", scene.answers[0].exit);

    // if (scene.answers.shouldExit) {
    //   setEncounterToDisplay(false);
    // }

    return scene.answers.map(answer => (
      <button
        key={`${scene.answers.indexOf(answer)}`}
        className="button"
        onClick={() => {
          //console.log("answer :", answer);
          ManageDeleteOnMap(answer, grid, currentUnit);
          if (answer.getItem) {
            AddObjectInInventory(inventory, answer);
            //console.log("itemProps :", answer.itemProps);
            //console.log("inventory after push :", inventory);
          }

          if (answer.exit.shouldExit) {
            // setEncounterToDisplay(true);
            setTimeout(function () {
              setSceneIsOn(false);
            }, answer.exit.timeout);
            setscene(detectEncounter(encounterType, answer.goTo));
          } else {
            setscene(detectEncounter(encounterType, answer.goTo));
          }
        }}
      >
        {answer.text}
      </button>
    ));
  }

  //let encounter = { text: "testtext", answer: "testanswer" };

  return (
    <>
      <div className="encounter-image-text">
        <g className="encounter-image" id="encounter-image">
          <svg viewBox="0 0 150 150">
            <rect
              id="encouterImg"
              //x={`${i * 40 + j * 40}`}
              x="0"
              //y={`${j * 10}`}
              y="0"
              width="75"
              height="75"
              strokeWidth="1"
              //style={{ stroke: "black", fill: "red" }}
              fill={scene.picture}
            />
          </svg>

          {/* <img
            src={scene.picture}
            alt=""
            width={encounterImageSize.width}
            height={encounterImageSize.height}
            style={{ margin: "75 0 0 -100" }}
          /> */}
        </g>
        <div className="encounter-text-answer">
          <div className="Encounter-Text">{scene.text}</div>
          <div className="Encounter-Answers">{answersToDisplay()}</div>
        </div>
      </div>
    </>
  );
}

export default EncounterDisplay;