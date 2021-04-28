//Library imports//////////////////////////////////////////
import React, { useState, useEffect } from "react";
///////////////////////////////////////////////////////////
//CSS imports/////////////////////////////////////////////
import "./App.css";
///////////////////////////////////////////////////////////
//Functions imports////////////////////////////////////////
import { GridDisplay } from "./Components/GridDisplay/MainMapDisplay";
import { EncounterDisplay } from "./Components/Encounter/EncounterDisplay";
import { generateOneGridUnit } from "./Components/Grid&MapGeneration/GridGenerator";
import { DisplayCurrentUnit } from "./Components/DisplayCurrentUnit/DisplayCurrentUnit";
///////////////////////////////////////////////////////////
//Assets imports///////////////////////////////////////////

///////////////////////////////////////////////////////////

function App() {
  //Hack too automatic resize svg inside topRight-hexagonDisplay <div> the size of this <div>
  //This 2 variables will be update after the first render with the usage of UseEffect()
  const [topRightUnitDisplaySize, setTopRightUnitDisplaySize] = useState({
    width: 0,
    height: 0,
  });
  const [subLeftGrigSize, setSubLeftGrigSize] = useState({
    width: 0,
    height: 0,
  });
  //////////////////////////////

  const [currentUnit, setCurrentUnit] = useState(generateOneGridUnit());

  useEffect(() => {
    setTopRightUnitDisplaySize({
      width: document.getElementById("topRight-CurrentUnitDisplay").clientWidth,
      height: document.getElementById("topRight-CurrentUnitDisplay")
        .clientHeight,
    });
    setSubLeftGrigSize({
      width: document.getElementById("subLeft-Grig").clientWidth,
      height: document.getElementById("subLeft-Grig").clientHeight,
    });
  }, []);

  return (
    <div className="mainDivFullScreen">
      <div className="subLeft-Grig" id="subLeft-Grig">
        <GridDisplay
          subLeftGrigSize={subLeftGrigSize}
          setCurrentUnit={setCurrentUnit}
          currentUnit={currentUnit}
        />
      </div>
      <div className="subRight-CurrentUnitDisplay-Encounter">
        <div
          className="topRight-CurrentUnitDisplay"
          id="topRight-CurrentUnitDisplay"
        >
          <DisplayCurrentUnit
            topRightUnitDisplaySize={topRightUnitDisplaySize}
            currentUnit={currentUnit}
          />
        </div>
        <div className="downRight-encounter">
          <EncounterDisplay encounterType={currentUnit.encounterType} />
        </div>
      </div>
    </div>
  );
}

export default App;
