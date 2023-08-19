import React from 'react'
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./Add.css"
import db from "../firebase"
import { toast } from "react-toastify"

const initialState = {
    name: "",
    email: "",
    designation: ""
}
const Add = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({})
    const {name,email,designation}=state;

    const navigate= useNavigate()
    const handleSubmit = (e) => {
       e.preventDefault();
       if(!name||!email||!designation){
        toast.error('please provide value in each input field')
       }else {
        db.child("details").push(state,(error)=>{
            if(error){
                toast.error(error);
            }else{
                toast.success("details added in the table successfully")
            }
        });
        setTimeout(()=>
            navigate("/"),5000
        )
       }
    }
    const handleChange = (e) => {
        const {name,value}=e.target
        setState({...state,[name]:value})
    }
    
    return (
        <div style={{ marginTop: "1rem" }}>

            <form class="form" onSubmit={
                handleSubmit}>
                <label className="label">Name</label>
                <input type="text" name='name' placeholder="your name.... " className="input" value={name} onChange={(e)=>handleChange(e)} />

                <label className="label" >Email</label>
                <input type="email" name='email' placeholder="your email " className="input" value={email} onChange={(e)=>handleChange(e)}/>

                <label className="label" >Designatin</label>
                <input type="text" name='designation' placeholder="your Designation" className="input" value={designation} onChange={(e)=>handleChange(e)} />

                <input class='submit' type="submit" value='submit'/>
            </form>




        </div>
    )
}

export default Add