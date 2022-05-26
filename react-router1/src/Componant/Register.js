import React,{useState} from "react";

const Registraion=()=>{
const[data, setData]=useState({
    name1:'',
    pws:'',
    pws1:'',
    email:'',
    num:''
});

const{name1,pws,pws1,email,num}=data
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");
const[passworde,setPassworde]=useState("");
const[number,setNumber]=useState("");

const Change=e=>{
    setData({...data,[e.target.name]:e.target.value});
}
const Myvalidation=(e)=>{
    e.preventDefault();
    if(name1.length<=8){
        setUsername("User name must be at least 8 letters");
    }
    if(pws===""){
        setPassword("Please insret valid password");
    }
    if(pws!==pws1){
setPassworde("password must be same");
    }
    if(num.length!==10){
        setNumber("number must be 10 digits")
    }
}


    return(<>
    <div><center><h1 style={{"color":"green"}}>Welcome to new user</h1>
        <form onSubmit={Myvalidation}>
   Name : <input type="text" name="name1" value={name1} onChange={Change}></input>
   <p style={{"color":"red"}}>{username}</p>
   Password : <input type="password" name="pws" value={pws} onChange={Change}></input><p></p>
   <p style={{"color":"red"}}>{password}</p>
   Confirm Password  : <input type="password" name="pws1" value={pws1} onChange={Change}></input><p></p>
   <p style={{"color":"red"}}>{passworde}</p>
   Email : <input type="email" name="email" value={email} onChange={Change}></input><p></p>
   
   Mobile : <input type="text" name="num" value={num} onChange={Change}></input><p></p>
   <p style={{"color":"red"}}>{number}</p>
   <input type="submit" value="submit"></input>
        </form></center>
        </div><p></p><center><div><h1>Name :{name1}<p></p>mobile:{Number}</h1></div></center></>);
}
export default Registraion;