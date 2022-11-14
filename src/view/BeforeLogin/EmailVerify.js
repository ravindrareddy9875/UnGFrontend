
import React, { useEffect, useState } from "react";
import "../../Style/Profile.css";


export default function EmailVerify() {




  return (
    <div>
      <div>
      <p className="Username">Hi , UserName please verify email  to access the content</p>
      <p className="Logout">Logout</p>

      <p className="Password">Send verification link</p>
      <p className="Tip" style={{color:"#FF7070"}}>After clicking you will get a mail with link & after verifying login back . </p>
      
      </div>

    </div>

  );
}

