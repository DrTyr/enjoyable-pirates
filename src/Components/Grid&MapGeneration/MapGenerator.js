import { generateEntireGrid } from "../Grid&MapGeneration/GridGenerator";
import { randomlyFillWithEncounter } from "../Encounter/EncounterGenerator";
import { getNeighboursCoordinatesOfUnit } from "../GridDisplay/InteractionsWithNeighbours";
import _ from "lodash";

//To put an empty gridUnit at x,y pos :   grid.unitsList[x][y] = null;

export function generateMainMap() {
  let grid = {};

  //"../Grid&MapGeneration/GridGenerator"
  grid = generateEntireGrid();
  //"../Encounter/EncounterGenerator"
  //grid = randomlyFillWithEncounter(grid);
  //this file
  //grid = generateBeachs(grid);

  //grid = generateMapShapeTEST(grid);

  //grid = generateRandomGreenPatchTEST(grid);

  grid = generateMapShape(grid);

  //grid.unitsList[3][3] = null;

  //let borderUnitsList = getCoordListOfBorderUnits(grid);

  return grid;
}

function generateBeachBorder(grid, borderUnitsList) {
  // borderUnitsList is an [] of objects with values .pos, .x and .y
  // .pos possibilities are :
  //   "northWest",
  //   "southWest",
  //   "southEast",
  //   "northEast",
  //   "east",
  //   "west",
  //   "north",
  //   "south",
}

//fill all the outsides hexagons with beach assets
function generateBeachsOLD(grid) {
  ///grid[numberColumn][numberRow]

  //grid.unitsList.map(()=>grid.unitsList.fill ="url(#beachCenter"));

  //Left column
  for (let i = 1; i < grid.numberOfRow - 1; i++) {
    grid.unitsList[0][i].fill = "url(#beach)";
    grid.unitsList[0][i].rotateAngle = -90;
  }
  //top row
  for (let i = 1; i < grid.numberOfColumn - 1; i++) {
    grid.unitsList[i][0].fill = "url(#beach)";
    grid.unitsList[i][0].rotateAngle = 0;
  }
  //bottom row
  for (let i = 1; i < grid.numberOfColumn - 1; i++) {
    grid.unitsList[i][grid.numberOfRow - 1].fill = "url(#beach)";
    grid.unitsList[i][grid.numberOfRow - 1].rotateAngle = 180;
  }
  //right column
  for (let i = 1; i < grid.numberOfRow - 1; i++) {
    grid.unitsList[grid.numberOfColumn - 1][i].fill = "url(#beach)";
    grid.unitsList[grid.numberOfColumn - 1][i].rotateAngle = 90;
  }

  //bottom left corner
  grid.unitsList[0][grid.numberOfRow - 1].fill = "url(#beachCorner)";
  grid.unitsList[0][grid.numberOfRow - 1].rotateAngle = 180;
  //top left corner
  grid.unitsList[0][0].fill = "url(#beachCorner)";
  grid.unitsList[0][0].rotateAngle = -90;
  //bottom right corner
  grid.unitsList[grid.numberOfColumn - 1][grid.numberOfRow - 1].fill =
    "url(#beachCorner)";
  grid.unitsList[grid.numberOfColumn - 1][
    grid.numberOfRow - 1
  ].rotateAngle = 90;
  //top right corner
  grid.unitsList[grid.numberOfColumn - 1][0].fill = "url(#beachCorner)";
  grid.unitsList[grid.numberOfColumn - 1][0].rotateAngle = 0;

  return grid;
}

function generateMapShapeTEST(grid) {
  //let bolean = _.sample([true, false]);

  function boleanTest(gridUnit) {
    let bolean = _.sample([true, false]);

    console.log(bolean);

    return bolean ? gridUnit : null;
  }

  // grid.unitsList.map(unitsList =>
  //   unitsList.map(gridUnit => (gridUnit = boleanTest(gridUnit))),
  // );

  for (let i = 0; i < grid.numberOfColumn; i++) {
    for (let j = 0; j < grid.numberOfRow; j++) {
      if (i !== 0 || j !== 0) {
        grid.unitsList[i][j] = boleanTest(grid.unitsList[i][j]);
      }
    }
  }

  return grid;
  // grid.unitsList.map(unitsList => (bolean ? unitsList : (unitsList = null)));
}

