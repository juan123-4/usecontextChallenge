
import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../components/Button";
import "../App.css"


function MyJob(){
    return (
        <>
            <h1>Esta es la página MyJob</h1>
            <nav className="link-container">
                <Link to="/" className="color">Home</Link>
                <Link to="/profile" className="color">Profile</Link>
            </nav>
            <Button />
        </>
    )
 }
 export default MyJob