import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{
    return <>
    <Link to='/head'>Head</Link><br></br>
    <Link to='/shop'>Shop</Link><br></br>
    <Link to='/about'>About</Link><br></br>
    </>
}
export default Home;