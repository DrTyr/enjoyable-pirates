//Library imports//////////////////////////////////////////
import React, { useState } from "react";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////

///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import { generateMainMap } from "../Grid&MapGeneration/GridGenerator";
import DisplayCaracter from "../PlayableCaracterDisplay/CaracterDisplay";
import { getNeighboursCoordinatesOfUnit } from "../GridDisplay/InteractionsWithNeighbours";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
import banditCamp from "../../Assets/BanditCamp.jpg";
import grass from "../../Assets/Grass.png";
import beach from "../../Assets/Beach.png";
///////////////////////////////////////////////////////////

export function GridDisplay({ subLeftGrigSize, setCurrentUnit, currentUnit }) {
  const [grid, setGrid] = useState(generateMainMap());
  const [previousgrid, setPreviousGrid] = useState(grid);
  const [posCaracterInSvg, setPosCaracterInSvg] = useState({
    x: grid.UnitsList[0][0].coordStart.x + grid.unitRadius,
    y: grid.UnitsList[0][0].coordStart.y + grid.unitRadius,
  });
  const [posCaracterInGrid, setPosCaracterInGrid] = useState(
    grid.UnitsList[0][0].coordInGrid,
  );
  const [neighboursAreDisplay, setNeighboursAreDisplay] = useState(false);
  const [neighbourCoordinates, setNeighbourCoordinates] = useState(
    getNeighboursCoordinatesOfUnit(
      currentUnit.coordInGrid,
      grid.numberColumn,
      grid.numberRow,
    ),
  );

  function generateSvgUnits() {
    return grid.UnitsList.map(UnitsList =>
      UnitsList.map(gridUnit => (
        <g
          key={`indice${gridUnit.indice}`}
          onClick={() => {
            if (testIfNeighbour(gridUnit, neighbourCoordinates) === true) {
              setCurrentUnit(gridUnit);
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
            //fill={unitFillTest(gridUnit)}
            fill={gridUnit.fill}
            opacity={gridUnit.opacity}
            strokeWidth={gridUnit.strokeWidth}
          />
          <text
            x={gridUnit.coordStart.x + gridUnit.radius}
            y={gridUnit.coordStart.y + gridUnit.radius}
            fontFamily="Verdana"
            fontSize="10"
            fill="white"
            textAnchor="middle"
          >
            {`${gridUnit.coordInGrid.x}, ${gridUnit.coordInGrid.y}`}
          </text>
        </g>
      )),
    );
  }

  function unitFillTest(gridUnit) {
    if (gridUnit.fill === null) {
      return gridUnit.color;
    } else {
      return `${gridUnit.fill}`;
    }
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

  function getAllDefsPattern() {
    return (
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
        {/* <pattern
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
            transform={`rotate(${gridUnit.rotateAngle} 157 157)`}
            href={beach}
            //size of the img
            width="314"
            height="314"
          />
        </pattern> */}
      </defs>
    );
  }

  return (
    <svg
      viewBox={`0 0 ${subLeftGrigSize.width} ${subLeftGrigSize.height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {generateSvgUnits()}
      {getAllDefsPattern()}
      <DisplayCaracter
        grid={grid}
        setGrid={setGrid}
        previousgrid={previousgrid}
        setPreviousGrid={setPreviousGrid}
        posCaracterInGrid={posCaracterInGrid}
        posCaracterInSvg={posCaracterInSvg}
        neighboursAreDisplay={neighboursAreDisplay}
        setNeighboursAreDisplay={setNeighboursAreDisplay}
      />
    </svg>
  );
}

export default GridDisplay;
