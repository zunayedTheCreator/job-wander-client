import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
import axios from 'axios';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const user1 = localStorage.getItem('signedUser');
    const user2 = localStorage.getItem('loggedUser');
    const signedUser = JSON.parse(user1);
    const loggedUser = JSON.parse(user2);
    const email1 = signedUser?.email;
    const email2 = loggedUser?.providerData[0]?.email;
    const currentUser = user1 || user2;
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    
    const githubLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            const currentEmail = { email: email1 || email2 };

            if (currentUser) {
                axios.post( 'https://job-wander-server.vercel.app/jwt', currentEmail, {withCredentials: true})
                .then(res => {
                    console.log('token', res.data);
                })
            }
            else{
                axios.post('https://job-wander-server.vercel.app/logout', currentEmail, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            return unSubscribe();
        }
    }, [currentUser, email1, email2])

    const authInfo = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;