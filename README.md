# MARSROVER

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation.

An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.
Assume that the square directly North from (x, y) is (x, y+1).

## How to Run the App

The application is a React Web Application written in React JavaScript, HTML and CSS.

clone the directory at https://github.com/christianraymond/marsRover, <br/>
cd in marsRover, <br/>
run npm install <br/>

Once in the project directory, you can run:

 ```yarn start```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## How To run the Unit Test

- For Unit Test, I choose Jest which is a a JavaScript testing framework maintained by Facebook
  - Function from the class MarsRover App were used for testing, as an example of unit testing
  - Find the written tests in "marsrover.test.jsx" and "App.test.jsx"

 ```yarn test```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


## Design Explanation

I have programmed my solution following object oriented and functional programming structure. <br/>
I built the app to the best of my ability, I however believe that there are things to learn and to improve. <br/> Things I'd like to improve and learn include ```BEM CSS``` a popular naming convention for classes in HTML and CSS methodology, and maybe some ```clean code design principles...``` These I'm willing to learn and get good at them <br/>
Also, as developer, we learn eveyday, any feedback will help me improve my skills and this solution in the future.


The project consist of:

1 Code (under src/component you'll find)

- Commands component
- Coordinator component
- Rover component
- mars-rover Class

2 Unit Test (under src/spec you'll find)

 - App.test.jsx
 - marsrover.test.jsx

## Tool used

Language: JavaScript
Library: React.Js

IDE: Visual Studio

OS: Windows 10 Pro 64-bit


## Thanks

Thank you very much for your time and consideration, and have a terric day.

