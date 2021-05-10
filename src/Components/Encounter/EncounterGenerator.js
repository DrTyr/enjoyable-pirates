export function generateEncounters(grid) {
  //grid = randomlyFillWithEncounter(grid);

  grid = generateTree(grid, 4);
  grid = generateBoat(grid, 6);

  return grid;
}

function generateTree(grid, quantity) {
  let coordinates = { x: 0, y: 0 };

  if (quantity === undefined) {
    quantity = 1;
  }

  for (let i = 0; i < quantity; i++) {
    coordinates = getRandomUnitCoordinatesInGrid(grid, ["grass"]);
    //return random 0 or 1
    let random = Math.round(Math.random() * 1);

    const trunkPos = grid.unitsList[coordinates.x][coordinates.y];
    const leefPos = grid.unitsList[coordinates.x][coordinates.y - 1];

    switch (random) {
      case 0:
        trunkPos.fill[1] = "url(#treeTrunk1)";
        trunkPos.encounterType[0] = "tree";
        leefPos.fill[1] = "url(#treeLeef1)";
        //leefPos.encounterType[1] = "tree";
        break;
      case 1:
        trunkPos.fill[1] = "url(#treeTrunk2)";
        trunkPos.encounterType[0] = "tree";
        leefPos.fill[1] = "url(#treeLeef2)";
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

    boatPos.fill[1] = "url(#boatSprite)";
    boatPos.encounterType[1] = "boat";
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
