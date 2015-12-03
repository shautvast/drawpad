/*
 * The main app component
 */

import React from 'react';
import DrawpadView from './DrawpadView';
import ColorPickerView from './ColorPickerView';
import ControlsView from './ControlsView';
import State from './State';

var state=State.instance;
state.frames=[];

React.render(<div><DrawpadView/><ColorPickerView/><ControlsView/></div>, document.getElementById('app'));
