import React, { useState } from "react";
import "./Navbar.css";
import logo_image from "../shared/images/logo_image.png";
import Profile from "./Profile";


export default function Navbar() {
  return (
    <main>
      <div className="fl w-100 w-100-l">
        <img src={logo_image} alt="logo-image" className="Logo" />
      </div>
      <div className="fl w-100 w-80l">
        <button className="fl w-40 w-80l" onClick=''>Mercedes</button>
        <button className="fl w-30 w-80l" onClick=''>Nissan</button>
        <button className="fl w-30 w-80l" onClick=''>Volvo</button>
        
      </div>
    </main>
  );
}

<Profile/>






/*
1. Parent -child som uppdaterar bränsleförbrukning input
2. Dataobjekt med distanser
4. Conditional rendering


*/


//6. Mobil läge (klart)
//3. Knappar för 3 distanser som uppdaterar distans input (Klart)
//5. Tester(Klart)