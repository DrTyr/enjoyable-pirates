import { generateEntireGrid } from "../Grid&MapGeneration/GridGenerator";
import { generateEncounters } from "../Encounter/EncounterDisplayOnMap";
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

  //
  grid = generateMapShape(grid);

  grid = generateBeachBorder(grid);

  grid = generateGrassBorder(grid);

  grid = generateDeepSeaBorder(grid);

  grid = generateYellowSandBorder(grid);

  // //"../Encounter/EncounterDisplayOnMap"
  grid = generateEncounters(grid);

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

  const borderUnitsList = getCoordListOfBorderUnits(grid, "url(#fullGrass)", [
    "url(#fullOrangeSand)",
    "url(#southOrangeSandSeaJunction)",
    "url(#southWestSeaOrangeSandJunction)",
    "url(#northWestGrassYellowSandJunction)",
    "url(#fullYellowSand)",
  ]);

  //Test if border are calculated coorectly by changing fill to red
  // for (let k = 0; k < borderUnitsList.length; k++) {
  //   grid.unitsList[borderUnitsList[k].coordInGrid.x][
  //     borderUnitsList[k].coordInGrid.y
  //   ].fill[0] = "red";
  // }

  for (let k = 0; k < borderUnitsList.length; k++) {
    // console.log(borderUnitsList[k].posNull.includes("west"));
    //switch (borderUnitsList[k]) {
    let currentTest = borderUnitsList[k].posNull;
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("east") === false &&
      currentTest.includes("west") === false &&
      currentTest.includes("north") === false &&
      currentTest.includes("southWest") === true &&
      currentTest.includes("northEast") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#northWestSouthEastTwoGrassSandJunction)";
      continue;
    }
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("east") === false &&
      currentTest.includes("west") === false &&
      currentTest.includes("north") === false &&
      currentTest.includes("southEast") === true &&
      currentTest.includes("northWest") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#northEastSouthWestTwoGrassSandJunction)";
      continue;
    }
    //grass face west
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === false &&
      currentTest.includes("north") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#westGrassYellowSandJunction)";
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
      ].fill[0] = "url(#northWestGrassYellowSandJunction)";
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
      ].fill[0] = "url(#southGrassYellowSandJunction)";
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
      ].fill[0] = "red";
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
      ].fill[0] = "blue";
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
      ].fill[0] = "magenta";
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
      ].fill[0] = "url(#southWestGrassYellowSandJunction)";
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
      ].fill[0] = "salmon";
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
      ].fill[0] = "url(#southEastGrassYellowSandJunction)";
      continue;
    }

    //grass face east
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("north") === false &&
      currentTest.includes("east") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#eastGrassYellowSandJunction)";
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
      ].fill[0] = "url(#northEastGrassYellowSandJunction)";
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
      ].fill[0] = "url(#northGrassYellowSandJunction)";
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
      ].fill[0] = "url(#northEastSandGrassJunction)";
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
      ].fill[0] = "url(#northWestSandGrassJunction)";
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
      ].fill[0] = "url(#southWestSandGrassJunction)";
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
      ].fill[0] = "url(#southEastSandGrassJunction)";
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
    "url(#fullOrangeSand)",
    ["url(#blueSea)"],
  );

  // Test if border are calculated coorectly by changing fill to red
  // for (let k = 0; k < borderUnitsList.length; k++) {
  //   grid.unitsList[borderUnitsList[k].coordInGrid.x][
  //     borderUnitsList[k].coordInGrid.y
  //   ].fill[0] = "red";
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
      ].fill[0] = "url(#westOrangeSandSeaJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";

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
      ].fill[0] = "url(#northWestOrangeSandSeaJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
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
      ].fill[0] = "url(#oneByOneOrangeSandAlone)"; //"red";
      // grid.unitsList[borderUnitsList[k].coordInGrid.x][
      //   borderUnitsList[k].coordInGrid.y
      // ].rotateAngle = -90;
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
      ].fill[0] = "url(#oneByOneOrangeSandAlone)";
      // grid.unitsList[borderUnitsList[k].coordInGrid.x][
      //   borderUnitsList[k].coordInGrid.y
      // ].rotateAngle = -90;
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
      ].fill[0] = "magenta";
      // grid.unitsList[borderUnitsList[k].coordInGrid.x][
      //   borderUnitsList[k].coordInGrid.y
      // ].rotateAngle = -90;
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
      ].fill[0] = "url(#southWestOrangeSandSeaJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
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
      ].fill[0] = "salmon";
      // grid.unitsList[borderUnitsList[k].coordInGrid.x][
      //   borderUnitsList[k].coordInGrid.y
      // ].rotateAngle = -90;
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
      ].fill[0] = "url(#southEastOrangeSandSeaJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
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
      ].fill[0] = "url(#southOrangeSandSeaJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
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
      ].fill[0] = "url(#eastOrangeSandSeaJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
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
      ].fill[0] = "url(#northEastOrangeSandSeaJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
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
      ].fill[0] = "url(#northOrangeSandSeaJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
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
      ].fill[0] = "url(#northEastSeaOrangeSandJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
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
      ].fill[0] = "url(#northWestSeaOrangeSandJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
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
      ].fill[0] = "url(#southWestSeaOrangeSandJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
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
      ].fill[0] = "url(#southEastSeaOrangeSandJunction)";
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fillType[0] = "beach";
      continue;
    }
  }

  return grid;
}

