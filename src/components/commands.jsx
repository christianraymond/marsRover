import React, { Component } from "react";
import Coordinator from "./coordinator";
import NasaLogo from "./images/nasa.jpg";
import { FaHandPointDown } from "react-icons/fa";

class commmands extends Component {
  state = {
    commands: "",
    commandsToExecute: "",
    execute: false,
    startPosition: "00N", //An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
  };

  addCommand = (e) => {
    this.setState({
      commands: this.state.commands + e.target.value,
    });
  };

  runInputValue = (e) => {
    this.setState({
      commands: e.target.value,
    });
  };

  execute = () => {
    let startPosition = this.startInput.value;
    if (/^[0-4][0-4][NEWS]$/.test(startPosition)) { //Using Reg Expression to avoid any sort of input(command) to be given to the Rover
      this.setState({
        execute: true,
        commandsToExecute: this.state.commands,
        startPosition,
      });
    } else {
      alert("Invalid start position.");
    }
  };

  clear = () => { //Set state to initial state
    this.setState({
      commands: "",
      execute: false,
      commandsToExecute: "",
    });
  };

  validateStartPosition = (e) => {
    e.target.checkValidity();
  };

  stopExecute = () => {
    this.setState({
      execute: false,
    });
  };

  render() {
    let position = this.state.startPosition || "00N";
    position = position.split("").join(" ");
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1">
            <img src={NasaLogo} />
          </div>
          <div className="col">
            <h2>
              Rover Navigator <FaHandPointDown />
            </h2>
            <div className='control-panel'>
              <div className="start-position">
                <label htmlFor="startPosition">Rover starting position:</label>
                <input
                  type="text"
                  id="startPosition"
                  maxLength={3}
                  required
                  pattern={"^[0-4][0-4][NEWS]$"}
                  defaultValue={"00N"} //This means the rover is at the bottom left facing North
                  onBlur={this.validateStartPosition}
                  ref={(elm) => {
                    this.startInput = elm;
                  }}
                />
              </div>
              <div className="commands">
                <button value="M" onClick={this.addCommand}>
                  M
                </button>
                <button value="L" onClick={this.addCommand}>
                  L
                </button>
                <button value="R" onClick={this.addCommand}>
                  R
                </button>
              </div>
              <div className="execution">
                <button onClick={this.clear} className="secondary">
                  Clear
                </button>
                <input type="text" readOnly value={this.state.commands} />
                <button className={"cta"} onClick={this.execute}>
                  Submit
                </button>
              </div>
              <div className="samples">
              <label  htmlFor="startPosition">Inputs:</label>
                <ul>
                  <li>
                    <button value={"RMMMLMRMLM"} onClick={this.runInputValue}>
                    RMMMLMRMLM 
                    </button>
                  </li>
                  <li>
                    <button value={"MMRMMLMMRM"} onClick={this.runInputValue}>
                      MMRMMLMMRM
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mars-content">
              <h2>
                Mars Plateau <FaHandPointDown />
              </h2>
              <Coordinator
                size={5}
                position={position}
                commands={this.state.commandsToExecute}
                execute={this.state.execute}
                onDone={this.stopExecute}
              />
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default commmands;
