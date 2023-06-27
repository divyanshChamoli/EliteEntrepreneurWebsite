import "./Button.css";
import { Link } from "react-router-dom";
import LonelyPage from "../Pages/LonelyPage";

function Button(props) {

  return (
    <div className="Button">
      {/* <Link to={props.link} component={LonelyPage}>          */}
      {/* For buttons to redirect sections Eg Reimagine network section to Leaders grow section  */}
          <button onClick={props.handleClick}>{props.buttonText}</button>
      {/* </Link> */}
    </div>
  );
}

export default Button;
