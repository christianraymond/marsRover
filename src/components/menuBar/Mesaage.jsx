import React, { Component } from "react";
import Button from "./Button";

class Mesaage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <div className="app-infos">
        <Button
          name={this.state.isOpen ? "Hide to continue" : "View Description"}
          toggle={this.toggle}
        />
        {this.state.isOpen && (
          <div className="app-infos__description">
            <div className="app-info__col">
              <h2>MARS ROVERS</h2>&nbsp;
              <p>A squad of robotic rovers are to be landed by NASA on a plateau on Mars</p>
              <p>This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a complete view of the surrounding terrain to send back to Earth.</p> <br/>
              <p>A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be <span> 0, 0, N,</span> which means the rover is in the bottom left corner and facing North.</p>&nbsp;
              <p>In order to control a rover, NASA sends a simple string of letters. The possible letters are <span>'L', 'R' and 'M'. 'L'</span> and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot.</p>&nbsp;
              <p>'M' means move forward one grid point, and maintain the same heading.</p>
              <p>Assume that the square directly North from (x, y) is (x, y+1).</p>&nbsp;
              <p>Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.</p>&nbsp;
              <h2>INPUT</h2>&nbsp;
              <p>5 5</p>
              <p>1 2 N</p>
              <p>LMLMLMLMM</p>
              <p>3 3 E</p>
              <p>MMRMMRMRRM</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Mesaage;
