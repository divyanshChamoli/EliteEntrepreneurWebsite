import "./Form.css";

function Form() {

  return (
    <div className="Form">
          <div className="crossIcon">
            <img src="" alt="" />
          </div>
          <div className="formContent">
            <h3>please fill your details</h3>
            <form action="">
              <div className="inputs">
                <input type="text" value="your name" />
                <input type="text" value="your email" />
                <input type="text" value="your phone" />
                <input type="submit" value="submit" />
              </div>
            </form>
          </div>
    </div>
  );
}

export default Form;
// function Form(props) {

//   return (
//     <div className="Form">
//       {props.activeForm && (
//         <>
//           <div className="crossIcon">
//             <img src="" alt="" />
//           </div>
//           <div className="formContent">
//             <h3>please fill your details</h3>
//             <form action="">
//               <div className="inputs">
//                 <input type="text" value="your name" />
//                 <input type="text" value="your email" />
//                 <input type="text" value="your phone" />
//                 <input type="submit" value="submit" />
//               </div>
//             </form>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

