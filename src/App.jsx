import React from "react";
import RectangleBox from "./rectangle-box/rectangle-box-component";
import Mycomponent from "./Galance/galance-component";
import ContactSection from "./Contact/ContactSection";
import OurPromisesComponent from "./our-promises/our-promises";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
//import College from "./college/college-component.jsx";
//import NotFound from "./NotFound";
import FetchApiComponent from "./fetch-api/fetch-api-component";
import UseEffectPracticeTwo from "./use-effect-practice/use-effect-component-2";
import { Routes, Route } from "react-router-dom";
import UseEffectPracticeThree from "./use-effect-practice/use-effect-component-3";
import UseEffectComponent from "./use-effect-practice/use-effect-component";
import SignupFormComponent from "./signup-form-api/signup-form-component";
import UserFetchViaEmail from "./user-fetch-via-email/user-fetch-via-email";
import AdditionOperationComponent from "./addition-operation-in-state/addition-operation-component.jsx";
import UsestateComponent from "./usestate-1st/use-state-component.jsx";


function App() {
  return (
    <Routes>
      {/* Main sections */}
      <Route path="/" element={<RectangleBox />} />
      <Route path="/galance" element={<Mycomponent />} />
      <Route path="/trusted-by" element={<TrustedbyComponent />} />
      <Route path="/our-promises" element={<OurPromisesComponent />} />
      <Route path="/contact" element={<ContactSection />} />
      {/* <Route path="/college" element={<College />} /> */}

      {/* Practice pages */}
      <Route path="/api-fetch" element={<FetchApiComponent />} />
      <Route path="/use-effect-practice-2" element={<UseEffectPracticeTwo />} />
      <Route
        path="/use-effect-practice-3"
        element={<UseEffectPracticeThree />}
      />
      {/* 404 Page */}
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/use-effect-practice-1" element={<UseEffectComponent />} />
      <Route path="/signup-form" element={<SignupFormComponent />} />
      <Route path="/user-fetch-path" element={<UserFetchViaEmail />} />
      <Route path="/addition-operation-in-state"element={<AdditionOperationComponent />}/>
      <Route path="/use-state-1" element={<UsestateComponent />} />
    </Routes>
  );
}

export default App;
