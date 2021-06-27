import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [consumption, setConsumption] = useState('');
  const [distance, setDistance] = useState('');
  const [fuelCost, setFuelCost] = useState('');
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
  
 
let totalCostForAll  = (distance / 100 * consumption * fuelCost).toFixed(2);

function NewMessage() {
  if  (totalCostForAll  >= 1000) {
      return 'Har du funderat på flyg?'
  } else if (totalCostForAll  >= 400) {
      return 'Har du funderat på att åka tåg?'
  } else if (totalCostForAll  >= 50) {
      return 'Resonabel resa'
  } else {
      return ''
  }
};

  return ( 
    <div className="Profile-today">
      
      <h2 className='fl  mr30-l cl-b'>Destination till.ex Göteborg till Stockholm</h2>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <input type='text' placeholder='från'/>
      <br/>
      <br/>
      <br/>
      <input type='text' placeholder='till'/>

      <h3>Förbrukning(L/KM)</h3>
      <input type="number" step=".01" className="input-field" onChange={handleConsumptionChange} />
      <button className="Button5" onClick={() => {setConsumption(0);}}>Rensa</button>
      <br />
      <div className="grid-numer-2">
        <h3>Sträckan(KM)</h3>
        <input type="number" step=".1" className="input-field" onChange={ handleDistanceChange }/>
        <button className="Button5" onClick={() => {setDistance(0);}}>Rensa</button>
      </div>
      <h3>Bensinpriset (KR/L)</h3>
      <input type="number" step=".01" className="input-field" onChange={ handleFuelCostChange }/>
      <button className="Button5" onClick={() => {setFuelCost(0);}}>Rensa</button>
      <h3>TotalKostnaden</h3>
      <input type="number" className="input-field" value={ totalCost }/>
      <button className="Button5" onClick={ ClearAll }>
        Rensa allt</button>
        <br/>
        <br/>
        <h2 className='fl mr-30'>TotalKostnaden <span>
          <u>{ totalCostForAll  }</u></span></h2>
        <br/>
        <br/>
        <h2><strong className='fl mr-30'>{ NewMessage() }</strong></h2>
      
    </div>


  );

  }



  //function CalculateTotalCost() {
    //setTotalCost(consumption * distance * fuelCost );
  //}

  //useEffect(() => {
    //CalculateTotalCost();
  //}, [consumption, distance, fuelCost]);

  //function HandleConsumptionChange(event) {
    //setConsumption(event.target.value);
  //}

