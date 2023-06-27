import './QualityRelationsPage.css'
import PageTemplate from '../Components/PageTemplate';
import { useRef } from 'react';
function QualityRelationsPage() {
  
  const LonelyPageRef = useRef(null);

  const scrollToLonelyPage = () => {
    LonelyPageRef.current.scrollIntoView({ behavior: 'instant' });
  };
  
    return (
      <div className="QualityRelationsPage">
          <PageTemplate
            pageTemplateHeading="experience the power of quality relations"
            pageTemplatePara="At the Elite Entrepreneur's Club, we believe that success is about more than just financial gain. We are committed to helping our members create businesses that make
            a positive impact in their communities and in the world. We believe in using business as a force for good, and we encourage our members to think creatively and
            collaboratively about how they can make a difference."
            buttonText="know more"
            // linkTo="/#journeySec"
            bg="bg-1"
            link="#LonelyPage"
            handleClick={scrollToLonelyPage}
          />
          <div ref={LonelyPageRef} />
      </div>
    );
  }
  
  export default QualityRelationsPage;