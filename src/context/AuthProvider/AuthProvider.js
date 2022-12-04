import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";

export const AuthContext =createContext()

const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    const [user, setuser]=useState(null)    
    const [loading, setLoading]=useState(true) 
    // creating user by email password 
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // google sign in 
    const singInGoogle = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
        // github signIn 
    const singInGithub = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const userLogIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
                setuser(currentUser)
            console.log(currentUser)
            setLoading(false)
            
        })
        return ()=>{
            unsubscribe();
        }
    }, [])
    
    const updateUserprofile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }
    // signOut function 
    const usersignOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    const authInfo ={
        createUser,
        singInGoogle,
        singInGithub,
        user,
        usersignOut,
        updateUserprofile,
        userLogIn,loading
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;