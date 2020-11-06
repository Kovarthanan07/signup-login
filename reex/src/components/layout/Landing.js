import React from "react";
import landingPic from "./undraw_printing_invoices_5r4r.svg";
const Landing = () => {
  return (
    <div>
      <div className="row row-space">
        <div className="col-2">
          <div className="landingText">
            <p className="landingh1"> Welcome to </p>
            <p className="landingh1"> Receipt & Expense Managment System</p>
            <p className="landingp"> Best place for managing the expenses </p>
          </div>
        </div>
        <div className="col-2">
          <img src={landingPic} alt="landingPic" className="landingPic"></img>
        </div>
      </div>
    </div>
  );
};

export default Landing;
