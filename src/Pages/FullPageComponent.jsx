import LeadersGrowPage from "./LeadersGrowPage";
import LonelyPage from "./LonelyPage";
import OpportunityPage from "./OpportunityPage";
import QualityRelationsPage from "./QualityRelationsPage";
import ReimagineNetworkPage from "./ReimagineNetworkPage";

import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css'; 

const FullPageComponent=()=>{
  useEffect(() => {
    new fullpage('#fullpage', {
      //  Configuration options for fullPage.js
      //  For example:
      licenseKey: 'YOUR_KEY_HERE',
      sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
    });
  }, []);

  return(
    <div className="FullPageComponent">
     <div id="fullpage">
       {/* Add your sections and content here */}
       <div className="section"><ReimagineNetworkPage /></div>
       {/* <Link to=""></Link>  */}
       <div className="section"><LeadersGrowPage /></div>
       <div className="section"><QualityRelationsPage /></div>
       <div className="section"><LonelyPage/></div>
       <div className="section"><OpportunityPage/></div>
       {/* <div className="section"><h2>A</h2></div>
       <div className="section"><h2>B</h2></div>
       <div className="section"><h2>C</h2></div> */}

     </div>
      {/* <ReimagineNetworkPage/>
      <LeadersGrowPage/>
      <QualityRelationsPage/>
      <LonelyPage/>
      <OpportunityPage/> */}
    </div>
  )
}

export default FullPageComponent;









//  const FullPageComponent = () => {
  //  useEffect(() => {
  //    new fullpage('#fullpage', {
  //       Configuration options for fullPage.js
  //       For example:
  //       sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
  //    });
  //  }, []);
   

//    return (
//      <div id="fullpage">
//        {/* Add your sections and content here */}
//        <div className="section">
//            <ReimagineNetworkPage />
//          </div>
//          <div className="section">
//            <LeadersGrowPage />
//          </div>
//          <div className="section">
//            <QualityRelationsPage />
//          </div>
//          <div className="section">
//            <LonelyPage />
//          </div>
//          <div className="section">
//            <OpportunityPage />
//          </div>
//      </div>
//    );
//  };

//  const FullPageComponent = () => {
//    useEffect(() => {
//      new fullpage('#fullpage', {
//         Configuration options for fullPage.js
//         For example:
//         sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
//      });
//    }, []);

//    return (
//      <div id="fullpage">
//        Add your sections and content here
//        <div className="section"><ReimagineNetworkPage /></div>
//        <div className="section"><LonelyPage /></div>
//        <div className="section"> <QualityRelationsPage /></div>
//        <div className="section"></div>
//        <div className="section"></div>
//        <div className="section"></div>
//      </div>
//    );
//  };

//  export default FullPageComponent;
