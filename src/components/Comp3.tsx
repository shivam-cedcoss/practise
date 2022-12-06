import React from 'react';
type data = {
    namelist: {
        fname: string,
        lname: string
    }[]
}
const Comp3 = (props: data) => {
    console.log(props.namelist)
    return (
        <>
            {props.namelist.map((i, index) => {
                return (
                    <div key={index}>{i.fname} {i.lname}</div>
                )
            })}
        </>
    )
}
export default Comp3;