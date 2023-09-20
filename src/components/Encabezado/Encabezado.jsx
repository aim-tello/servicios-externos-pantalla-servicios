/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Encabezado = ({ className }) => {
  return (
    <div className={`encabezado ${className}`}>
      <div className="frame">
        <div className="text-wrapper-2">Nombre de Servicio</div>
      </div>
      <div className="frame">
        <div className="text-wrapper-3">Nombre de usuario</div>
      </div>
      <div className="div-wrapper">
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
      </div>
    </div>
  );
};
