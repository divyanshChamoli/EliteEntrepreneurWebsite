import React from "react";
// import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import HomePage from "./Pages/HomePage.jsx";
// import LeadersGrowPage from "./Pages/LeadersGrowPage.jsx";
// import QualityRelationsPage from "./Pages/QualityRelationsPage.jsx";
// import LonelyPage from "./Pages/LonelyPage.jsx";
// import ReimagineNetworkPage from "./Pages/ReimagineNetworkPage.jsx";
// import OpportunityPage from "./Pages/OpportunityPage.jsx";
// import Form from "./Components/Form.jsx";
import { Route, Routes } from "react-router-dom";
// import CombinedPage from "./Pages/FullPageComponent.jsx";
// import Fullpage from "fullpage.js";
import FullPageComponent from "./Pages/FullPageComponent.jsx";
// import { useState } from "react";


function App(props) {
  
  return (
    <div className="App">
      {/* <HomePage/> */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="FullPageComponent" element={<FullPageComponent/>} />
        {/* <Route path="FullPageComponent/LeadersGrow" element={<LeadersGrowPage/>} /> */}
        {/* <Route path="LonelyPage" element={<LonelyPage/>} /> */}
      </Routes> 
    </div>
  );
}

export default App;


      {/* <div className="CombinedPage">
        <div>
          <div className="section">
            <ReimagineNetworkPage />
          </div>
          <div className="section">
            <LeadersGrowPage />
          </div>
          <div className="section">
            <QualityRelationsPage />
          </div>
          <div className="section">
            <LonelyPage />
          </div>
          <div className="section">
            <OpportunityPage />
          </div>
        </div> */}
    // </div>

// import React from "react";
// import ReactFullpage from "@fullpage/react-fullpage";
// import './index.css';

// const anchors = ["firstPage", "secondPage", "thirdPage"];

// const App = () => (
//   <ReactFullpage
//     anchors={anchors}
//     navigation
//     navigationTooltips={anchors}
//     navigat
//     sectionsColor={["#7fff00","#00ffff","#29ab87" ]}
//     onLeave={(origin, destination, direction) => {
//       console.log("onLeave event", { origin, destination, direction });
//     }}
//     render={({ state, fullpageApi }) => {
//       console.log("render prop change", state, fullpageApi);

//       return (
//         <div>
//           <div className="section"><h3>Section 1</h3></div>
//           <div className="section"><h3>Section 2</h3></div>
//           <div className="section"><h3>Section 3</h3></div>
//         </div>
//       );
//     }}
//   />
// );
// export default App;
