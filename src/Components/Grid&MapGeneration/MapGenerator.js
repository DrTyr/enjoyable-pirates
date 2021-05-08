import { generateEntireGrid } from "../Grid&MapGeneration/GridGenerator";
import { randomlyFillWithEncounter } from "../Encounter/EncounterGenerator";
import { getNeighboursCoordinatesOfUnit } from "../MapDisplay/InteractionsWithNeighbours";
//import _ from "lodash";

import { mapArray, generateMapMatrix } from "./MapMatrix";

//To put an empty gridUnit at x,y pos :   grid.unitsList[x][y] = null;

export function generateMainMap() {
  let grid = {};

  //"../Grid&MapGeneration/GridGenerator"
  grid = generateEntireGrid();

  //this file
  //grid = generateBeachsOLD(grid);

  //grid = generateMapShapeTEST(grid);

  //grid = generateRandomGreenPatchTEST(grid);

  grid = generateMapShape(grid);

  grid = generateBeachBorder(grid);

  grid = generateGrassBorder(grid);

  //"../Encounter/EncounterGenerator"
  //grid = randomlyFillWithEncounter(grid);

  //grid.unitsList[3][3] = null;

  return grid;
}

function generateGrassBorder(grid) {
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

  let borderUnitsList = getCoordListOfBorderUnits(
    grid,
    "url(#fullGrass)",
    "url(#beachCenter)",
  );

  //Test if border are calculated coorectly by changing fill to red
  // for (let k = 0; k < borderUnitsList.length; k++) {
  //   grid.unitsList[borderUnitsList[k].coordInGrid.x][
  //     borderUnitsList[k].coordInGrid.y
  //   ].fill = "red";
  // }

  for (let k = 0; k < borderUnitsList.length; k++) {
    // console.log(borderUnitsList[k].posNull.includes("west"));
    //switch (borderUnitsList[k]) {
    let currentTest = borderUnitsList[k].posNull;
    //grass face west
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === false &&
      currentTest.includes("north") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#westGrassYellowSandJunction)";
      continue;
    }
    //corner grass face north west
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === false &&
      currentTest.includes("north") === true &&
      currentTest.includes("east") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#northWestGrassYellowSandJunction)";
      continue;
    }
    //TO DEFINE
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === false &&
      currentTest.includes("north") === true &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "red";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //TO DEFINE
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === true &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "blue";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //TO DEFINE
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === true &&
      currentTest.includes("north") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "magenta";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //grass corner face south west
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === true &&
      currentTest.includes("east") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#southWestGrassYellowSandJunction)";
      continue;
    }
    //TO DEFINE
    if (
      currentTest.includes("north") === true &&
      currentTest.includes("south") === true &&
      currentTest.includes("southEast") === true &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "salmon";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //grass corner face south east
    if (
      currentTest.includes("north") === false &&
      currentTest.includes("south") === true &&
      currentTest.includes("southEast") === true &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#southEastGrassYellowSandJunction)";
      continue;
    }
    //grass face south
    if (
      currentTest.includes("south") === true &&
      currentTest.includes("west") === false &&
      currentTest.includes("east") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#southGrassYellowSandJunction)";
    }
    //grass face east
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("north") === false &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#eastGrassYellowSandJunction)";
      continue;
    }
    //grass corner face north east
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("north") === true &&
      currentTest.includes("east") === true
      //currentTest.includes("northWest") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#northEastGrassYellowSandJunction)";
      continue;
    }
    //grass face north
    if (
      currentTest.includes("north") === true &&
      currentTest.includes("east") === false &&
      currentTest.includes("west") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#northGrassYellowSandJunction)";
      continue;
    }
    //Inner corner grass face north east
    if (
      currentTest.includes("north") === false &&
      currentTest.includes("east") === false &&
      currentTest.includes("northEast") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#grassCornerInside)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //Inner corner grass face north west
    if (
      currentTest.includes("north") === false &&
      currentTest.includes("west") === false &&
      currentTest.includes("northWest") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#grassCornerInside)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 180;
      continue;
    }
    //Inner corner grass face south west
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("west") === false &&
      currentTest.includes("southWest") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#grassCornerInside)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 90;
      continue;
    }
    //Inner corner grass face south east
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("east") === false &&
      currentTest.includes("southEast") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#grassCornerInside)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 0;
      continue;
    }
  }

  return grid;
}

