//Library imports//////////////////////////////////////////
import React, { Fragment, useEffect, useState } from "react";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////
//import "../../App.css";
//import "./SvgGridDisplay.css";
import "./EncounterDisplay.css";
///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import { detectEncounter } from "./EncounterPossibilities";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
///////////////////////////////////////////////////////////

//React Component names MUST begin with a maj so React know its a component
export function EncounterDisplay(encounterType, setEncounterIsOn) {
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
  }, [encounterType]);

  function answersToDisplay() {
    if (scene.answers.length === 0) {
      return null;
    }

    //console.log(scene.answers[0].text);

    if (scene.answers[0].text === "exitScene") {
      setEncounterIsOn(false);
      //return;
    }

    return scene.answers.map(answer => (
      <button
        className="button"
        onClick={() => {
          setscene(detectEncounter(encounterType, answer.goto));
        }}
      >
        {answer.text}
      </button>
    ));
  }

  //let encounter = { text: "testtext", answer: "testanswer" };

  if (encounterType != null) {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default EncounterDisplay;
