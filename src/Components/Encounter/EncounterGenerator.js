//WIP randomly fill on hexagone.fill with adress of IMG (currently not working)
export function randomlyFillWithEncounter(grid) {
  let coordinates = { x: 0, y: 0 };
  let coordinates2 = { x: 0, y: 0 };

  //return objet coordinate with x and y of a random hexagon
  coordinates = getRandomUnitCoordinatesInGrid(grid);
  coordinates2 = getRandomUnitCoordinatesInGrid(grid);

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

function getRandomUnitCoordinatesInGrid(grid) {
  let randomColumn = 0;
  let randomRow = 0;

  while (grid.unitsList[randomColumn][randomRow] == null) {
    //Generate a random whole number between 0 and grid.numberColumn
    randomColumn = Math.floor(Math.random() * grid.numberOfColumn);
    randomRow = Math.floor(Math.random() * grid.numberOfRow);
  }

  let coordinates = { x: randomColumn, y: randomRow };

  return coordinates;
}
