module.exports = class MarsRover {
  constructor(name, positionX, positionY, facing) {
    this.name = name;
    this.directions = ["N", "E", "S", "W"];
    this.path = null;
    this.position = [positionX, positionY];
    this.facing = facing;
  }

  setPath(commands) {
    this.path = commands;
  }

  runMission() {
    for (var i = 0; i < this.path.length; i++) {
      var command = this.path[i];
      if (command == "M") {
        this.moveForward(command);
      } else if (command == "L" || command == "R") {
        this.turn(command);
      }
    }
  }

  turn(command) {
    var cardinalIndex = this.directions.indexOf(this.facing);
    if (command == "L") {
      cardinalIndex = (cardinalIndex + 4 - 1) % 4;
    } else if (command == "R") {
      cardinalIndex = (cardinalIndex + 1) % 4;
    }
    this.facing = this.directions[cardinalIndex];
  }

  moveForward(command) {
    if (command == "M") {
      var coordinateX = this.position[0];
      var coordinateY = this.position[1];
      if (this.facing == "N") {
        coordinateY++;
      } else if (this.facing == "E") {
        coordinateX++;
      } else if (this.facing == "S") {
        coordinateY--;
      } else if (this.facing == "W") {
        coordinateX--;
      }
    } else {
      alert("Incorrect command");
    }
    var newPosition = [coordinateX, coordinateY];
    this.position = newPosition;
  }
};
