/*import React from "react";
import { Galancestyle } from "./galance-style";

function Mycomponent(){
    return (
        <Galancestyle>
        <div className="B1">
           <div className="B11"><p>Colleges <br/>100+</p></div> 
          <div className="B12"><p>Students <br/>100000</p></div>  
           <div className="B13"> <p>Study Materials<br/>1000+</p></div>
 <div className="B14"><p>Professional Trainers<br></br> 150</p></div>  
      </div>
      </Galancestyle>
    );
}
export default Mycomponent;
*/
import React from "react";
import { GalanceStyle } from "./galance-style";
import college from "./icons/college.png";
import students from "./icons/students.png";
import materials from "./icons/materials.png";
import trainers from "./icons/trainers.png";

function Mycomponent() {
  return (
    <GalanceStyle>
      <h1 className="title">
        Impact at a <span>Glance</span>
      </h1>

      <div className="grid_box">

        <div className="card pink">
          <div>
            <h3>Colleges</h3>
            
            <h2>100+</h2>
          </div>
          <img src={college} alt="" />
        </div>

        <div className="card blue">
          <div>
            <h3>Students</h3>
            <h2>1,00,000</h2>
          </div>
          <img src={students} alt="" />
        </div>

        <div className="card green">
          <div>
            <h3>Study Materials</h3>
            <h2>1000+</h2>
          </div>
          <img src={materials} alt="" />
        </div>

        <div className="card yellow">
          <div>
            <h3>Professional Trainers</h3>
            <h2>150</h2>
          </div>
          <img src={trainers} alt="" />
        </div>

      </div>
    </GalanceStyle>
  );
}

export default Mycomponent;