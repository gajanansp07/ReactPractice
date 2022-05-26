import {Link} from "react-router-dom";
import React from "react";

const Links=()=>{
    return(
        <div>
            <Link to="/home">Home</Link> &nbsp; &nbsp;
            <Link to="/register">Register</Link>&nbsp; &nbsp;
            <Link to="/login">Login</Link>&nbsp; &nbsp;
            <Link to="/about">About-Us</Link>&nbsp; &nbsp;
            <Link to="/contact">Contact Us</Link>&nbsp; &nbsp;
        </div>
    )
}
export default Links;