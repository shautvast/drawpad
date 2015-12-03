require('../less/main.less');
require('../less/index.less');

'use strict';


import React from "react";
import Drawpad from './Drawpad';

let drawpad=new Drawpad();

/**
 * All methods delegate to the Drawpad class.
 */
class DrawpadView extends React.Component{

  constructor(props) {
    super(props);
  }
  
  startDrawing(event){
   drawpad.startDrawing(event);
  }
  
  draw(event){
   drawpad.draw(event);
  }
  
  stopDrawing(event){
    drawpad.stopDrawing(event);
  }
  
 
  render() {
    return <div id="drawpadContainer">
      <svg id ="drawpadMin2"></svg>
      <svg id ="drawpadMin1"></svg>
      <svg id ="drawpad" onMouseDown={this.startDrawing} onMouseMove={this.draw} onMouseUp={this.stopDrawing}></svg></div>;
  } 
  
}


export default DrawpadView