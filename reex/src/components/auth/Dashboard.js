import pic from "./undraw_under_construction_46pa.svg";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="row row-space">
        <div className="col-2">
          <div className="landingText">
            <p className="landingh12">
              {" "}
              Sorry, We are down for development...{" "}
            </p>
          </div>
        </div>
        <div className="col-2">
          <img src={pic} alt="landingPic" className="landingPic"></img>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
