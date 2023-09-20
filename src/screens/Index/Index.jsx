import React from "react";
import { Encabezado } from "../../components/Encabezado";
import { EntradaDe } from "../../components/EntradaDe";
import { TarjetaDeResultado } from "../../components/TarjetaDeResultado";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-2">
        <TarjetaDeResultado className="tarjeta-de-resultado-instance" />
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <Encabezado className="encabezado-instance" />
            <div className="property-default-wrapper">
              <EntradaDe className="property-default" property1="default" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
