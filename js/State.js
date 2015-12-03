'use strict';

/* 
 * Keeps global state properties like frames, current strokeColor etc.
 */

let singleton = Symbol();
let singletonEnforcer = Symbol();

class State {

  constructor(enforcer, props) {
    if(enforcer != singletonEnforcer) throw "Cannot construct singleton";
    this.props=props;
  }

  static get instance() {
    if(!this[singleton]) {
      this[singleton] = new State(singletonEnforcer);
    }
    return this[singleton];
  }
}

export default State