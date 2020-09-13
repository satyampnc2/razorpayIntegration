import React,{useState} from 'react'

const Register = (props) => {
    const [user,setUser] = useState({
        email:'',
        password:'',
        password2:''
    });
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        props.history.push("/signUpSuccess");
    }
    return (
        <div className="form-container">
            <form  onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email Address" value={user.email} name="email" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Confirm Password</label>
                    <input type="password" placeholder="Enter Password" name="password2" value={user.password2} onChange={onChange}/>
                </div>
                <div className="btnWrapper"><input type="submit" value="Sign up" className="btn btn-primary"/></div>
            </form>
        </div>
    )
}

export default Register
