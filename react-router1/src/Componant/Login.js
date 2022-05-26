import React from "react";

const Login=()=>{
    return(
        <>
        <div>User Id : <input type={"text"} name={"uname"} id={"uname"} /> </div>
        <div>Password : <input type={"password"} name={"uname"} id={"uname"} /> </div>
        <div><input type={"button"} value={"Login"} /></div>
        </>
    );
}
export default Login;