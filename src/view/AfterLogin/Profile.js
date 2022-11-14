import React, { useEffect, useState } from "react";
import "../../Style/Profile.css";
import NavbarAfter from "../../model/NavbarAfter";



export default function Profile() {




  return (
    <div>
      <NavbarAfter />
      <div>
      <p className="Username">Welcome <span style={{color:"#8685EF"}}>UserName</span>  😁</p>
      <p className="Logout">Logout</p>

      <p className="Password">Change password</p>
      <p className="Tip">Tip : when you click “Chnage password” button ,you will get a mail with link to change password </p>
      <p className="FeedBack">Give Feedback on our 'BETA product'</p>
      </div>

    </div>

  );
}
