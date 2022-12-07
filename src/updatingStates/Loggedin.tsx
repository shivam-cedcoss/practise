import React, { useState } from 'react';
type authuser={
    name:string,
    email:string
}
const Loggedin = () => {
    const [user,setUser] = useState<authuser | null>(null);
    const loggedin=()=>{
        setUser({name:"Akash",email:"akash@gmail.com"})
    }
    const loggedout=()=>{
        setUser(null)
    }
  return (
    <h1>
        <button onClick={loggedin}>Logged-In</button>
        <button onClick={loggedout}>Logout</button>
        <div>{user?.name} {user?.email}</div>
    </h1>
  )
}
export default Loggedin;
