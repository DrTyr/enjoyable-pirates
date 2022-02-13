import { concat } from "lodash";

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  const dash = "#";
  var color = "";

  for (var i = 0; i < 6; i++) {
    color = dash + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function inverseBoolean(boolean) {
  return boolean ? false : true;
}

export function convertAsCaracterChain(chain) {
  return `${chain}`;
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function drawRectSVG(
  viewBox_x,
  viewBox_y,
  viewBox_width,
  viewBox_height,
  id,
  x,
  y,
  width,
  height,
  fill,
) {
  if (viewBox_x === undefined) {
    viewBox_x = 0;
  }
  if (viewBox_y === undefined) {
    viewBox_y = 0;
  }
  if (viewBox_width === undefined) {
    viewBox_width = 200;
  }
  if (viewBox_height === undefined) {
    viewBox_height = 200;
  }

  return (
    <svg viewBox={concat(viewBox_x, viewBox_y, viewBox_width, viewBox_height)}>
      <rect
        id={`${id}`}
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
      />
    </svg>
  );
}
