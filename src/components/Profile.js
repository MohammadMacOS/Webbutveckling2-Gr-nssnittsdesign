import React, { useEffect, useState } from "react";
import "./Profile.css";
;

export default function Profile() {
  const [consumption, setConsumption] = useState(1);
  const [distance, setDistance] = useState(1);
  const [fuelCost, setFuelCost] = useState(15.73);
  const [totalCost, setTotalCost] = useState(0);

  function ClearAll() {
    setConsumption(0);
    setDistance(0);
    setFuelCost(0);
    setTotalCost(0);
  }

  function CalculateTotalCost() {
    setTotalCost(consumption * distance * fuelCost );
  }

  useEffect(() => {
    CalculateTotalCost();
  }, [consumption, distance, fuelCost]);

  function HandleConsumptionChange(event) {
    setConsumption(event.target.value);
  }

  function DistanceBetweenGothenburgStockholm() {
    setTotalCost(consumption * distance )
  }

  return (
    <div className="Profile-today">
      <h3>Förbrukning(L/MIL)</h3>
      <button className="Button-0" onClick={() => {setConsumption(4.5); setDistance(52.955); setFuelCost(366.56)}} >Göteborg till Stockholm</button>
      <input type="number" step=".01" className="input-field" value={consumption} onChange={(event) => { HandleConsumptionChange(event); }} ></input>
      <button className="Button5" onClick={() => {setConsumption(0);}}>Rensa</button>
      <br />
      <div className="grid-numer-2">
        <h3>Sträckan(MIL)</h3>
        <button className="Button-0" onClick={() => {setDistance(34.800000000000004);}}>Karlskrona till Göteborg</button>
        <input
          type="number"
          step=".1"
          className="input-field"
          value={distance}
          onChange={(event) => {
            setDistance(event.target.value);
          }}
        ></input>
        <button
          className="Button5"
          onClick={() => {
            setDistance(0);
          }}
        >
          Rensa
        </button>
      </div>
      <h3>Bensinpriset (KR/L)</h3>
      <button className="Button-0" onClick={() => {setDistance(63.138000000000005);}}>Kalmar till Göteborg</button>
      <input
        type="number"
        step=".01"
        className="input-field"
        value={fuelCost}
        onChange={(event) => {
          setFuelCost(event.target.value);
        }}
      ></input>
      <button
        className="Button5"
        onClick={() => {
          setFuelCost(0);
        }}
      >
        Rensa
      </button>
      <h3>TotalKostnaden</h3>
      <button className="Button-0">TotalKostnaden</button>
      <input type="number" className="input-field" value={totalCost}></input>
      <button className="Button5" onClick={ClearAll}>
        Rensa allt</button>
      
    </div>
  );
}
