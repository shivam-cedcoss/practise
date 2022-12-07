import React from 'react';
type greet = {
    name:string,
    age?:number
}
const Comp1 = ({name,age}:greet) => {
    return (
        <div>
            Hello {name}
        </div>
    )
}
export default Comp1;