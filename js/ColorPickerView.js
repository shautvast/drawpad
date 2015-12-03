'use strict';

import React from "react";
import ColorPicker from 'react-color-picker';
import Drawpad from './Drawpad'
import State from './State';

let state=State.instance;
state.strokeColor="#000000";
let COLOR=null;

class ColorPickerView extends React.Component{
    constructor(props) {
        super(props);
    }
   
    onDrag(color, c){
        COLOR = color;
        state.strokeColor=color;
    }
 
    render(){
        return <div id="colorpicker"><ColorPicker value={COLOR} onDrag={this.onDrag} />
                <div style={{background: COLOR, width: 100, height: 50, color: 'white'}}>
                    {COLOR}
                </div>
            </div>;
    }
}

export default ColorPickerView