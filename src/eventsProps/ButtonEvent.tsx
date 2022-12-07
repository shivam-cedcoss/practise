import React from 'react';
const ButtonEvent = () => {
    const clickme = () => {
        console.log("button clicked")
    }
    return (
        <div>
            <button onClick={clickme}>Click</button>
        </div>
    )
}

export default ButtonEvent