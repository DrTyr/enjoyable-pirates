//WIP randomly fill on hexagone.fill with adress of IMG (currently not working)
export function randomlyFillWithEncounter(grid) {
  //return objet coordinate with x and y of a random hexagon
  let coordinates = getRandomUnitCoordinatesInGrid(grid);
  let coordinates2 = getRandomUnitCoordinatesInGrid(grid);
  //let coordinates3 = getCoordonateRandomHexagoneInGrid(grid);
  //

  grid.unitsList[coordinates.x][coordinates.y].fill = "url(#banditCamp)";
  grid.unitsList[coordinates.x][coordinates.y].encounterType = "bandit";

  grid.unitsList[coordinates2.x][coordinates2.y].fill = "url(#grass)";
  grid.unitsList[coordinates2.x][coordinates2.y].encounterType = "mage";

  return grid;
}

function getRandomUnitCoordinatesInGrid(grid) {
  //Generate a random whole number between 0 and grid.numberColumn
  let randomColumn = Math.floor(Math.random() * grid.numberOfColumn);
  let randomRow = Math.floor(Math.random() * grid.numberOfRow);

  let coordinates = { x: randomColumn, y: randomRow };

  return coordinates;
}
