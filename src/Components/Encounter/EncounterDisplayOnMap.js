import { getRandomInt } from "../../library";

export function generateEncounters(grid) {
  //grid = randomlyFillWithEncounter(grid);

  grid = generateTree(grid, getRandomInt(4, 10));
  grid = generateBoat(grid, getRandomInt(1, 4));
  grid = generatePirate(grid, 1);
  //test
  grid = generateSmallBoatTEST(grid, 3);

  return grid;
}

function generateSmallBoatTEST(grid, quantity) {
  let coordinates = { x: 0, y: 0 };

  if (quantity === undefined) {
    quantity = 1;
  }

  for (let i = 0; i < quantity; i++) {
    coordinates = getRandomUnitCoordinatesInGrid(grid, ["orangeSand"]);

    const boatPos = grid.unitsList[coordinates.x][coordinates.y];

    boatPos.encounter[0].fill = "url(#smallBoat)";
    boatPos.encounter[0].type = "smallBoat";
    boatPos.encounter[0].display = true;
  }

  return grid;
}

function generateTree(grid, quantity) {
  let coordinates = { x: 0, y: 0 };

  if (quantity === undefined) {
    quantity = 1;
  }

  for (let i = 0; i < quantity; i++) {
    //return random 0 or 1
    let random = Math.round(Math.random() * 1);
    let trunkPos = null;
    let leefPos = null;
    coordinates = getRandomUnitCoordinatesInGrid(grid, ["grass"]);

    //supposé empecher les arbre de se superposer mais ne fonctionne pas !!!!!
    while (
      grid.unitsList[coordinates.x][coordinates.y - 1].encounter[0].fill !==
        null &&
      grid.unitsList[coordinates.x][coordinates.y].encounter[0].fill !== null
    ) {
      coordinates = getRandomUnitCoordinatesInGrid(grid, ["grass"]);
    }

    trunkPos = grid.unitsList[coordinates.x][coordinates.y];
    leefPos = grid.unitsList[coordinates.x][coordinates.y - 1];

    switch (random) {
      case 0:
        trunkPos.encounter[0].fill = "url(#treeTrunk1)";
        trunkPos.encounter[0].type = "tree";
        trunkPos.encounter[0].display = true;

        leefPos.encounter[0].fill = "url(#treeLeef1)";
        leefPos.encounter[0].display = true;

        //leefPos.encounterType[1] = "tree";
        break;
      case 1:
        trunkPos.encounter[0].fill = "url(#treeTrunk2)";
        trunkPos.encounter[0].type = "tree";
        trunkPos.encounter[0].display = true;

        leefPos.encounter[0].fill = "url(#treeLeef2)";
        leefPos.encounter[0].display = true;

        //leefPos.encounterType[1] = "tree";
        break;
      default:
        break;
    }
  }

  return grid;
}

function generateBoat(grid, quantity) {
  let coordinates = { x: 0, y: 0 };

  if (quantity === undefined) {
    quantity = 1;
  }
  for (let i = 0; i < quantity; i++) {
    coordinates = getRandomUnitCoordinatesInGrid(grid, ["blueSea"]);

    const boatPos = grid.unitsList[coordinates.x][coordinates.y];

    boatPos.encounter[0].fill = "url(#boatSprite)";
    boatPos.encounter[0].type = "boat";
    boatPos.encounter[0].display = true;
  }

  return grid;
}

function generatePirate(grid, quantity) {
  let coordinates = { x: 0, y: 0 };

  if (quantity === undefined) {
    quantity = 1;
  }
  for (let i = 0; i < quantity; i++) {
    coordinates = getRandomUnitCoordinatesInGrid(grid, ["orangeSand"]);

    const pirate = grid.unitsList[coordinates.x][coordinates.y];

    pirate.encounter[0].fill = "url(#pirate)";
    pirate.encounter[0].type = "pirate";
    pirate.encounter[0].display = true;
  }

  return grid;
}

function randomlyFillWithEncounter(grid) {
  let coordinates = { x: 0, y: 0 };
  let coordinates2 = { x: 0, y: 0 };

  //return objet coordinate with x and y of a random hexagon
  coordinates = getRandomUnitCoordinatesInGrid(grid, [
    "grass",
    "OrangeSandAndBeaches",
  ]);
  coordinates2 = getRandomUnitCoordinatesInGrid(grid, ["grass"]);

  //let coordinates3 = getCoordonateRandomHexagoneInGrid(grid);
  //

  //grid.unitsList[1][1].fill = "url(#banditCamp)";
  //grid.unitsList[1][1].encounterType = "bandit";

  grid.unitsList[coordinates.x][coordinates.y].fill = "url(#banditCamp)";
  grid.unitsList[coordinates.x][coordinates.y].encounterType = "bandit";

  grid.unitsList[coordinates2.x][coordinates2.y].fill = "url(#banditCamp)";
  grid.unitsList[coordinates2.x][coordinates2.y].encounterType = "mage";

  return grid;
}

//Return a x and y pos in grid within the fillTypeArray parameter
function getRandomUnitCoordinatesInGrid(grid, fillTypeArray) {
  let randomColumn = 0;
  let randomRow = 0;

  //Test to sort grid coord that are fill with fillTypeArray only, to prop encounter on a specifique fill type

  while (
    fillTypeArray.includes(
      grid.unitsList[randomColumn][randomRow].fillType[0],
    ) === false ||
    grid.unitsList[randomColumn][randomRow].fill[1] ||
    grid.unitsList[randomColumn][randomRow].fill[1] !== undefined
  ) {
    //Generate a random whole number between 0 and grid.numberColumn
    randomColumn = Math.floor(Math.random() * grid.numberOfColumn);
    randomRow = Math.floor(Math.random() * grid.numberOfRow);
  }

  let coordinates = { x: randomColumn, y: randomRow };

  return coordinates;
}
