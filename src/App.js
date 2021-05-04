//Library imports//////////////////////////////////////////
import React, { useState, useEffect, useCallback } from "react";
///////////////////////////////////////////////////////////
//CSS imports/////////////////////////////////////////////
import "./App.css";
///////////////////////////////////////////////////////////
//React components import//////////////////////////////////
import { MapDisplay } from "./Components/GridDisplay/MapDisplay";
import { EncounterDisplay } from "./Components/Encounter/EncounterDisplay";
import { DisplayCurrentUnit } from "./Components/DisplayCurrentUnit/DisplayCurrentUnit";
import { InventoryButton } from "./Components/Inventory/InventoryButton";
import { DiaryButton } from "./Components/Diary/DiaryButton";
///////////////////////////////////////////////////////////
//Functions imports////////////////////////////////////////
import { generateOneGridUnit } from "./Components/Grid&MapGeneration/GridGenerator";
///////////////////////////////////////////////////////////
//Assets imports///////////////////////////////////////////
///////////////////////////////////////////////////////////

function App() {
  //Hack too automatic resize svg inside topRight-hexagonDisplay <div> the size of this <div>
  //This 2 variables will be update after the first render with the usage of UseEffect()
  const [topRightUnitDisplaySize, setTopRightUnitDisplaySize] = useState({
    width: 200,
    height: 200,
  });
  const [subLeftGrigSize, setSubLeftGrigSize] = useState({
    width: 0,
    height: 0,
  });
  //////////////////////////////
  const [zoomLevel, setZoomLevel] = useState(0);

  const [currentUnit, setCurrentUnit] = useState(generateOneGridUnit());
  const [EncounterIsOn, setEncounterIsOn] = useState(false);
  const [sceneIsOn, setSceneIsOn] = useState(false);
  const [sceneToDisplay, setSceneToDisplay] = useState(true);

  useEffect(() => {
    // setTopRightUnitDisplaySize({
    //   width: document.getElementById("topRight-CurrentUnitDisplay").clientWidth,
    //   height: document.getElementById("topRight-CurrentUnitDisplay")
    //     .clientHeight,
    // });
    setSubLeftGrigSize({
      width: document.getElementById("subLeft-Grig").clientWidth,
      height: document.getElementById("subLeft-Grig").clientHeight,
    });
    if (currentUnit.encounterType != null) {
      setEncounterIsOn(true);
    } else setEncounterIsOn(false);
  }, [currentUnit]);

  const onWheelHandler = e => {
    const dir = e.deltaY;
    if (dir < 0) {
      setZoomLevel(zoomLevel - 10);
    } else if (dir > 0) {
      setZoomLevel(zoomLevel + 10);
    }
  };

  console.log("zoomLevel :", zoomLevel);

  return (
    <div className="mainDivFullScreen">
      <InventoryButton />
      <DiaryButton />
      <div
        className="subLeft-Grig"
        id="subLeft-Grig"
        onWheel={e => onWheelHandler(e)}
      >
        <MapDisplay
          subLeftGrigSize={subLeftGrigSize}
          setCurrentUnit={setCurrentUnit}
          currentUnit={currentUnit}
          zoomLevel={zoomLevel}
        />
      </div>
      {/* <div className="subRight-CurrentUnitDisplay-Encounter"> */}
      {/* <div
        className="topRight-CurrentUnitDisplay"
        id="topRight-CurrentUnitDisplay"
      >
        <DisplayCurrentUnit
          topRightUnitDisplaySize={topRightUnitDisplaySize}
          currentUnit={currentUnit}
        />
      </div> */}

      {console.log("EncounterIsOn :", EncounterIsOn)}

      {EncounterIsOn ? (
        <div className="downRight-encounter">
          <EncounterDisplay
            encounterType={currentUnit.encounterType}
            setEncounterIsOn={setEncounterIsOn}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
