// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../components/Button";
import "../App.css"


function Home(){
    return (
        <>
            <h1>Esta es la página home</h1>
            <nav className="link-container">
                <Link to="/my_job" className="color">My Job</Link>
                <Link to="/profile" className="color">Profile</Link>
            </nav>
            <Button />
        </>
    )
 }
 export default Home