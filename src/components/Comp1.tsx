import React from 'react';
type greet = {
    name:string,
    age?:number
}
const Comp1 = (props:greet) => {
    return (
        <div>
            Hello {props.name}
        </div>
    )
}
export default Comp1;