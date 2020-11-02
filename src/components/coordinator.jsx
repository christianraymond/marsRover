import React from "react";
import Rover from "./rover";

//Summary
//Manupulation of rover position

const MOVE_VECTOR = {
  S: [0, -1],
  W: [-1, 0],
  N: [0, 1],
  E: [1, 0],
};

const LEFT_TURNS_MAP = {
  N: "W",
  W: "S",
  S: "E",
  E: "N",
};

const RIGHT_TURNS_MAP = {
  N: "E",
  E: "S",
  S: "W",
  W: "N",
};

class Coordinator extends React.Component {
  initialState = {
    start: null,
    end: null,
    ops: [],
    position: "0-0",
    facingPosition: "N",
    path: null,
    error: null,
  };

  state = Object.assign({}, this.initialState);

  componentDidMount() {
    this.reset(() => {
      this.process(this.props);
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    //Rename 'componentWillReceiveProps' to UNSAFE_componentWillReceiveProps to suppress "Warning: componentWillReceiveProps has been renamed"
    this.reset(() => {
      this.process(nextProps);
    });
  }

  reset = (cb) => {
    this.setState(this.initialState, cb);
  };

  process = (props) => {
    const { commands, position } = props;
    if (commands === "") {
      this.setState(this.initialState);
    } else {
      const parts = position.split(" ");
      this.setState(
        {
          start: parts[0] + "-" + parts[1],
          position: parts[0] + "-" + parts[1],
          facingPosition: parts[2],
        },
        () => {
          if (props.execute) {
            this.execute(commands);
          }
        }
      );
    }
  };

  execute = (commands) => {
    let ops = (commands || "").split("");
    this.setState({ ops }, () => {
      setTimeout(this.run.bind(this), 500);
    });
  };

  /// <summary>
  /// Rover move orientation
  /// //In order to control a rover, NASA sends a simple string of letters.
  /// The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively
  /// </summary>

  run = () => {
    let ops = this.state.ops.slice();
    let { position, path, facingPosition } = this.state;
    path = path || {};
    path[position] = facingPosition;
    let op = ops.shift();
    let newPosition = {};
    if (op === "L") {
      newPosition = this.spinRover(); //Leter 'L' makes the rover spin 90 degrees right or left
    } else if (op === "R") {
      newPosition = this.spinRover90Degree(); //Leter 'R' makes the rover spin 90 degrees right or left
    } else if (op === "M") {
      newPosition = this.moveRoverForward();
    } else {
      console.log("Invalid command");
    }
    if (newPosition.error) {
      alert("Cannot move outside of Mars");
    }
    this.setState(
      Object.assign(this.state, {
        ops,
        path,
        ...newPosition,
      }),
      () => {
        if (this.state.ops.length > 0 && !this.state.error) {
          setTimeout(this.run.bind(this), 300);
        } else {
          this.setState({
            end: this.state.position,
          });
        }
      }
    );
  };

  moveRoverForward = () => {
    const { size } = this.props;
    const { position, facingPosition } = this.state;
    const moveVector = MOVE_VECTOR[facingPosition];
    const pos = position.split("-").map(Number);
    const x = pos[0] + moveVector[0];
    const y = pos[1] + moveVector[1];
    if (x < 0 || x >= size || y < 0 || y >= size) {
      return { error: true };
    }
    return {
      position: x + "-" + y,
    };
  };

  spinRover = () => {
    const { facingPosition } = this.state;
    return {
      facingPosition: LEFT_TURNS_MAP[facingPosition],
    };
  };

  spinRover90Degree = () => {
    const { facingPosition } = this.state;
    return {
      facingPosition: RIGHT_TURNS_MAP[facingPosition],
    };
  };

  render() {
    const { size } = this.props;
    let { position, facingPosition, path } = this.state;
    path = path || {};
    let cells = [];
    for (let i = size - 1; i >= 0; i--) {
      for (let j = 0; j < size; j++) {
        cells.push(j + "-" + i);
      }
    }
    return (
      <ul className="mars">
        {cells.map((cell) => {
          let roverElm = null;
          let roverPath = null;
          let cellStatus = "";

          if (this.state.error && this.state.end === cell) {
            cellStatus = "error";
          }
          if (this.state.start === cell) {
            cellStatus += " start";
          }
          if (this.state.end === cell) {
            cellStatus += " end";
          }

          if (position === cell) {
            roverElm = <Rover facingPosition={facingPosition} />;
          } else {
            roverPath = path[cell] ? (
              <Rover facingPosition={path[cell]} ghost={true} />
            ) : null;
          }

          return (
            <li
              className={`cell ${!!path[cell] ? "path" : ""} ${cellStatus}`}
              key={cell}
            >
              <label>{cell}</label>
              {roverElm || roverPath}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Coordinator;
