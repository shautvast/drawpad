'use strict';

class Point{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	
	toString(){
		return "point["+ this.x +  "," + this.y +"]";
	}
}

export default Point