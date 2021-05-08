import { useState } from "react";
import { generateEntireGrid } from "./GridGenerator";

//Assets imports///////////////////////////////////////////

///////////////////////////////////////////////////////////

function MyInput({ label, value, setValue }) {
  const onChange = event => {
    setValue(event.target.value);
  };

  return (
    <>
      <div>{label}</div>
      <input placeholder="Type a value" value={value} onChange={onChange} />
    </>
  );
}

export function Page2({ setCurrentPage }) {
  const [numberOfColumns, setNumberOfColumns] = useState(4);
  const [numberOfRows, setNumberOfRow] = useState(4);
  const [unitRadius, setUnitRadius] = useState(20);
  const [grid, setGrid] = useState({});
  const [displayGrid, setDisplayGrid] = useState(false);

  function generateSvgUnits() {
    return grid.unitsList.map(unitsList =>
      unitsList.map(
        gridUnit =>
          gridUnit != null && (
            <g key={`indice${gridUnit.indice}`}>
              <rect
                x={gridUnit.coordStart.x}
                y={gridUnit.coordStart.y}
                width={gridUnit.radius * 2}
                height={gridUnit.radius * 2}
                fill={gridUnit.fill}
                opacity={gridUnit.opacity}
                strokeWidth={gridUnit.strokeWidth}
                transform={`rotate(${gridUnit.rotateAngle},${
                  gridUnit.coordStart.x + gridUnit.radius
                },${gridUnit.coordStart.y + gridUnit.radius})`}
              />

              <text
                //className ="text-coord-map"
                x={gridUnit.coordStart.x + gridUnit.radius}
                y={gridUnit.coordStart.y + gridUnit.radius}
                fontFamily="Verdana"
                fontSize="10"
                fill="white"
                textAnchor="middle"
              >
                {/* text to display */}
                {`${gridUnit.coordInGrid.x},${gridUnit.coordInGrid.y}`}
              </text>
            </g>
          ),
      ),
    );
  }

  return (
    <>
      <button onClick={() => setCurrentPage("page1")}>Go to Page 1</button>
      <div>
        <MyInput
          label={"Number of columns"}
          value={numberOfColumns}
          setValue={setNumberOfColumns}
        />
        <MyInput
          label={"Number of rows"}
          value={numberOfRows}
          setValue={setNumberOfRow}
        />
        <MyInput
          label={"Unit size"}
          value={unitRadius}
          setValue={setUnitRadius}
        />
      </div>
      <div>
        {/* generateEntireGrid(numberOfRow,numberOfColumn,gridUnitRadius) */}
        <button
          onClick={() => {
            setGrid(
              generateEntireGrid(numberOfRows, numberOfColumns, unitRadius),
            );
            setDisplayGrid(true);
          }}
        >
          Generate grid
        </button>
      </div>
      <svg viewBox={"0 0 300 300"}>{displayGrid && generateSvgUnits()}</svg>
    </>
  );
}
