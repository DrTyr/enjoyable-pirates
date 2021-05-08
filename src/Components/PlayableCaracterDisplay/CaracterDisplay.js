//Library imports//////////////////////////////////////////
import _ from "lodash";
///////////////////////////////////////////////////////////

//CSS imports/////////////////////////////////////////////

///////////////////////////////////////////////////////////

//Functions imports////////////////////////////////////////
import { displayNeighbours } from "../MapDisplay/InteractionsWithNeighbours";
///////////////////////////////////////////////////////////

//Assets imports///////////////////////////////////////////
import player from "../../Assets/Pirate.png";
///////////////////////////////////////////////////////////

export function DisplayCaracter({
  grid,
  setGrid,
  previousgrid,
  setPreviousGrid,
  posCaracterInGrid,
  posCaracterInSvg,
  neighboursAreDisplay,
  setNeighboursAreDisplay,
  previousPosCaracterInSvg,
  caracterIsMoving,
  setCaracterIsMoving,
}) {
  return (
    <g
      className="caracter"
      key="PJ"
      onMouseEnter={() => {
        if (neighboursAreDisplay === false) {
          setNeighboursAreDisplay(true);
          let grid2 = { ...grid };
          setPreviousGrid(_.cloneDeep(grid));
          setGrid(
            displayNeighbours(
              grid.unitsList[posCaracterInGrid.x][posCaracterInGrid.y],
              grid2,
            ),
          );
        }
      }}
      onMouseLeave={() => {
        if (neighboursAreDisplay === true) {
          setNeighboursAreDisplay(false);
          setGrid(previousgrid);
        }
      }}
    >
      <rect
        width={`${grid.unitRadius}`}
        height={`${grid.unitRadius}`}
        //x and y pos are x = pos - width/2 and  y = pos-height/2
        x={posCaracterInSvg.x - grid.unitRadius / 2}
        y={posCaracterInSvg.y - grid.unitRadius / 2}
        fill="url(#player)"
      >
        {caracterIsMoving && (
          <animate
            attributeType="XML"
            attributeName="y"
            from={posCaracterInSvg.y - grid.unitRadius / 2}
            to={posCaracterInSvg.y - grid.unitRadius / 2 - 10}
            dur="0.5s"
            repeatCount="indefinite"
          />
        )}
      </rect>

      <defs>
        <pattern
          id="player"
          x="0"
          y="0"
          width="1"
          height="1"
          viewBox="0 0 382 412"
        >
          <image width="382" height="412" href={player} />
        </pattern>
      </defs>
    </g>
  );
}

export default DisplayCaracter;
