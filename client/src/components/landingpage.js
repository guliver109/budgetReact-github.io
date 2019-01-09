import React from "react";
import {Link} from "react-router-dom";


const Landingpage = () => {
    return (
        <div className = "container-fluid" style = {{backgroundImage: `url(require("../images/turquoise.jpg"))`}}>
            <div className = "row justify-content-center">
                <div className = "Budget">Budget!</div>
            </div>
            <div className = "row jusrify-content-center">
                <div className = "col">
                    <p className = "landin-page-text">Code Club is created to help you learn or improve your web development <br/>
                    skills while giving you a chance to practice your own coding abilities <br/>
                    on algoritms or learn theory with help of flash cards!
                    </p>
                </div>
            </div>

            <div className = "row justify-content-center" id = "get-started">
                <Link to = "/register"><button>Let's Get Started</button></Link>
            </div>
        </div>
         
    )
}
export default Landingpage;