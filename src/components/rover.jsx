import React from "react";
import { FaMarsStrokeV } from 'react-icons/fa';
// import { GiMarsCuriosity } from 'react-icons/gi'

class Rover extends React.Component {
  render() {
    const { facing, ghost } = this.props;
    return (
      <span className={`rover ${facing} ${ghost ? "ghost" : ""} `}><FaMarsStrokeV/></span>
    );
  }
}

export default Rover;
