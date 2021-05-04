//Functions imports////////////////////////////////////////
import { getRandomColor } from "../../library";
///////////////////////////////////////////////////////////

//Global variables/////////////////////////////////////////
///grid[numberColumn][numberRow]
const numberOfRow = 27;
const numberOfColumn = 27;
const gridUnitRadius = 30;

///////////////////////////////////////////////////////////

export function generateOneGridUnit() {
  let emptyGridUnit = {
    indice: -1,
    coordInGrid: { x: 0, y: 0 },
    coordStart: { x: 0, y: 0 },
    radius: gridUnitRadius,
    fill: null,
    opacity: 1,
    encounterType: null,
    stroke: null,
    strokeWidth: 5,
    rotateAngle: 0,
  };

  return emptyGridUnit;
}

export function generateEntireGrid(
  numberOfRow,
  numberOfColumn,
  gridUnitRadius,
) {
  ///grid[numberColumn][numberRow]
  if (numberOfRow === undefined) {
    numberOfRow = 27;
  }
  if (numberOfColumn === undefined) {
    numberOfColumn = 27;
  }
  if (gridUnitRadius === undefined) {
    gridUnitRadius = 30;
  }

  let unitIndice = 0;

  let grid = {
    firstgridUnitStartCoord: { x: gridUnitRadius, y: gridUnitRadius },
    unitsList: [],
    numberOfRow: numberOfRow,
    numberOfColumn: numberOfColumn,
    unitRadius: gridUnitRadius,
  };

  for (let i = 0; i < grid.numberOfColumn; i++) {
    grid.unitsList[i] = [];

    for (let j = 0; j < grid.numberOfRow; j++) {
      let gridUnit = {
        indice: 0,
        coordInGrid: { x: 0, y: 0 },
        coordStart: { x: 0, y: 0 },
        radius: gridUnitRadius,
        fill: null,
        opacity: 1,
        encounterType: null,
        stroke: null,
        strokeWidth: 5,
        rotateAngle: 0,
      };

      gridUnit.coordStart.x =
        grid.firstgridUnitStartCoord.x + i * 2 * grid.unitRadius;
      gridUnit.coordStart.y =
        grid.firstgridUnitStartCoord.y + j * 2 * grid.unitRadius;

      gridUnit.coordInGrid = { x: i, y: j };

      gridUnit.indice = unitIndice++;

      //gridUnit.fill = getRandomColor();
      gridUnit.fill = "url(#beachCenter)";

      grid.unitsList[i][j] = gridUnit;
    }
  }

  return grid;
}
