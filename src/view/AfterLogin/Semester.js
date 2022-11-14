import React, { useEffect, useState } from "react";
import "../../Style/Semester.css";
import Subject from "./Subject";
import { Link } from "react-router-dom";

export default function Semester({number,name}) {
  
  
   

 




  return (
    <div style={{marginLeft:"100px",marginTop:"10px"}}>
           <p style={{color:"#8685EF",fontWeight:"bold",fontSize:"20px",paddingLeft:"20px"}}>{number} Semester</p>
            <div style={{display:'flex',flexDirection:"row",}}>
               
           
            {
                name.map((e)=>{
                    return(
                      <div id="SubjectBox">
                        <div className="SubjectBox" >
     
                       
                          <Link 
                            to="/Subject" 
                            state={{name:e,semNumber:number}}
                            
                           style={{ textDecoration: "none" }}>
                          <p style={{color:"white",textAlign:"center",paddingTop:"50px",fontSize:"20px",fontWeight:"bold"}}
                         >{e}</p>
                           </Link>
                   
                      </div>
                      </div>
                    )
                })
            }
             </div>
          
    </div>
  );
}
