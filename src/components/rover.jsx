import React from "react";
import { FaMarsStrokeV } from 'react-icons/fa';
// import { GiMarsCuriosity } from 'react-icons/gi'

class Rover extends React.Component {
  render() {
    const { facingPosition, ghost } = this.props;
    return (
      <span className={`rover ${facingPosition} ${ghost ? "ghost" : ""} `}><FaMarsStrokeV/></span>
    );
  }
}

export default Rover; 
