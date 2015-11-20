require('../less/main.less');

'use strict';

import React from "react";
import Drawpad from './Drawpad';

let drawpad=new Drawpad();

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
    return <svg width="700" height="700" id ="drawpad" onMouseDown={this.startDrawing} onMouseMove={this.draw} onMouseUp={this.stopDrawing}></svg>;
  } 
  
}


export default DrawpadView