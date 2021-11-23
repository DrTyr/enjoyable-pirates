import React from "react";

export function DisplayStats({caracterStats}){


        let slots = [];
    
        function getIndicatorColor(value) {
          let rectIndicatorColor = [];
    
          for (let i = 0; i <= Object.values(caracterStats.stats)[value]; i++) {
            rectIndicatorColor[i] = (
              <div 
              key={`red-indicator-${i}`}
              className="stats-rect-indicator-red"> </div>
            );
          }
          if (rectIndicatorColor.length < 5) {
            for (let i = rectIndicatorColor.length; i <= 5; i++) {
              rectIndicatorColor[i] = (
                <div              
                key={`blue-indicator-${i}`}
                className="stats-rect-indicator-blue"> </div>
              );
            }
          }
    
          return rectIndicatorColor;
        }
    
        //console.log("test :", Object.values(caracterStats)[1]);
    
        //////////////////////////////////////
        ////TENTER LE REFAIRE AVEC UNE MAP////
        //////////////////////////////////////
    
        for (let i = 0; i < Object.keys(caracterStats.stats).length; i++) {
          slots[i] = (
            <div
              className="stats-box"
              key={`caractStatsSlot${i}`}
              onClick={() => console.log("test caract stats")}
            >
              <div className="stats-img-container"></div>
              {getIndicatorColor(i)}
            </div>
          );
        }
    
        //console.log("slots length :", slots.length);
    
        return slots;
      
    


};