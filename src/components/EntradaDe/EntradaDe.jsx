/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const EntradaDe = ({ property1, className }) => {
  return (
    <div className={`entrada-de ${className}`}>
      <div className="text-wrapper-4">Identificadores de ciudadanos</div>
      <div className="element-wrapper">
        <input className="element" />
      </div>
      <div className="frame-2">
        <p className="text-wrapper-5">Introduzca los identificadores de ciudadanos separados por comas</p>
        <div className="frame-3">
          <div className="text-wrapper-6">ENVIAR</div>
        </div>
      </div>
    </div>
  );
};

EntradaDe.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