function generateYellowSandBorder(grid) {
  let borderUnitsList = getCoordListOfBorderUnits(
    grid,
    "url(#fullYellowSand)",
    [
      "url(#fullOrangeSand)",
      //"url(#southOrangeSandSeaJunction)",
      //"url(#southWestSeaOrangeSandJunction)",
      //"url(#northWestOrangeSandSeaJunction)",
      //"url(#northWestSeaOrangeSandJunction)",
      "url(#northWestGrassYellowSandJunction)",
      "url(#southWestGrassYellowSandJunction)",
      "url(#northEastGrassYellowSandJunction)",
      "url(#southEastGrassYellowSandJunction)",
      //"url(#southEastSeaOrangeSandJunction)",
      //"url(#westOrangeSandSeaJunction)",
      "url(#westGrassYellowSandJunction)",
      "url(#eastGrassYellowSandJunction)",
    ],
  );

  //console.log("Yellow sand border", borderUnitsList);

  // Test if border are calculated coorectly by changing fill to red
  // for (let k = 0; k < borderUnitsList.length; k++) {
  //   grid.unitsList[borderUnitsList[k].coordInGrid.x][
  //     borderUnitsList[k].coordInGrid.y
  //   ].fill[0] = "red";
  // }

  for (let k = 0; k < borderUnitsList.length; k++) {
    //console.log(borderUnitsList[k].posNull.includes("west"));
    //switch (borderUnitsList[k]) {
    let currentTest = borderUnitsList[k].posNull;
    //beach face west
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === false &&
      currentTest.includes("north") === false &&
      currentTest.includes("east") === true &&
      currentTest.includes("northWest") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#westYellowSandOrangeSandJunction)";

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
      ].fill[0] = "url(#northWestYellowSandOrangeSandJunction)";
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
      ].fill[0] = "red";
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
      ].fill[0] = "blue";
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
      ].fill[0] = "magenta";
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
      ].fill[0] = "url(#southWestYellowSandOrangeSandJunction)";
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
      ].fill[0] = "salmon";
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
      ].fill[0] = "url(#southEastYellowSandOrangeSandJunction)";
      continue;
    }
    //beach face south
    if (
      currentTest.includes("south") === true &&
      currentTest.includes("west") === false &&
      currentTest.includes("east") === false &&
      currentTest.includes("north") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#southYellowSandOrangeSandJunction)";
      continue;
    }
    //beach face east
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("north") === false &&
      currentTest.includes("east") === true &&
      currentTest.includes("west") === true &&
      currentTest.includes("northEast") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#eastYellowSandOrangeSandJunction)";
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
      ].fill[0] = "url(#northEastYellowSandOrangeSandJunction)";
      continue;
    }
    //beach face north
    if (
      currentTest.includes("north") === true &&
      currentTest.includes("east") === false &&
      currentTest.includes("west") === false &&
      currentTest.includes("south") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#northYellowSandOrangeSandJunction)";
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
      ].fill[0] = "url(#northEastOrangeSandYellowSandJunction)";
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
      ].fill[0] = "url(#northWestOrangeSandYellowSandJunction)";
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
      ].fill[0] = "url(#southWestOrangeSandYellowSandJunction)";
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
      ].fill[0] = "url(#southEastOrangeSandYellowSandJunction)";
      continue;
    }
    grid.unitsList[borderUnitsList[k].coordInGrid.x][
      borderUnitsList[k].coordInGrid.y
    ].fill[0] = "blue";
  }

  return grid;
}

