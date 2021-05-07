//Library imports//////////////////////////////////////////
import React, { useState } from "react";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////

///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import { generateMainMap } from "../Grid&MapGeneration/MapGenerator";
import DisplayCaracter from "../PlayableCaracterDisplay/CaracterDisplay";
import { getNeighboursCoordinatesOfUnit } from "./InteractionsWithNeighbours";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
import banditCamp from "../../Assets/BanditCamp.jpg";
import grass from "../../Assets/Grass.png";
import grassCorner from "../../Assets/GrassCorner.png";
import grassCenter from "../../Assets/GrassCenter.png";
import grassCornerInside from "../../Assets/GrassCornerInside.png";

import beach from "../../Assets/Beach.png";
import beachCorner from "../../Assets/BeachCorner.png";
import beachCenter from "../../Assets/BeachCenter.png";
import beachCornerInside from "../../Assets/BeachCornerInside.png";

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

              <text
                //className ="text-coord-map"
                x={gridUnit.coordStart.x + gridUnit.radius}
                y={gridUnit.coordStart.y + gridUnit.radius}
                fontFamily="Verdana"
                fontSize="10"
                fill="white"
                textAnchor="middle"
              >
                {/* text to display */}
                {`${gridUnit.coordInGrid.x},${gridUnit.coordInGrid.y}`}
              </text>

              <defs>
                <pattern
                  id="grass"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  viewBox="0 0 320 320"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <image width="320" height="320" href={grass} />
                </pattern>
                <pattern
                  id="grassCorner"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  viewBox="0 0 320 320"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <image width="320" height="320" href={grassCorner} />
                </pattern>
                <pattern
                  id="grassCenter"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  viewBox="0 0 320 320"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <image width="320" height="320" href={grassCenter} />
                </pattern>
                <pattern
                  id="grassCornerInside"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  viewBox="0 0 320 320"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <image width="320" height="320" href={grassCornerInside} />
                </pattern>
                <pattern
                  id="banditCamp"
                  // patternUnits="objectBoundingBox"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  //view Box 0 0 and size of the img
                  viewBox="0 0 700 310"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <image href={banditCamp} width="700" height="310" />
                </pattern>
                <pattern
                  id="beach"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  //view Box 0 0 and size of the img
                  viewBox="0 0 314 314"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <image
                    href={beach}
                    //size of the img
                    width="314"
                    height="314"
                  />
                </pattern>
                <pattern
                  id="beachCorner"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  //view Box 0 0 and size of the img
                  viewBox="0 0 314 314"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <image
                    href={beachCorner}
                    //size of the img
                    width="314"
                    height="314"
                  />
                </pattern>
                <pattern
                  id="beachCenter"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  //view Box 0 0 and size of the img
                  viewBox="0 0 314 314"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <image
                    href={beachCenter}
                    //size of the img
                    width="314"
                    height="314"
                  />
                </pattern>
                <pattern
                  id="beachCornerInside"
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  //view Box 0 0 and size of the img
                  viewBox="0 0 314 314"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <image
                    href={beachCornerInside}
                    //size of the img
                    width="314"
                    height="314"
                  />
                </pattern>
              </defs>
            </g>
          ),
      ),
    );
  }

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
