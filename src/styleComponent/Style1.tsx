import React from 'react';
type stylingProps={
    style:React.CSSProperties
}
const Style1 = ({style}:stylingProps) => {
  return (
    <div style={style}>
        Styling props using typescript
    </div>
    )
}
export default Style1;