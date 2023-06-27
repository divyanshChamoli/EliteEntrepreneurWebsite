import "./LonelyPage.css";
import Button from "../Components/Button";
import Form from "../Components/Form";
import { useState } from "react";

function LonelyPage() {

    const [activeForm, setActiveForm]= useState(false);

    const handleClick=()=>{
      activeForm ? setActiveForm(false) : setActiveForm(true)
    }
  
  return (
    <div className="LonelyPage">
      <a name="LonelyPage"></a>
      <div className="LonelyPage-item item-1">
        <div className="lonelyPageContent">
          <h2 lonelypagecontent-item>It's Lonely At The Top</h2>
          <p lonelypagecontent-item>
            <span id="p-span1">But you don't have to walk alone.</span> <span id="p-span2">Let us all walk together....walk further....</span>

          </p>
          <p lonelypagecontent-item>
            As a member of the Elite Entrepreneur's Club, you will have access
            to a wide range of benefits and resources, including:
          </p>
          <ul lonelypagecontent-item>
            <li><span>Networking Opportunities:</span> Connect with other elite entrepreneurs from a variety of industries and backgrounds. Our members come from diverse industries, including technology, finance, healthcare, education, manufacturing, exports and more.</li>
            <li><span>Mentorship:</span> Access to experienced mentors who can provide guidance and support as you grow your business.</li>
            <li><span>Education:</span> Our members have access to exclusive educational resources, including webinars, workshops, and conferences.</li>
            <li><span>Investment Opportunities:</span> Our network provides members with access to investment opportunities and venture capital firms.</li>
            <li>A host of membership privileges including access to some of the best member clubs in the world</li>
          </ul>
          <Button className="lonelypagecontent-item" buttonText="know more about member's privileges" handleClick={handleClick}/>
        </div>
      </div>
      <div className="LonelyPage-item item-2">
        <img src="https://eec.world/assets/images/journey-section-img.jpg" alt="Group" />
      </div>
      {
        activeForm && <Form/> 
      }
    </div>
  );
}

export default LonelyPage;
