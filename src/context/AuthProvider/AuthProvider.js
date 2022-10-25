import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, signOut} from "firebase/auth";

export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    
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
    // signOut function 
    const usersignOut = () =>{
        
        return signOut(auth);
    }
    const authInfo ={
        createUser,
        singInGoogle,
        singInGithub,
        usersignOut
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