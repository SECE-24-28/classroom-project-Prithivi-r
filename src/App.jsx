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
import { Routes, Route } from "react-router-dom";
import FetchApiComponent from "./fetch-api/fetch-api-component";
import UseEffectComponent from "./use-effect-practice/use-effect-component";
import UseEffectComponent2 from "./use-effect-practice/use-effect-component-2";
import UseEffectComponent3 from "./use-effect-practice/use-effect-component-3";

function App() {
  return (
    <Routes>
      <Route path="/api-fetch" element={<FetchApiComponent />} />
      <Route path="/use-effect-practice" element={<UseEffectComponent />} />
      <Route path="/use-effect-practice-2" element={<UseEffectComponent2 />} />
      <Route path="/use-effect-practice-3" element={<UseEffectComponent3 />} />
    </Routes>
  );
}

export default App;