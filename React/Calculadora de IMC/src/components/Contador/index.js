import React, { useState } from "react";
import "./style.css";

function CalcularIMC() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [imc, setImc] = useState();

  function calcular() {
    setImc(parseFloat(weight / (height * height)));
  }

  return (
    <div className="IMC">
      <h2 className="subtitle">Descubra o seu IMC:</h2>

      <div className="input-form">
        <input
          id="input"
          className="input-control"
          type="text"
          placeholder="Digite o seu peso"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-form">
        <input
          id="input"
          className="input-control"
          type="text"
          placeholder="Digite a sua altura"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <button className="button" onClick={calcular}>
        Calcular
      </button>

      <div className="result">
        <p>{imc}</p>
      </div>
    </div>
  );
}

export default CalcularIMC;
