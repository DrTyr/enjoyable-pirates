//Functions imports////////////////////////////////////////
import { getRandomColor } from "../../library";
import { randomlyFillWithEncounter } from "../Encounter/EncounterGenerator";
///////////////////////////////////////////////////////////

//Global variables/////////////////////////////////////////
///grid[numberColumn][numberRow]
const numberOfRow = 10;
const numberOfColumn = 5;
const gridUnitRadius = 30;
const firstgridUnitStartCoord = { x: gridUnitRadius, y: gridUnitRadius };

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

function generateEntireGrid(grid) {
  let unitIndice = 0;

  for (let i = 0; i < grid.numberOfColumn; i++) {
    grid.UnitsList[i] = [];

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

      gridUnit.fill = getRandomColor();

      grid.UnitsList[i][j] = gridUnit;
    }
  }

  return grid;
}

export function generateMainMap() {
  let grid = {
    firstgridUnitStartCoord: firstgridUnitStartCoord,
    UnitsList: [],
    numberOfRow: numberOfRow,
    numberOfColumn: numberOfColumn,
    unitRadius: gridUnitRadius,
  };

  grid = generateEntireGrid(grid);
  grid = randomlyFillWithEncounter(grid);

  return grid;
}
