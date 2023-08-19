import React from "react";
import {NavLink} from "react-router-dom"
import "./Header.css"

export const Header=()=> {
    const getActiveStyle = ({ isActive }) => ({
        margin: "1rem 0",
        fontWeight: isActive ? "600" : "200",
        padding: isActive ? "1rem" : "0.5rem",
        color: isActive ? "orange" : ""
      });
 return(
    <div className="header">
       <div className="header-left">
        InternshipTask
       </div>
       <div className="header-right">
        <NavLink style={getActiveStyle} to="/">Home</NavLink>
        <NavLink style={getActiveStyle} to="/add">Add Details</NavLink>
       </div>
        </div>
 )
}