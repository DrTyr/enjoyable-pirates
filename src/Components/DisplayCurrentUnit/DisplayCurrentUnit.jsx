//Library imports//////////////////////////////////////////
import React from "react";
import _ from "lodash";
///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////

///////////////////////////////////////////////////////////

export function DisplayCurrentUnit({ currentUnit, topRightUnitDisplaySize }) {
  //Get out of the function if currentUnit don't exist

  if (!currentUnit) {
    return null;
  }

  if (currentUnit.indice === -1) {
    return null;
  }

  //Use _.cloneDeep to create a new memory space for displayedUnit
  //otherwise currentUnit and displayedUnit are the same in the memory
  let displayedUnit = _.cloneDeep(currentUnit);

  displayedUnit = {
    ...displayedUnit,
    size: (45 / 100) * topRightUnitDisplaySize.height,
    stroke: "black",
    strokeWidth: 5,
  };

  displayedUnit.coordStart = {
    x:
      topRightUnitDisplaySize.width -
      (topRightUnitDisplaySize.width - displayedUnit.radius) +
      10,
    y: topRightUnitDisplaySize.height / 2,
  };

  return (
    <svg
      viewBox={`0 0 ${topRightUnitDisplaySize.width} ${topRightUnitDisplaySize.height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect
        x={displayedUnit.coordStart.x}
        y={displayedUnit.coordStart.y}
        width={displayedUnit.radius * 2}
        height={displayedUnit.radius * 2}
        //fill={unitFillTest(gridUnit)}
        fill={displayedUnit.fill}
        opacity={displayedUnit.opacity}
        strokeWidth={displayedUnit.strokeWidth}
      />
    </svg>
  );
}
