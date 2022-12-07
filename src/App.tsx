import React from 'react';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import Heading from './components/Heading';
import Login from './components/Login';
import Oscar from './components/Oscar';
import Status from './components/Status';
import ButtonEvent from './eventsProps/ButtonEvent';
import Reducer1 from './Reducercomp/Reducer1';
import MutableRef from './refcomp/MutableRef';
import Ref from './refcomp/Ref';
import Style1 from './styleComponent/Style1';
import Loggedin from './updatingStates/Loggedin';

function App() {
  const detail = {
    fname: "abc",
    lname: "xyz"
  }
  const nameList = [
    {
      fname: "abc",
      lname: "xyz"
    },
    {
      fname:"pqr",
      lname:"pqr"
    },
    {
      fname:"uvw",
      lname:"uvw"
    }
  ]
  const loginData={
    email:"akash@gmail.com",
    password:"akash12345"
  }
  return (
    <div>
      <Comp1 name='Abc'/>
      <Comp2 name={detail}/>
      <Comp3 namelist={nameList}/>
      <Status status="loading"/>
      <Heading>Text as children text</Heading>
      <Oscar>
        <Heading>Text as children text</Heading>
      </Oscar>
      <Style1 style={{border:"1px solid red",color:"green",fontSize:"30px"}}/>
      <Login data={loginData}/>
      <Loggedin/>
      <Reducer1/>
      <ButtonEvent/>
      <Ref/>
      <MutableRef/>
    </div>
  );
}

export default App;
