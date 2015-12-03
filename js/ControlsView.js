'use strict';

import d3 from "d3";
import React from "react";

/**
 */
class ControlsView extends React.Component{

  constructor(props) {
    super(props);
  }
  
  next(){
    let drawpad=d3.select("#drawpad");
    let drawpadMin1=d3.select("#drawpadMin1");
    let drawpadMin2=d3.select("#drawpadMin2");
    
    if (drawpadMin1.select("path")[0][0]!= undefined){
    drawpadMin2.selectAll("path").remove();
    drawpadMin2
      .append("path")
        .attr("d", function(){return drawpadMin1.select("path").attr("d");})
        .attr("style", function(){return drawpadMin1.select("path").attr("style");});
    }
    drawpadMin1.selectAll("path").remove();
    drawpadMin1
      .append("path")
        .attr("d", function(){return drawpad.select("path").attr("d");})
        .attr("style", function(){return drawpad.select("path").attr("style");});
    drawpad.selectAll("path").remove();
  }

  render() {
    return <div id="nextFrame"><button onClick={this.next}>Next</button></div>;
  } 
  
}


export default ControlsView