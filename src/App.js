//Library imports//////////////////////////////////////////
import React, { useState, useEffect, useCallback } from "react";
///////////////////////////////////////////////////////////
//CSS imports/////////////////////////////////////////////
import "./App.css";
///////////////////////////////////////////////////////////
//React components import//////////////////////////////////
import { MapDisplay } from "./Components/MapDisplay/MapDisplay";
import { EncounterDisplay } from "./Components/Encounter/EncounterDivDisplay";
import { DisplayCurrentUnit } from "./Components/DisplayCurrentUnit/DisplayCurrentUnit";
import { InventoryButton } from "./Components/Inventory/InventoryButton";
import { DiaryButton } from "./Components/Diary/DiaryButton";
import { Page2 } from "./Components/Grid&MapGeneration/MapCreationInterface";
///////////////////////////////////////////////////////////
//Functions imports////////////////////////////////////////
import { generateOneGridUnit } from "./Components/Grid&MapGeneration/GridGenerator";
import { generateMainMap } from "./Components/Grid&MapGeneration/MapGenerator";
///////////////////////////////////////////////////////////
//Assets imports///////////////////////////////////////////
///////////////////////////////////////////////////////////

function Page1({ setCurrentPage }) {
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
  const [zoomLevel, setZoomLevel] = useState(550);
  const [grid, setGrid] = useState(generateMainMap());
  const [currentUnit, setCurrentUnit] = useState(generateOneGridUnit());
  const [encounterIsDisplay, setEncounterIsDisplay] = useState(false);
  const [sceneIsOn, setSceneIsOn] = useState(false);
  const [inventory, setInventory] = useState({
    displayNotification: false,
    list: [],
    inventorySize: 5,
    itemInInventory: 0,
    isFull: false,
  });

  // let inventory = {
  //   displayNotification: false,
  //   list: [],
  //   inventorySize: 5,
  //   itemInInventory: 0,
  //   isFull: false,
  // };
  //const [sceneToDisplay, setSceneToDisplay] = useState(true);

  useEffect(() => {
    if (currentUnit.encounter.type[0] !== 0) {
      setEncounterIsDisplay(true);
      setSceneIsOn(true);
    } else {
      setEncounterIsDisplay(false);
      setSceneIsOn(false);
    }
  }, [currentUnit]);

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
  }, [zoomLevel]);

  // const onWheelHandler = e => {
  //   const dir = e.deltaY;
  //   if (dir < 0) {
  //     setZoomLevel(zoomLevel - 50);
  //   } else if (dir > 0) {
  //     setZoomLevel(zoomLevel + 50);
  //   }
  // };

  //console.log("zoomLevel :", zoomLevel);

  //console.log("encounterToDisplay", encounterToDisplay);
  //console.log("inventory in APP :", inventory);
  //console.log("inventory length in APP :", inventory.length);
  //console.log("currentUnit :", currentUnit);
  //console.log("currentUnit.encounterType[0] :", currentUnit.encounterType[0]);

  return (
    <div className="mainDivFullScreen">
      <InventoryButton inventory={inventory} />
      <DiaryButton />

      <div
        className="subLeft-Grig"
        id="subLeft-Grig"
        //onWheel={e => onWheelHandler(e)}
      >
        <button onClick={() => setZoomLevel(zoomLevel - 50)}>Zoom</button>
        <button onClick={() => setZoomLevel(zoomLevel + 50)}>Dezoom</button>
        <button onClick={() => setCurrentPage("page2")}>
          Générateur de cartes (WIP)
        </button>
        <MapDisplay
          subLeftGrigSize={subLeftGrigSize}
          setCurrentUnit={setCurrentUnit}
          currentUnit={currentUnit}
          zoomLevel={zoomLevel}
          grid={grid}
          setGrid={setGrid}
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

      {encounterIsDisplay && sceneIsOn ? (
        <div className="downRight-encounter">
          <EncounterDisplay
            grid={grid}
            setGrid={setGrid}
            currentUnit={currentUnit}
            encounterType={currentUnit.encounter.type[0]}
            setSceneIsOn={setSceneIsOn}
            encounterIsDisplay={encounterIsDisplay}
            inventory={inventory}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("page1");

  function renderPages(params) {
    switch (currentPage) {
      case "page1":
        return <Page1 setCurrentPage={setCurrentPage} />;
      case "page2":
        return <Page2 setCurrentPage={setCurrentPage} />;
      default:
        break;
    }
  }

  return <div>{renderPages()}</div>;
}

export default App;
