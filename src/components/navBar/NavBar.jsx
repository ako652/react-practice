import React from "react";
import logo from  "../../images/logo.png"

export default function NavBar() {
  return <div className="nav">
                
              <div>
                <img src={logo} alt="logo" width='100px' />

              </div>
              <ul>
                <li>home</li>
                <li>products</li>
                <li>favorite</li>
                <li>carts</li>
              </ul>
    
         </div>;
}
