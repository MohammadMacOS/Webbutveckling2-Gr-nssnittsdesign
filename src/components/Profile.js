import React, { useEffect, useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [consumption, setConsumption] = useState(0);
  const [distance, setDistance] = useState(0);
  const [fuelCost, setFuelCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleConsumptionChange = (event) => {
    setConsumption(event.target.value);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleFuelCostChange = (event) => {
    setFuelCost(event.target.value);
  };

  function ClearAll() {
    setConsumption(0);
    setDistance(0);
    setFuelCost(0);
    setTotalCost(0);
  }

  let totalCostForAll = (
    (distance / 100) *
    100 *
    consumption *
    fuelCost
  ).toFixed(2);

  function NewMessage() {
    if (totalCostForAll >= 1000) {
      return "Har du funderat på flyg?";
    } else if (totalCostForAll >= 400) {
      return "Har du funderat på att åka tåg?";
    } else if (totalCostForAll >= 1) {
      return "Resonabel resa";
    } else {
      return "";
    }
  }

  return (
    <div className="Profile-today">
      <h3>
        Här kan du kalkylator bränsleförbrukning , sträckan och bensinpriset
      </h3>
      <br />
      <br />
      <h3 data-testid="header">Förbrukning(L/MIL)</h3>
      <input
        data-testid="input"
        type="number"
        step=".01"
        className="input-field"
        onChange={handleConsumptionChange}
      />

      <br />
      <div className="grid-numer-2">
        <h3>Sträckan(MIL)</h3>
        <input
          data-testid="input"
          type="number"
          step=".1"
          className="input-field"
          onChange={
            ((event) => {
              setDistance(event.target.value);
            },
            handleDistanceChange)
          }
        />
      </div>
      <h3>Bensinpriset (KR/L)</h3>
      <input
        data-testid="input"
        type="number"
        step=".01"
        className="input-field"
        onChange={handleFuelCostChange}
      />
      <br />
      <br />
      <br />
      <button
        className="Button5"
        onClick={() => {
          ClearAll(0);
        }}
      >
        Rensa allt
      </button>
      <br />
      <br />
      <h2 className="fl mr-30-l">
        TotalKostnaden{" "}
        <span>
          <u>{totalCostForAll}</u>
        </span>
      </h2>
      <br />
      <br />
      <h2>
        <strong className="fl mr-5">{NewMessage()}</strong>
      </h2>
    </div>
  );
}
