import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)

    const createUserByGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const createUserByEmail = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const login = (email, pass) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // setLoading(false)
        })
        return () => {
            subscriber();
        }
    }, [])

    console.log(user);


    const authInfo = {
        createUserByGoogle,
        createUserByEmail,
        updateUserProfile,
        login,
        user,
        setUser,
        logOut
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;