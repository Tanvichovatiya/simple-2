import { Link } from "react-router-dom";
import React from "react";
const Head=()=>{
    return (<>
    <h1>This is Head Tag</h1>
    <Link to='/shop'>Shop</Link><br></br>
    <Link to='/about'>About</Link><br></br>
    </>)
}
export default Head;