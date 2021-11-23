export function ManageDeleteOnMap(answer, grid, currentUnit) {
  if (!answer.itemProps.reusable) {
    grid.unitsList[currentUnit.coordInGrid.x][
      currentUnit.coordInGrid.y
    ].encounter[0].display = false;

    switch (
      grid.unitsList[currentUnit.coordInGrid.x][currentUnit.coordInGrid.y]
        .encounter[0].type
    ) {
      case "tree":
        grid.unitsList[currentUnit.coordInGrid.x][
          currentUnit.coordInGrid.y - 1
        ].encounter[0].display = false;
        break;
      default:
        break;
    }

    // if (
    //   grid.unitsList[currentUnit.coordInGrid.x][currentUnit.coordInGrid.y]
    //     .encounter[0].type === "tree"
    // ) {
    //   grid.unitsList[currentUnit.coordInGrid.x][
    //     currentUnit.coordInGrid.y - 1
    //   ].encounter[0].display = false;
    // }
  }

  return grid;
}
