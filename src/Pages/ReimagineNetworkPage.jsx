import "./ReimagineNetworkPage.css";
import PageTemplate from "../Components/PageTemplate";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ReimagineNetworkPage=()=> {
  const LeadersGrowPageRef = useRef(null);

  const scrollToLeadersGrowPage = () => {
    // console.alert("works")
    LeadersGrowPageRef.current.scrollIntoView({ behavior: 'instant' });
  };
  
  return (
    <div className="ReimagineNetworkPage">
      {/* <Link to="LeadersGrow"></Link> */}
      <Logo />
      <PageTemplate
        pageTemplateHeading="reimagine your network"
        pageTemplatePara="Welcome to the Elite Entrepreneur's Club, the premier peer network for high-performing leaders who are committed to achieving success and making a significant
          impact in the world. Our network is composed of carefully selected members from a diverse range of industries who share a passion for innovation, collaboration, and
          growth."
        buttonText="know more"
        bg="bg-2"
        // link="LeadersGrow"
        handleClick={scrollToLeadersGrowPage}
      ></PageTemplate>
      <div ref={LeadersGrowPageRef} />
    </div>
  );
}

export default ReimagineNetworkPage;
