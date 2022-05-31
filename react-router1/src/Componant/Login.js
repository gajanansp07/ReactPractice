import React, { useState } from "react";

const Login = () => {

    const [data,setData] = useState({
        uname: "",
        pwd: ""
      });

    const handleChange = (e) => {
        setData({
          ...data,
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
      };
      const handleSubmit = (e) =>{
          e.preventDefault();
          console.log(data)
      };

    return (
        <div style={{align:"center"}}>
            <div>User Id : <input type={"text"} name={"uname"} id={"uname"} onChange={handleChange} /> </div>
            <div>Password : <input type={"password"} name={"pwd"} id={"pwd"} onChange={handleChange} /> </div>
            <div><input type={"button"} value={"Login"} onClick={handleSubmit} /></div>
        </div>
    );
}
export default Login;