//Assets imports///////////////////////////////////////////
import banditCamp from "../../Assets/BanditCamp.jpg";

import beachTileset from "../../Assets/BeachTileset.png";

///////////////////////////////////////////////////////////

export function defGrassPatterns() {
  //Inside beachTileSet, every sprite in 32*32
  //Use view box to display only one part of the sprite image
  return (
    <defs>
      <pattern
        id="northGrassYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="448 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="southGrassYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="448 160 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="eastGrassYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="480 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northEastGrassYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="480 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northWestGrassYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="416 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="southWestGrassYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="416 160 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="southEastGrassYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="480 160 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="westGrassYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="416 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="fullGrass"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="448 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northWestSandGrassJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="544 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northEastSandGrassJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="512 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="southEastSandGrassJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="512 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="southWestSandGrassJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="542 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northWestSouthEastTwoGrassSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="512 160 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northEastSouthWestTwoGrassSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="544 160 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
    </defs>
  );
}

export function defYellowSandPatterns() {
  return (
    <defs>
      <pattern
        id="fullOrangeSand"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="64 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northYellowSandOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="256 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="westYellowSandOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="288 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="eastYellowSandOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="224 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southYellowSandOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="256 160 31 31"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northEastYellowSandOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="288 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southWestYellowSandOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="224 160 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southEastYellowSandOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="288 160 31 31"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northWestYellowSandOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="224 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="fullYellowSand"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="256 160 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northEastOrangeSandYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="320 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northWestOrangeSandYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="354 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southWestOrangeSandYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="352 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southEastOrangeSandYellowSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="320 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="fullYellowSand"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="96 64 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="oneByOneYellowSandAlone"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="224 96 96 96"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
    </defs>
  );
}

export function defBeachAndOrangeSandPatterns() {
  return (
    <defs>
      <pattern
        id="northOrangeSandSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="64 96.6 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="westOrangeSandSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="32 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="eastOrangeSandSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="96 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southOrangeSandSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="64 160 31 31"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northEastOrangeSandSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="95 97 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southWestOrangeSandSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="32 159 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southEastOrangeSandSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="96 160 31 31"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northWestOrangeSandSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="32 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="fullOrangeSand"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="64 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northEastSeaOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="128.6 127.8 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="northWestSeaOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="160 128 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southWestSeaOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="159 97 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southEastSeaOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="129 96.5 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="fullYellowSand"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="0 64 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="oneByOneOrangeSandAlone"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="32 96 96 96"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
    </defs>
  );
}

export function defSeaPatterns() {
  return (
    <defs>
      <pattern
        id="blueSea"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="32 64 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northSeaDeepSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="64 256 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="westSeaDeepSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="96 224 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="eastSeaDeepSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="32 224 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="southSeaDeepSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="64 192 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northEastSeaDeepSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="160 192 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="southWestSeaDeepSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="128 224 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="southEastSeaDeepSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="160 224 31 31"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northWestSeaDeepSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="128 192 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="deepSea"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="0 224 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northEastDeepSeaBeachJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="64 192 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northWestDeepSeaBeachJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="64 192 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="southWestDeepSeaBeachJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="256 224 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northEastDeepSeaSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="32 256 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northWestDeepSeaSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="96 256 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="southEastDeepSeaSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="32 192 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="southWestDeepSeaSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="96 192 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="oneByOneDeepSeaAlone"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="128 192 64 64"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
    </defs>
  );
}

export function defOtherPatterns() {
  return (
    <defs>
      <pattern
        id="banditCamp"
        // patternUnits="objectBoundingBox"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="0 0 700 310"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={banditCamp} width="700" height="310" />
      </pattern>

      <pattern
        id="boatSprite"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="256 0 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="treeLeef2"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="160 0 32 32"
        preserveAspectRatio="xMidYMid meet"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="treeTrunk2"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="160 32 32 32"
        preserveAspectRatio="xMidYMid meet"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="treeLeef1"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="128 0 32 32"
        preserveAspectRatio="xMidYMid meet"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="treeTrunk1"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="128 32 32 32"
        preserveAspectRatio="xMidYMid meet"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="player"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="480 32 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="pirate"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="352 32 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>

      <pattern
        id="smallBoat"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="192 32 32 32"
        //preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
    </defs>
  );
}
