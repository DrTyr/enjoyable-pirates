export function ManageDeleteOnMap(answer, grid, currentUnit) {
  if (!answer.reusable) {
    grid.unitsList[currentUnit.coordInGrid.x][
      currentUnit.coordInGrid.y
    ].encounter.display = false;

    if (
      grid.unitsList[currentUnit.coordInGrid.x][currentUnit.coordInGrid.y]
        .encounter.type[0] === "tree"
    ) {
      grid.unitsList[currentUnit.coordInGrid.x][
        currentUnit.coordInGrid.y - 1
      ].encounter.display = false;
    }
  }

  return grid;
}