function generateDeepSeaBorder(grid) {
  const borderUnitsList = getCoordListOfBorderUnits(grid, "url(#deepSea)", [
    "url(#blueSea)",
    "url(#westOrangeSandSeaJunction)",
  ]);

  //console.log("Yellow sand border", borderUnitsList);

  // Test if border are calculated coorectly by changing fill to red
  // for (let k = 0; k < borderUnitsList.length; k++) {
  //   grid.unitsList[borderUnitsList[k].coordInGrid.x][
  //     borderUnitsList[k].coordInGrid.y
  //   ].fill[0] = "red";
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
      ].fill[0] = "url(#westSeaDeepSeaJunction)";

      continue;
    }
    //corner beach face north west
    if (
      currentTest.includes("west") === true &&
      currentTest.includes("south") === false &&
      currentTest.includes("north") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#northWestSeaDeepSeaJunction)";
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
      ].fill[0] = "red";
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
      ].fill[0] = "url(#oneByOneDeepSeaAlone)";
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
      ].fill[0] = "magenta";
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
      ].fill[0] = "url(#southWestSeaDeepSeaJunction)";
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
      ].fill[0] = "salmon";
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
      ].fill[0] = "url(#southEastSeaDeepSeaJunction)";
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
      ].fill[0] = "url(#southSeaDeepSeaJunction)";
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
      ].fill[0] = "url(#eastSeaDeepSeaJunction)";
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
      ].fill[0] = "url(#northEastSeaDeepSeaJunction)";
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
      ].fill[0] = "url(#northSeaDeepSeaJunction)";
      continue;
    }
    //Inner corner beach face north east
    if (
      currentTest.includes("north") === false &&
      currentTest.includes("east") === false &&
      currentTest.includes("northEast") === true //&&
      //currentTest.includes("south") === false
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#northEastDeepSeaSeaJunction)";
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
      ].fill[0] = "url(#northWestDeepSeaSeaJunction)";
      continue;
    }
    //Inner corner beach face south west
    if (
      currentTest.includes("south") === false &&
      currentTest.includes("west") === false &&
      currentTest.includes("east") === false &&
      currentTest.includes("southWest") === true
    ) {
      grid.unitsList[borderUnitsList[k].coordInGrid.x][
        borderUnitsList[k].coordInGrid.y
      ].fill[0] = "url(#southWestDeepSeaSeaJunction)";
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
      ].fill[0] = "url(#southEastDeepSeaSeaJunction)";
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
        //grid.unitsList[i][j] != null &&
        grid.unitsList[i][j].fill[0] === TypeOfFillToGetBorderOf
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
            TypeOfFillToGetBorderWidth.includes(
              grid.unitsList[neighbours[z].x][neighbours[z].y].fill[0],
            )
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

  return borderUnits;
}

function generateMapShape(grid) {
  let indice = 0;
  //numberOfRow
  //numberOfColumn

  //let mapArray = generateMapMatrix();

  for (let i = 0; i < grid.numberOfRow; i++) {
    for (let j = 0; j < grid.numberOfColumn; j++) {
      switch (mapArray[indice]) {
        case -1:
          grid.unitsList[j][i].fill[0] = "url(#deepSea)";
          grid.unitsList[j][i].fillType[0] = "deepSea";
          grid.unitsList[j][i].clickable = false;
          break;

        case 0:
          grid.unitsList[j][i].fill[0] = "url(#blueSea)";
          grid.unitsList[j][i].fillType[0] = "blueSea";
          grid.unitsList[j][i].clickable = false;
          break;

        case 1:
          grid.unitsList[j][i].fill[0] = "url(#fullOrangeSand)";
          grid.unitsList[j][i].fillType[0] = "orangeSand";
          break;

        case 2:
          grid.unitsList[j][i].fill[0] = "url(#fullGrass)";
          grid.unitsList[j][i].fillType[0] = "grass";
          break;

        case 3:
          grid.unitsList[j][i].fill[0] = "url(#fullYellowSand)";
          grid.unitsList[j][i].fillType[0] = "yellowSand";
          break;

        default:
          break;
      }
      indice++;
    }
  }

  return grid;
}
