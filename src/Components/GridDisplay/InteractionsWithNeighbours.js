export function displayNeighbours(gridUnit, grid) {
  let neighboursCoordinates = getNeighboursCoordinatesOfUnit(
    gridUnit.coordInGrid,
    grid.numberColumn,
    grid.numberRow,
  );

  //Set the opacity of every hexagon of the grid to 0.2
  grid.UnitsList.map(UnitsList =>
    UnitsList.map(gridUnit => (gridUnit.opacity = 0.2)),
  );

  //Set back the opacity of the neighbours to 1
  for (let i = 0; i < neighboursCoordinates.length; i++) {
    grid.UnitsList[neighboursCoordinates[i].x][
      neighboursCoordinates[i].y
    ].opacity = 1;
    grid.UnitsList[neighboursCoordinates[i].x][
      neighboursCoordinates[i].y
    ].stroke = "black";
    grid.UnitsList[neighboursCoordinates[i].x][
      neighboursCoordinates[i].y
    ].strokeWidth = 3;
  }

  return grid;
}

export function getNeighboursCoordinatesOfUnit(
  CoordInGrid,
  numberOfRowInGrid,
  numberOfColumnInGrid,
) {
  let neighboursCoordinates = [{ x: 0, y: 0, pos: "" }];

  neighboursCoordinates[0] = {
    x: CoordInGrid.x - 1,
    y: CoordInGrid.y - 1,
    pos: "northWest",
  };
  neighboursCoordinates[1] = {
    x: CoordInGrid.x - 1,
    y: CoordInGrid.y + 1,
    pos: "southWest",
  };
  neighboursCoordinates[2] = {
    x: CoordInGrid.x + 1,
    y: CoordInGrid.y + 1,
    pos: "southEast",
  };
  neighboursCoordinates[3] = {
    x: CoordInGrid.x + 1,
    y: CoordInGrid.y - 1,
    pos: "northEast",
  };
  neighboursCoordinates[4] = {
    x: CoordInGrid.x + 1,
    y: CoordInGrid.y,
    pos: "east",
  };
  neighboursCoordinates[5] = {
    x: CoordInGrid.x - 1,
    y: CoordInGrid.y,
    pos: "west",
  };
  neighboursCoordinates[6] = {
    x: CoordInGrid.x,
    y: CoordInGrid.y - 1,
    pos: "north",
  };
  neighboursCoordinates[7] = {
    x: CoordInGrid.x,
    y: CoordInGrid.y + 1,
    pos: "south",
  };

  //Test if some neighbours are outside the grid and remove them

  neighboursCoordinates.slice(0).forEach(function (coordNeighbours) {
    if (
      coordNeighbours.x < 0 ||
      coordNeighbours.y > numberOfRowInGrid - 1 ||
      coordNeighbours.y < 0 ||
      coordNeighbours.x > numberOfColumnInGrid - 1
    ) {
      neighboursCoordinates.splice(
        neighboursCoordinates.indexOf(coordNeighbours),
        1,
      );
    }
  });

  return neighboursCoordinates;
}