function generateRandomGreenPatchTEST(grid) {
  //let bolean = _.sample([true, false]);

  function boleanTest() {
    let bolean = _.sample([true, false]);

    return bolean;
  }

  let nbpatch = 0;

  for (let i = 2; i < grid.numberOfColumn - 2; i++) {
    for (let j = 2; j < grid.numberOfRow - 2; j++) {
      if (grid.unitsList[i][j] != null && nbpatch <= 10) {
        if (boleanTest() === true) {
          grid.unitsList[i][j].fill = "url(#grass)";
          nbpatch++;
        }
      }
    }
  }

  return grid;
  // grid.unitsList.map(unitsList => (bolean ? unitsList : (unitsList = null)));
}

//Retourne un tableau des coord des units de la bordure de la grille
function getCoordListOfOutsidesUnits(grid) {
  let listOfOutsidesUnits = [];

  ///grid[numberColumn][numberRow]

  //Left column
  for (let i = 0; i < grid.numberOfRow; i++) {
    listOfOutsidesUnits.push(grid.unitsList[0][i].coordInGrid);
  }
  //top row
  for (let i = 0; i < grid.numberOfColumn; i++) {
    listOfOutsidesUnits.push(grid.unitsList[i][0].coordInGrid);
  }
  //bottom column
  for (let i = 0; i < grid.numberOfColumn; i++) {
    listOfOutsidesUnits.push(
      grid.unitsList[i][grid.numberOfRow - 1].coordInGrid,
    );
  }
  //bottomrow
  for (let i = 0; i < grid.numberRow; i++) {
    listOfOutsidesUnits.push(
      grid.unitsList[grid.numberOfColumn - 1][i].coordInGrid,
    );
  }

  return listOfOutsidesUnits;
}

function getCoordListOfBorderUnits(grid) {
  let borderUnits = [];
  let neighbours = [];
  let k = 0;
  let copied = false;

  for (let i = 0; i < grid.numberOfColumn; i++) {
    for (let j = 0; j < grid.numberOfRow; j++) {
      copied = false;
      if (grid.unitsList[i][j] != null) {
        neighbours = getNeighboursCoordinatesOfUnit(
          grid.unitsList[i][j].coordInGrid,
          grid.numberOfRow,
          grid.numberOfColumn,
        );

        for (let z = 0; z < neighbours.length; z++) {
          if (
            grid.unitsList[neighbours[z].x][neighbours[z].y] == null &&
            copied === false
          ) {
            borderUnits[k] = grid.unitsList[i][j];
            borderUnits[k].posNull.add(neighbours[z].pos);
            copied = true;

            //break;
          }
        }
        k++;
      }
    }
  }

  console.log("borderUnits :", borderUnits);

  return borderUnits;
}

function generateMapShape(grid) {
  // prettier-ignore
  let mapArray = [
    0,0,
    0,
    0,0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    3,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    2,
    3,
    3,
    3,
    3,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    1,
    1,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    2,
    3,
    3,
    3,
    3,
    3,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    3,
    3,
    3,
    3,
    3,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    3,
    3,
    3,
    3,
    3,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    1,
    1,
    1,
    3,
    3,
    3,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    3,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    2,
    2,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    2,
    2,
    2,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];

  let indice = 0;
  //numberOfRow
  //numberOfColumn
  for (let i = 0; i < grid.numberOfRow; i++) {
    for (let j = 0; j < grid.numberOfColumn; j++) {
      if (mapArray[indice] === 0) {
        grid.unitsList[j][i] = null;
      }

      if (mapArray[indice] === 2) {
        grid.unitsList[j][i].fill = "url(#grass)";
      }
      indice++;
    }
  }

  return grid;
}
