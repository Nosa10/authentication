import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import {Link} from "react-router-dom"
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('')
     
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem("user", JSON.stringify(user));
            navigate('/home');
        } catch (error) {
            console.error(error);
            alert(error.code)
            switch (error.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(error.message)
                    break;
                case "auth/wrong-password":
                    setPasswordError(error.message)
                    break;
            }
            console.log(emailError)
        }
        
    };
    function handleGuest() {
        
    }
    return (
        <div className="login">
            <h1>Welcome to my Image Gallery</h1>
            <p>Use the credentials to login:</p>
            <p>Email: user@example.com, Password: 1Password</p>
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="email"> Enter your Email:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    /> <br />
                    <label htmlFor="password"> Enter your Password:</label> <br />
                    <input
                    id="password"
                    type="password"
                    placeholder="Enter your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login-button">Login</button>
                    
                    {/* <div  style={{color: "red"}}>{Error ? <p>Invalid credentials</p>: <p></p>}</div> */}
                    
            </form>
            <p style={{textAlign:'center'}}>or</p>
            <p style={{textAlign:'center'}}>---login as a guest---</p>
            <Link type="submit" className="login-button" to='/homeguest' style={{textDecoration: 'none', width: '30%', textAlign:'center',
        backgroundColor: 'black',color: 'white'}}>Login as guest</Link>
        
        </div>
    )
}

export default Login