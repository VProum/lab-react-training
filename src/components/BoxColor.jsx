import React from 'react'

const BoxColor = (props) => {
    const divStyle = {
        background: '#'+fullColorHex(props.r, props.g, props.b)
      };

    return (
        <div className="boxcolor" style={divStyle}>
            {`rgb(${props.r},${props.g},${props.b})`} <br/>
            {"#"+fullColorHex(props.r, props.g, props.b)}
        </div>
    )
}



 function rgbToHex(rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

function fullColorHex(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
  };

export default BoxColor
