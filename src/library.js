export function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function inverseBoolean(boolean) {
  if (boolean === true) {
    return false;
  } else {
    return true;
  }
}

export function convertAsCaracterChain(chain) {
  return `${chain}`;
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
