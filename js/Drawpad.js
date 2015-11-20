'use strict';

import Point from "./Point";
import simplify from "simplify-js";
import d3 from "d3";

class Drawpad{
	 constructor() {
     this.drawing = false;
     this.path = null;
     this.pathD = "";
     this.points = [];
  }
  
  startDrawing(event, parent){
    this.drawing=true;
    let newPoint=this.getPoint(event);
    
    //add starting point to svg-path
    this.pathD="M"+newPoint.x+","+newPoint.y;//path Move operation
    this.path=d3.select("#drawpad").append("path").attr("d", this.pathD);
    
    //add new point to array of points, used to reduce the number of points after finishing the line
    this.points=[];
    this.points.push(newPoint);
  }
  
  draw(event){
    if (this.drawing) {
      let newPoint=this.getPoint(event);
      
      this.pathD+=" L"+newPoint.x+","+newPoint.y; //path LineTo operation
      this.path.attr("d", this.pathD);
      
      this.points.push(newPoint);
    }
  }
  
  stopDrawing(event){
    this.drawing=false;
    //reduce the number of points in the polygon (simplify lib) and update the view
    this.updatePath(simplify(this.points, 1));
  }
  
  getPoint(event){
    return new Point(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  }
  
  updatePath(points){
    this.pathD = "M" + points[0].x + "," + points[0].y;
    
    points.forEach(function(point) {
      this.pathD += " L" + point.x + "," + point.y;
    }, this);
    
    this.path.attr("d", this.pathD);//update d attribute in path 
  }
}

export default Drawpad