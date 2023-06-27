import "./PageTemplate.css";
import Button from "./Button";

function PageTemplate(props) {
  // const classes1='PageTemplate'+ props.className;
  // const classes2='content-container'+ props.className;
  
  return (
    <div className={`PageTemplate ${props.bg}`}>{props.children}
      <div className='content-container'>
        <h2>{props.pageTemplateHeading}</h2>
        <p>{props.pageTemplatePara}</p>
        <Button buttonText={props.buttonText} link={props.link} handleClick={props.handleClick}/>
      </div>
    </div>
  );
}

export default PageTemplate;
