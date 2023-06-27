import './HomePage.css'
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
    <Link to="FullPageComponent">
      <div className="HomePage">
        <div className="overlay">
          <video autoplay="" muted="" loop="" id="myVideo" poster="https://eec.world/assets/images/video-thumbnail.jpg">
            <source src="https://eec.world/assets/videos/EEC.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="homePageHeading HomePage-item">
            <h1>the world's most prestigious leader's club</h1>
        </div>
        <div className="homePagePara HomePage-item">
            <p>for elite entrepreneur</p>
        </div>
        <div className="exploreButton HomePage-item">
            <Button buttonText='explore' link="FullPageComponent"/>
        </div>
      </div>
    </Link> 
    );
  }
  
  export default HomePage;
