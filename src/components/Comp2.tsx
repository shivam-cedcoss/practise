import React from 'react';
type data1 = {
    name: {
        fname: string,
        lname: string
    }
}
const Comp2 = (props: data1) => {
    return (
        <>
            <div>{props.name.fname} {props.name.lname}</div>
        </>
    )
}
export default Comp2;