import React, { Component } from "react";
import Mars from "./mars";
import Menu from "./menuBar/menu";
import Message from "./menuBar/Mesaage";

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

  runSample = (e) => {
    this.setState({
      commands: e.target.value,
    });
  };

  execute = () => {
    let startPosition = this.startInput.value;
    if (/^[0-4][0-4][NEWS]$/.test(startPosition)) {
      this.setState({
        execute: true,
        commandsToExecute: this.state.commands,
        startPosition,
      });
    } else {
      alert("Invalid start position.");
    }
  };

  clear = () => {
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
        <Menu />
        <div className="app">
          <div className="app__container">
            <div className={`control-panel`}>
              <div className={"start-position"}>
                <label htmlFor="startPosition">Rover Starting Position:</label>
                {/*which means the rover is in the bottom left corner and facing North. */}
                <input
                  type="text"
                  id="startPosition"
                  maxLength={3}
                  required
                  pattern={"^[0-4][0-4][NEWS]$"}
                  defaultValue={"00N"}
                  onBlur={this.validateStartPosition}
                  ref={(elm) => {
                    this.startInput = elm;
                  }}
                />
              </div>
              <div className="commands">
                <button value="M" onClick={this.addCommand}>
                  Move
                </button>
                <button value="L" onClick={this.addCommand}>
                  Left
                </button>
                <button value="R" onClick={this.addCommand}>
                  Right
                </button>
              </div>
              <div className="execution">
                <button onClick={this.clear} className="secondary">
                  ✖
                </button>
                <input type="text" readOnly value={this.state.commands} />
                <button className={"cta"} onClick={this.execute}>
                  Execute
                </button>
              </div>
              <div className="samples">
                <label>Inputs: </label>
                <ul>
                  <li>
                    <button value={"MMRMMLMMRM"} onClick={this.runSample}>
                      MMRMMLMMRM
                    </button>
                  </li>
                  <li>
                    <button value={"RMMMLMRMLM"} onClick={this.runSample}>
                      RMMMLMRMLM
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <Mars
              size={5}
              position={position}
              commands={this.state.commandsToExecute}
              execute={this.state.execute}
              onDone={this.stopExecute}
            />
          </div>
        </div>
        <div className="app__description">
          <Message />
        </div>
      </div>
    );
  }
}

export default commmands;
