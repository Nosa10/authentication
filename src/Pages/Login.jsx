import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

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
            //console.log(userCredential.accessToken);
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
    return (
        <div className="login">
            <h1>Welcome to my Image Gallery</h1>
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
        
        </div>
    )
}

export default Login