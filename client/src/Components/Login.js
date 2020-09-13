import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Register = (props) => {
    const [user,setUser] = useState({
        email:'',
        password:''
    });
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        props.history.push("/welcome");
    }
    return (
        <div className="form-container">
            <form  onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={user.email} name="email" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={user.password} onChange={onChange}/>
                </div>
                <input type="submit" value="Login" className="btn btn-primary"/>
                <p style={{float:"right",marginTop:"1rem"}}><Link to="/">Do not have an account? Sign up? </Link></p>
            </form>
        </div>
    )
}

export default Register
