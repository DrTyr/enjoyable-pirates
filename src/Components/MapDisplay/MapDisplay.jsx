//Library imports//////////////////////////////////////////
import React, { useState } from "react";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////

///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import { generateMainMap } from "../Grid&MapGeneration/MapGenerator";
import DisplayCaracter from "../PlayableCaracterDisplay/CaracterDisplay";
import { getNeighboursCoordinatesOfUnit } from "./InteractionsWithNeighbours";
import {
  defGrassPatterns,
  defYellowSandPatterns,
  defBeachAndOrangeSandPatterns,
  defSeaPatterns,
  defOtherPatterns,
} from "./DefPatterns";
///////////////////////////////////////////////////////////

export function MapDisplay({
  subLeftGrigSize,
  setCurrentUnit,
  currentUnit,
  zoomLevel,
}) {
  const [grid, setGrid] = useState(generateMainMap());
  const [previousgrid, setPreviousGrid] = useState(grid);
  const [posCaracterInSvg, setPosCaracterInSvg] = useState({
    x: grid.unitsList[2][9].coordStart.x + grid.unitRadius,
    y: grid.unitsList[2][9].coordStart.y + grid.unitRadius,
  });
  const [posCaracterInGrid, setPosCaracterInGrid] = useState(
    grid.unitsList[2][9].coordInGrid,
  );
  const [previousPosCaracterInSvg, setPreviousPosCaracterInSvg] = useState(
    posCaracterInSvg,
  );
  const [caracterIsMoving, setCaracterIsMoving] = useState(false);
  const [neighboursAreDisplay, setNeighboursAreDisplay] = useState(false);
  const [neighbourCoordinates, setNeighbourCoordinates] = useState(
    getNeighboursCoordinatesOfUnit(
      currentUnit.coordInGrid,
      grid.numberColumn,
      grid.numberRow,
    ),
  );

  function generateSvgUnits() {
    return grid.unitsList.map(unitsList =>
      unitsList.map(
        gridUnit =>
          gridUnit != null && (
            <g
              key={`indice${gridUnit.indice}`}
              onClick={() => {
                // if (testIfNeighbour(gridUnit, neighbourCoordinates) === true) {
                //   setCurrentUnit(gridUnit);
                //   setPreviousPosCaracterInSvg(posCaracterInSvg);
                //   setCaracterIsMoving(true);
                //   setPosCaracterInSvg({
                //     x: gridUnit.coordStart.x + gridUnit.radius,
                //     y: gridUnit.coordStart.y + gridUnit.radius,
                //   });
                //   setPosCaracterInGrid(gridUnit.coordInGrid);
                //   let neighbours = getNeighboursCoordinatesOfUnit(
                //     gridUnit.coordInGrid,
                //     grid.numberColumn,
                //     grid.numberRow,
                //   );
                //   setNeighbourCoordinates(neighbours);
                // }
                if (gridUnit.clickable === true) {
                  setCurrentUnit(gridUnit);
                  setPreviousPosCaracterInSvg(posCaracterInSvg);
                  setCaracterIsMoving(true);
                  setPosCaracterInSvg({
                    x: gridUnit.coordStart.x + gridUnit.radius,
                    y: gridUnit.coordStart.y + gridUnit.radius,
                  });
                  setPosCaracterInGrid(gridUnit.coordInGrid);
                  let neighbours = getNeighboursCoordinatesOfUnit(
                    gridUnit.coordInGrid,
                    grid.numberColumn,
                    grid.numberRow,
                  );
                  setNeighbourCoordinates(neighbours);
                }
              }}
            >
              <rect
                x={gridUnit.coordStart.x}
                y={gridUnit.coordStart.y}
                width={gridUnit.radius * 2}
                height={gridUnit.radius * 2}
                fill={gridUnit.fill}
                opacity={gridUnit.opacity}
                strokeWidth={gridUnit.strokeWidth}
                transform={`rotate(${gridUnit.rotateAngle},${
                  gridUnit.coordStart.x + gridUnit.radius
                },${gridUnit.coordStart.y + gridUnit.radius})`}
              />

              {/* Add text balise here */}
            </g>
          ),
      ),
    );
  }

  //   <text
  //   //className ="text-coord-map"
  //   x={gridUnit.coordStart.x + gridUnit.radius}
  //   y={gridUnit.coordStart.y + gridUnit.radius}
  //   fontFamily="Verdana"
  //   fontSize="10"
  //   fill="white"
  //   textAnchor="middle"
  // >
  //   {/* text to display */}
  //   {`${gridUnit.coordInGrid.x},${gridUnit.coordInGrid.y}`}
  // </text>

  function testIfNeighbour(gridUnit, neighbourCoordinates) {
    let isneighbours = false;

    for (let i = 0; i < neighbourCoordinates.length; i++) {
      if (
        neighbourCoordinates[i].x === gridUnit.coordInGrid.x &&
        neighbourCoordinates[i].y === gridUnit.coordInGrid.y
      ) {
        isneighbours = true;
      }
    }

    return isneighbours;
  }

  return (
    <>
      <button
        onClick={() => {
          setCaracterIsMoving(false);
        }}
      >
        Couper l'animation
      </button>
      <svg
        viewBox={`${-subLeftGrigSize.width / 2} -50 ${
          subLeftGrigSize.width * 2 + zoomLevel
        } ${subLeftGrigSize.height * 2 + zoomLevel}`}
        // preserveAspectRatio="xMidYMid meet"
      >
        {defOtherPatterns()}
        {defGrassPatterns()}
        {defBeachAndOrangeSandPatterns()}
        {defSeaPatterns()}
        {defYellowSandPatterns()}

        {generateSvgUnits()}
        <DisplayCaracter
          grid={grid}
          setGrid={setGrid}
          previousgrid={previousgrid}
          setPreviousGrid={setPreviousGrid}
          posCaracterInGrid={posCaracterInGrid}
          posCaracterInSvg={posCaracterInSvg}
          neighboursAreDisplay={neighboursAreDisplay}
          setNeighboursAreDisplay={setNeighboursAreDisplay}
          previousPosCaracterInSvg={previousPosCaracterInSvg}
          caracterIsMoving={caracterIsMoving}
          setCaracterIsMoving={setCaracterIsMoving}
        />
      </svg>
    </>
  );
}

export default MapDisplay;
