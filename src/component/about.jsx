import React from "react";
import { Link } from "react-router-dom";

const About=()=>{
    return (<>
    <h1>This is About Page</h1>
    <Link to='/shop'>Shop</Link><br></br>
    <Link to='/home'>Home</Link><br></br>
    </>)
}
export default About;