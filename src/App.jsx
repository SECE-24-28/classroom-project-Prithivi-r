/*import "./App.css";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";

function App() {
  return (
    <div>
      {<HelloWorldComponent /> }
      {<FlexBoxComponent /> }
      <LeadersTomorrowComponent />
      
    </div>
  );
}


export default App;

*/

import React from "react";
import RectangleBox from "./rectangle-box/rectangle-box-component";
import Mycomponent from "./Galance/galance-component";
import ContactSection from "./Contact/ContactSection";
import OurPromisesComponent from "./our-promises/our-promises";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import { Routes } from "react-router-dom";
import UsestateformComponent from "./usestate-1st/use-state-component";
function App() {
  return (
    <>
      {/* <RectangleBox />
      <Mycomponent />
      <TrustedbyComponent />
      <OurPromisesComponent />
      <ContactSection /> */}
      {/* <div>
        <Routes>
          <Routes path="/eshwar" element={<HelloWorldComponent />} />
          <Routes path="/our-promises" element={<OurPromisesComponent />} />
        </Routes>
      </div> */}
      <div>
        <UsestateformComponent />
      </div>
    </>
  );
}

export default App;