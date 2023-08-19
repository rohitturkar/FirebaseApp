import React from 'react'
import {useState,useEffect} from "react"
import fireDb from "../firebase"
import {Link,NavLink} from "react-router-dom"
import { toast } from "react-toastify"
import "./Home.css"

const Home = () => {


    const handleDelete=(id)=>{
             if(window.confirm("Are you sure that you want to delete detail")){
                fireDb.child(`details/${id}`).remove((err)=>{
                    if(err){
                        toast.error(err)
                    }else{
                        toast.success("details deleted successfully")
                    }
                })
             }
    }
    const getActiveStyle = ({ isActive }) => ({
        margin: "1rem 0",
        fontWeight: isActive ? "600" : "200",
        padding: isActive ? "1rem" : "0.5rem",
        color: isActive ? "orange" : ""
      });
    const [data,setData]=useState({});
    useEffect(()=>{
        fireDb.child('details').on('value',(snapshot)=>{
            if(snapshot.val()!==null){
                setData({...snapshot.val()})
            }else{
                setData({})
            }
        })
        return ()=>{
            setData({})
        }
    },[])
  return (
    <div className="TableComponent">
       <table className="styleTable">
        <thead>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Designation</th>

                <th>Update/Delete</th>
                
            </tr>
        </thead>
        <tbody>
            {
                Object.keys(data).map((id,index)=>{
                    return(
                        <tr key={id}>
                            <th scope='row'>
                                {index+1}
                            </th>
                            <td>{data[id].name}</td>
                            <td>{data[id].email}</td>
                            <td>{data[id].designation}</td>
                            <td>
                                
                                    <button className="btn btnDelete" onClick={()=>handleDelete(id)}>
                                        Delete
                                        </button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
       </table>
       <div style={{display:"flex",justifyContent: "center"}}>
       <NavLink className="btnAdd" style={getActiveStyle} to="/add">Add Details</NavLink>
       </div>
    </div>
  )
}

export default Home