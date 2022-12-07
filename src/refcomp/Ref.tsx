import React, { useEffect } from 'react';
import { useRef } from 'react';
const Ref = () => {
    const inputRef=useRef<HTMLInputElement >(null);
    useEffect(()=>{
        console.log(inputRef.current)
        inputRef.current?.focus()
    },[])
  return (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
  )
}
export default Ref
