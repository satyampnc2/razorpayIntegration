import React from 'react'

const SignUpCompleted = (props) => {
    const onSubmit = e => {
        e.preventDefault();
        props.history.push("/login");
    }
    return (
        <div className="center">
            <div className="text-primary lead"><u><strong>Account sign up completed</strong></u></div>
            <button onClick={onSubmit} className="btn btn-primary">Sign In</button>
        </div>
    )
}

export default SignUpCompleted
