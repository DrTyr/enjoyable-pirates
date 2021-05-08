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
  return (
    <defs>
      <pattern
        id="grass"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="0 0 320 320"
        preserveAspectRatio="xMidYMid slice"
      >
        <image width="320" height="320" href={grass} />
      </pattern>
      <pattern
        id="grassCorner"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="0 0 320 320"
        preserveAspectRatio="xMidYMid slice"
      >
        <image width="320" height="320" href={grassCorner} />
      </pattern>
      <pattern
        id="grassCenter"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="0 0 320 320"
        preserveAspectRatio="xMidYMid slice"
      >
        <image width="320" height="320" href={grassCenter} />
      </pattern>
      <pattern
        id="grassCornerInside"
        x="0"
        y="0"
        width="1"
        height="1"
        viewBox="0 0 320 320"
        preserveAspectRatio="xMidYMid slice"
      >
        <image width="320" height="320" href={grassCornerInside} />
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
      <pattern
        id="beach"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="0 0 314 314"
        preserveAspectRatio="xMidYMid slice"
      >
        <image
          href={beach}
          //size of the img
          width="314"
          height="314"
        />
      </pattern>
      <pattern
        id="beachCorner"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="0 0 314 314"
        preserveAspectRatio="xMidYMid slice"
      >
        <image
          href={beachCorner}
          //size of the img
          width="314"
          height="314"
        />
      </pattern>
      <pattern
        id="beachCenter"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="0 0 314 314"
        preserveAspectRatio="xMidYMid slice"
      >
        <image
          href={beachCenter}
          //size of the img
          width="314"
          height="314"
        />
      </pattern>
      <pattern
        id="beachCornerInside"
        x="0"
        y="0"
        width="1"
        height="1"
        //view Box 0 0 and size of the img
        viewBox="0 0 314 314"
        preserveAspectRatio="xMidYMid slice"
      >
        <image
          href={beachCornerInside}
          //size of the img
          width="314"
          height="314"
        />
      </pattern>
    </defs>
  );
}
