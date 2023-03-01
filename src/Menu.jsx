import React from "react";

import AmazonPrimeLogo from "./logos/AmazonPrimeLogo.svg";
import JioTvIcon from "./logos/JioTvIcon.svg"
import VootLogo from "./logos/VootLogo.svg"
import zee5Logo from "./logos/Zee5Logo.svg"
import Netflixlogo from "./logos/Netflixlogo.svg"
import './menu.css'
function Menu(props)
{
    return  (   <>
                <div className="mainContainer">
                    <div className="container">
                    
                    <div className="option">
                        <div className="logoContainer">
                            <img src={Netflixlogo} alt="" />
                        </div>
                        <div className="nameContainer">
                            <div className="name">
                            Netflix
                            </div>
                        </div>
                    </div>
                    
                    <div className="option">
                        <div className="logoContainer">
                            <img src={AmazonPrimeLogo} alt="" />
                        </div>
                        <div className="nameContainer">
                            <div className="name">
                              Amazon Prime
                            </div>
                        </div>
                    </div>
                    
                    <div className="option">
                        <div className="logoContainer">
                            <img src={VootLogo} alt="" />
                        </div>
                        <div className="nameContainer">
                            <div className="name">
                              Voot
                            </div>
                        </div>
                    </div>
                    
                    <div className="option">
                        <div className="logoContainer">
                            <img src={zee5Logo} alt="" />
                        </div>
                        <div className="nameContainer">
                            <div className="name">
                              Zee5
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="option">
                        <div className="logoContainer">
                            <img src={JioTvIcon} alt="" />
                        </div>
                        <div className="nameContainer">
                            <div className="name">
                             JioTV
                            </div>
                        </div>
                    </div>
                    </div>

                </div>

                </>
            )
}


export default Menu;