import React,{useState} from "react";
import "./TopBar.css";
import Menu from "./Menu";
import Hamburger,{buttonStatus} from './Hamburger';


function TopBar()
{

  const [flag, setFlag]= useState(false);

    const hamburgerClick = () => 
    {
        setFlag(!flag);
        
    }




  return(
    <>    
    <div className="bar">
      <div className="butt"  onClick={hamburgerClick}>
      {/* <Hamburger dynaClassName={`${flag===false ? "ham_menu-btn_burger" : "cross_menu-btn_burger" }`}/> */}
      </div>
        TVMAZE Webseries and Shows
    </div>

    <div className= {`${flag===false ? "hide" : "menuContainer" }`}>
                <Menu className="menu"></Menu>
    </div>

    </>

        );
}
export default TopBar;