import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";

export const AuthContext =createContext()

const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    const [user, setuser]=useState(null)    
    // creating user by email password 
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // google sign in 
    const singInGoogle = (provider) =>{
        return signInWithPopup(auth, provider)
    }
        // github signIn 
    const singInGithub = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const userLogIn = (email,password) =>{
        
        return signInWithEmailAndPassword(auth,email,password)
     }
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
                setuser(currentUser)
            console.log(currentUser)
            
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
        
        return signOut(auth);
    }
    const authInfo ={
        createUser,
        singInGoogle,
        singInGithub,
        user,
        usersignOut,
        updateUserprofile,
        userLogIn
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