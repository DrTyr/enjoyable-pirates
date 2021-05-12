//Library imports//////////////////////////////////////////
import React, { Fragment, useEffect, useState } from "react";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////
//import "../../App.css";
//import "./SvgGridDisplay.css";
import "./EncounterDisplay.css";
///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import { detectEncounter } from "./EncounterSceneGenerator";
import { AddObjectInInventory } from "../Inventory/ManageInventory";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
///////////////////////////////////////////////////////////

//React Component names MUST begin with a maj so React know its a component
export function EncounterDisplay({
  encounterType,
  encounterToDisplay,
  setSceneIsOn,
  inventory,
}) {
  const [encounterImageSize, setEncounterImageSize] = useState({
    width: 0,
    height: 0,
  });
  const [scene, setscene] = useState(detectEncounter(encounterType));

  // if (encounterType != null) {
  //   setEncounterIsOn(true);
  // } else setEncounterIsOn(false);

  useEffect(() => {
    setEncounterImageSize({
      width: document.getElementById("encounter-image").clientWidth,
      height: document.getElementById("encounter-image").clientHeight,
    });
    setscene(detectEncounter(encounterType));
  }, [encounterType, encounterToDisplay]);

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
          //console.log("answer.goto :", answer.goTo);
          if (answer.shouldExit) {
            // setEncounterToDisplay(true);
            setSceneIsOn(false);
          } else {
            setscene(detectEncounter(encounterType, answer.goTo));
          }
          if (answer.getItem) {
            AddObjectInInventory(inventory, answer);
            //console.log("itemProps :", answer.itemProps);
            //console.log("inventory after push :", inventory);
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
        <div className="encounter-image" id="encounter-image">
          <img
            src={scene.picture}
            alt=""
            width={encounterImageSize.width}
            height={encounterImageSize.height}
          />
        </div>
        <div className="encounter-text-answer">
          <div className="Encounter-Text">{scene.text}</div>
          <div className="Encounter-Answers">{answersToDisplay()}</div>
        </div>
      </div>
    </>
  );
}

export default EncounterDisplay;
