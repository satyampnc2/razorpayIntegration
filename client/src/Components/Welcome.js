import React from 'react'

const Welcome = (props) => {
    const onSubmit = e => {
        e.preventDefault();
        props.history.push("/payment");
    }
    return (
        <div className="center">
            <div className="lead text-primary"><u>Welcome to Level App</u></div>
            <button onClick = {onSubmit} className="btn btn-primary">Pay</button>
        </div>
    )
}

export default Welcome