function generateBeachBorder(grid) {
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

  //console.log("bloup", grid);

  let borderUnitsList = getCoordListOfBorderUnits(
    grid,
    "url(#beachCenter)",
    null,
  );

  // Test if border are calculated coorectly by changing fill to red
  // for (let k = 0; k < borderUnitsList.length; k++) {
  //   grid.unitsList[borderUnitsList[k].coordInGrid.x][
  //     borderUnitsList[k].coordInGrid.y
  //   ].fill = "red";
  // }

  for (let k = 0; k < borderUnitsList.length; k++) {
    //console.log(borderUnitsList[k].posNull.includes("west"));
    //switch (borderUnitsList[k]) {
    let currentTest = borderUnitsList[k].posNull;
    //beach face west
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === false &&
      currentTest.includes("north") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beach)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //corner beach face north west
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === false &&
      currentTest.includes("north") === true &&
      currentTest.includes("east") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beachCorner)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //TO DEFINE
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === false &&
      currentTest.includes("north") === true &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "red";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //TO DEFINE
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === true &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "blue";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //TO DEFINE
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === true &&
      currentTest.includes("north") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "magenta";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //beach corner face south west
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === true &&
      currentTest.includes("east") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beachCorner)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 180;
      continue;
    }
    //TO DEFINE
    if (
      currentTest.includes("north") === true &&
      currentTest.includes("south") === true &&
      currentTest.includes("southEast") === true &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "salmon";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //beach corner face south east
    if (
      currentTest.includes("north") === false &&
      currentTest.includes("south") === true &&
      currentTest.includes("southEast") === true &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beachCorner)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 90;
      continue;
    }
    //beach face south
    if (
      currentTest.includes("south") === true &&
      currentTest.includes("west") === false &&
      currentTest.includes("east") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beach)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 180;
      continue;
    }
    //beach face east
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("north") === false &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beach)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 90;
      continue;
    }
    //beach corner face north east
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("north") === true &&
      currentTest.includes("east") === true
      //currentTest.includes("northWest") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beachCorner)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 0;
      continue;
    }
    //beach face north
    if (
      currentTest.includes("north") === true &&
      currentTest.includes("east") === false &&
      currentTest.includes("west") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beach)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 0;
      continue;
    }
    //Inner corner beach face north east
    if (
      currentTest.includes("north") === false &&
      currentTest.includes("east") === false &&
      currentTest.includes("northEast") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beachCornerInside)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = -90;
      continue;
    }
    //Inner corner beach face north west
    if (
      currentTest.includes("north") === false &&
      currentTest.includes("west") === false &&
      currentTest.includes("northWest") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beachCornerInside)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 180;
      continue;
    }
    //Inner corner beach face south west
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("west") === false &&
      currentTest.includes("southWest") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beachCornerInside)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 90;
      continue;
    }
    //Inner corner beach face south east
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("east") === false &&
      currentTest.includes("southEast") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill = "url(#beachCornerInside)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].rotateAngle = 0;
      continue;
    }
  }

  return grid;
}

function getCoordListOfBorderUnits(
  grid,
  TypeOfFillToGetBorderOf,
  TypeOfFillToGetBorderWidth,
) {
  let borderUnits = [];
  //borderUnits.posNull = [];
  //let test = null;

  let neighbours = [];
  //k = indice that inscrement if neibhours == null
  let k = 0;
  //p = pos in posNull array
  let p = 0;

  let copied = false;

  //let TypeOfFillToGetBorderWidth = null;

  for (let i = 0; i < grid.numberOfColumn; i++) {
    for (let j = 0; j < grid.numberOfRow; j++) {
      if (
        grid.unitsList[i][j] != null &&
        grid.unitsList[i][j].fill === TypeOfFillToGetBorderOf
      ) {
        neighbours = getNeighboursCoordinatesOfUnit(
          grid.unitsList[i][j].coordInGrid,
          grid.numberOfRow,
          grid.numberOfColumn,
        );
        p = 0;
        if (copied === true) {
          k++;
          copied = false;
        }
        for (let z = 0; z < neighbours.length; z++) {
          if (
            grid.unitsList[neighbours[z].x][neighbours[z].y] == null ||
            grid.unitsList[neighbours[z].x][neighbours[z].y].fill !==
              TypeOfFillToGetBorderOf
          ) {
            if (
              grid.unitsList[neighbours[z].x][neighbours[z].y] ===
                TypeOfFillToGetBorderWidth ||
              grid.unitsList[neighbours[z].x][neighbours[z].y].fill ===
                TypeOfFillToGetBorderWidth
            ) {
              borderUnits[k] = grid.unitsList[i][j];
              borderUnits[k].posNull[p] = neighbours[z].pos;
              copied = true;
              p++;
              //break;
            }
          }
        }
      }
    }
  }

  return borderUnits;
}

function generateMapShape(grid) {
  let indice = 0;
  //numberOfRow
  //numberOfColumn

  //let mapArray = generateMapMatrix();

  for (let i = 0; i < grid.numberOfRow; i++) {
    for (let j = 0; j < grid.numberOfColumn; j++) {
      if (mapArray[indice] === 0) {
        grid.unitsList[j][i] = null;
      }
      if (mapArray[indice] === 1) {
        grid.unitsList[j][i].fill = "url(#beachCenter)";
      }
      if (mapArray[indice] === 2) {
        grid.unitsList[j][i].fill = "url(#fullGrass)";
      }
      indice++;
    }
  }

  return grid;
}
