
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import Button from "../components/Button";



function Profile() {
    return (
      <>
        <h1>Esta es la página profile</h1>
        <nav className="link-container">
            <Link to="/" className="color">Home</Link>
            <Link to="/my_job" className="color">My Job</Link>
        </nav>
        <Button />
      </>
    );
  }
  
  export default Profile;


