import React, {useState} from 'react';
import './hamburger.css';

let buttonStatus;

const Hamburger=(props)=>
{
    // const [flag, setFlag]= useState(false);

    // const hamburgerClick = () => 
    // {
    //     setFlag(!flag);
        
    // }


    return (
        <>
        {/* <div className="menu-btn" onClick={hamburgerClick}>
            <div className={`${flag===false ? "ham_menu-btn_burger" : "cross_menu-btn_burger" }`}>

            </div>
        </div> */}

        <div className="menu-btn">
            <div className={props.dynaClassName}>

            </div>
        </div>

        

        </>
            );
};


export default Hamburger;
export{buttonStatus}