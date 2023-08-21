import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

 function Home() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
   
    return (

        <>
         <h1>Username: {userInfo.name}</h1>
        <Link to="/create">Create</Link>
        <Link to="/login">Login</Link>
        </>
       
    )
}

export default Home