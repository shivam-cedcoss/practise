import React from 'react'
import { loginDetails } from '../types/Logintypes';
const Login = (props:loginDetails) => {
  return (
    <div>{props.data.email} {props.data.password}</div>
  )
}

export default Login