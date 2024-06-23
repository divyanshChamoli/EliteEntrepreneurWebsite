import './OpportunityPage.css'
import Button from '../Components/Button';
import Form from '../Components/Form';
import { useState } from 'react';

function OpportunityPage() {


  const [activeForm, setActiveForm]= useState(false);

    const handleClick=()=>{
      activeForm ? setActiveForm(false) : setActiveForm(true)
    }
  
    return (
      <div className="OpportunityPage">
        <div className="opportunityPageContent OpportunityPage-item">
          <h2 id="heading">A World Of Opportunities Awaits You!</h2>
          <p> <span>Membership in the Elite Entrepreneur's Club is exclusive and by invitation only.</span> We carefully curate our membership to ensure that each member brings a unique perspective and skill set to the group. This creates an environment where members can learn from each other, share ideas, and form lasting connections that will help them achieve their business goals.</p>
          <p>Join the Elite Entrepreneur's Club today and experience the power of <span>connection, collaboration, and growth.</span> We look forward to welcoming you to our community.</p>
          <p id="tag-line">YOUR GATEWAY TO THE MOST COVETED COMMUNITY</p> 
          <Button buttonText="check your eligibility" handleClick={handleClick}/>
        </div>
        <div className="copyrights OpportunityPage-item">
          <p>© 2023 EEC | All Rights Reserved | Designed and Developed by  <a href="https://uniworldstudios.com/"  target="_blank" rel="noopener noreferrer">Uniworld Studios</a> </p>
        </div>
        {
          activeForm && <Form/> 
        }
      </div>
    );
  }
  
  export default OpportunityPage;