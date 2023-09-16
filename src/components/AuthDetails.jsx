import { useEffect, useState } from "react";
import React  from "react";
import { Auth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const AuthDetails = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } 
        })
    }, [])
    return (
        <h1>AuthDetails</h1>
    )
}
export default AuthDetails