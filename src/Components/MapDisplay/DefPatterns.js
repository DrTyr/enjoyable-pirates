//Assets imports///////////////////////////////////////////
import banditCamp from "../../Assets/BanditCamp.jpg";
import grass from "../../Assets/Grass.png";
import grassCorner from "../../Assets/GrassCorner.png";
import grassCenter from "../../Assets/GrassCenter.png";
import grassCornerInside from "../../Assets/GrassCornerInside.png";

import beach from "../../Assets/Beach.png";
import beachCorner from "../../Assets/BeachCorner.png";
import beachCenter from "../../Assets/BeachCenter.png";
import beachCornerInside from "../../Assets/BeachCornerInside.png";

import beachTileset from "../../Assets/BeachTileset.png";

///////////////////////////////////////////////////////////

export function defPatterns() {
  //Inside beachTileSet, every sprite in 32*32
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
        viewBox="512 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
      <pattern
        id="northOrangeSandSeaJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="64 96 32 32"
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
        viewBox="96 96 32 32"
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
        id="northWestSeaOrangeSandJunction"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="128 96 32 32"
        preserveAspectRatio="xMidYMid slice"
      >
        <image href={beachTileset} />
      </pattern>
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
    </defs>
  );
}
