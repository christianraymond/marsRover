const MarsRover = require("../components/mars-rover");

test('rover should turns left', () => {
    var rover = new MarsRover("rover1", 1, 1, "N")
    rover.turn("L");
    expect(rover.facing).toEqual("W");
});

test('rover should turns right', () => {
    var rover = new MarsRover("rover1", 1, 1, "S")
    rover.turn("R");
    expect(rover.facing).toEqual("W");
});

test('rover should turns left four times', () => {
    var rover = new MarsRover("rover1", 1, 1, "N")
    rover.turn("LLLL");
    expect(rover.facing).toEqual("N");
});

test('rover should turns right four times', () => {
    var rover = new MarsRover("rover1", 1, 1, "N")
    rover.turn("RRRR");
    expect(rover.facing).toEqual("N");
});

test('rover should moves forward', () => {
    var rover = new MarsRover("rover1", 1, 2, "N")
    rover.moveForward("M");
    expect(rover.position).toEqual([1, 3]);
});

test('test mission runs according to the given commands and rover faces the correct direction', () => {
    var rover = new MarsRover("rover1", 1, 2, "N")
    rover.setPath("LMLMLMLMM");
    rover.runMission();
    expect(rover.facing).toEqual("N");
});

test('test mission runs according to the given commands and rover moves correctly forward', () => {
    var rover = new MarsRover("rover1", 1, 2, "N")
    rover.setPath("LMLMLMLMM");
    rover.runMission();
    expect(rover.position).toEqual([1, 3]);
});
