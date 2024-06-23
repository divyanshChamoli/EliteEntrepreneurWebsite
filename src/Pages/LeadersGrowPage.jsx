import React from "react";
import "./LeadersGrowPage.css";
import { Link } from "react-router-dom";

const LeadersGrowPage=()=> {
  return (
    <div className="LeadersGrowPage">
      {/* <Link name="FullPageComponent#LeadersGrow"></Link> */}
      <div className="leftSide LeadersGrowPage-item">
        <img
          src="https://eec.world/assets/images/leaders-img.jpg"
          alt="leaders"
        />
      </div>
      {/* <div className="mainContent"> */}
      <div className="rightSide LeadersGrowPage-item">
        <div className="leadersGrowHeading">
          <h2>here leaders grow together</h2>
        </div>
        <div className="leadersGrowContent">
          <p>
            <span>Our mission</span> is to provide a platform for elite
            entrepreneurs to connect, learn, and grow together.
          </p>
          <p>
            We believe that by fostering a community of like-minded individuals
            who are dedicated to excellence, we can create a more dynamic and
            impactful business landscape. We are committed to providing our
            members with the resources and support they need to succeed,
            including networking opportunities, mentorship and learnings.
          </p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default LeadersGrowPage;
