import React from 'react';
import {Link} from 'react-router-dom';
// import { url } from 'inspector';
import Background from "./images/turquoise.jpg"
import backgroundImage from "./images/woodenBrown.jpeg"
import backgroundImageBuilders from "./images/budgetBuilders.png"

const containerFluidStyle = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    // height: "100%",
    backgroundImage: "url(" + Background + ")"
};
const containerStyle = {
    backgroundImage: "url(" + backgroundImage + ")",
    height: "70%",
    width: "70%",
    marginLeft: "180px",
    position: "absolute",
    bottom: "5px"
};
  const budgetBuilders = {
    backgroundImage: "url(" + backgroundImageBuilders + ")",
    height: "70%",
    width: "55%",
    marginTop: "60px",
    marginLeft: "30px",
    float: "left"
};
const budgetIntro = {
    width: "40%",
    height: "60%",
    float: "right",
    paddingTop: "60px",
    paddingLeft: "20px",
    paddingRight: "20px"

};
const h3Style = {
    color: "#D3D3D3",
    // fontFamily: "Anke Sans"
};
const startedButton = {
    height: "40px",
    width: "200px"
};
const h4Style = {
    // fontWeight: "bold",
    fontSize: "20px",
    cursor: "pointer",
    paddingTop: "7px"
}

  
const LandingPage = () => {
    return(
        <div className = "container-fluid" style={containerFluidStyle}>
            <div className = "container-style" style={containerStyle}>
                <div className = "budgetBuilders" style={budgetBuilders}></div>
                <div className = "budgetIntro" style={budgetIntro}>
                    <h3 style = {h3Style}>Welcome to the first step of maintaining your Budget. 
                        This Application requires for user to create an Login Account in oreder to use it.
                        Please click Get Started button so you can create your personal account.
                    </h3>
                    <div className = 'row justify-content-center' id = "get-started">
                        <Link to='/register'><button className = "startedButton" style = {startedButton}><h4 style = {h4Style}>Let's Get Started</h4></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;


