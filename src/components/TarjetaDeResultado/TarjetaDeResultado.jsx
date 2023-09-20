/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const TarjetaDeResultado = ({ className }) => {
  return (
    <div className={`tarjeta-de-resultado ${className}`}>
      <div className="inner-container">
        <div className="swatch" />
        <div className="text-wrapper">Name</div>
        <div className="div">HEX : #9938e3</div>
        <p className="div">HSL : 274, 75.3, 55.5</p>
        <p className="div">RGB : 153, 227, 56</p>
      </div>
    </div>
  );
};
