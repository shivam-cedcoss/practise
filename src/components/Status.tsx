import React from 'react';
type checkStatus={
    status:'loading'| 'success'
}
const Status = (props:checkStatus) => {
    let message;
    if(props.status === 'loading'){
        message = 'Loading...';
    }
    else if(props.status === "success"){
        message = 'Data Fetched successfully';
    }
    else {
        message = 'Error';
    }
  return (
    <>
    <div>{message}</div>
    </>
    )
}
export default Status;