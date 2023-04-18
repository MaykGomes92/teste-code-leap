import React from "react";
import { Link } from "react-router-dom";
import { SectionHome } from "./styled";

function Index() {
 const [valueButton, setValueButton] = React.useState("");
 
 React.useEffect(() => {
  window.localStorage.setItem('userName',valueButton)
 },[valueButton])

 return (
  <SectionHome>
   <div className="containerModal">
    <div className="contentModal">
     <h1>Welcome to CodeLeap network!</h1>

     <p>Please enter your username</p>
     <input
      type="text"
      placeholder="John doe"
      value={valueButton}
      onChange={(e) => setValueButton(e.target.value)}
     />
     <Link to="/crud">
      <button
       style={
        valueButton === "" ? { background: "grey" } : { background: "#7695EC" }
       }
       disabled={valueButton === "" ? true : false}
      >
       ENTER
      </button>
     </Link>
    </div>
   </div>
  </SectionHome>
 );
}

export default Index;
