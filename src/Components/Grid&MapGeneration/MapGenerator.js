import { generateEntireGrid } from "../Grid&MapGeneration/GridGenerator";
import { randomlyFillWithEncounter } from "../Encounter/EncounterGenerator";

export function generateMainMap() {
  let grid = {};

  grid = generateEntireGrid();
  grid = randomlyFillWithEncounter(grid);
  grid = generateBeachs(grid);

  return grid;
}

//fill all the outsides hexagons with beach assets
function generateBeachs(grid) {
  ///grid[numberColumn][numberRow]

  //Left column
  for (let i = 0; i < grid.numberOfRow; i++) {
    grid.unitsList[0][i].fill = "url(#beach)";
    grid.unitsList[0][i].rotateAngle = -90;
  }
  //top row
  for (let i = 0; i < grid.numberOfColumn; i++) {
    grid.unitsList[i][0].fill = "url(#beach)";
    grid.unitsList[i][0].rotateAngle = 0;
  }
  //bottom column
  for (let i = 0; i < grid.numberOfColumn; i++) {
    grid.unitsList[i][grid.numberOfRow - 1].fill = "url(#beach)";
    grid.unitsList[i][grid.numberOfRow - 1].rotateAngle = 90;
  }
  //bottom row
  for (let i = 0; i < grid.numberOfRow; i++) {
    grid.unitsList[grid.numberOfColumn - 1][i].fill = "url(#beach)";
    grid.unitsList[grid.numberOfColumn - 1][i].rotateAngle = 180;
  }

  return grid;
}

//Retourne un tableau des corod des units de la bordure de la grille
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
