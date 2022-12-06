import React from 'react';
import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Status from './components/Status';

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
  return (
    <div>
      <h1>
        <Comp1 name='Abc'/>
        <Comp2 name={detail}/>
        <Comp3 namelist={nameList}/>
        <Status status="loading"/>
        <Heading>Text as children text</Heading>
        <Oscar>
          <Heading>Text as children text</Heading>
        </Oscar>
      </h1>
    </div>
  );
}

export default App;
