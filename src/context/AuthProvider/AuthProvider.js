import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup} from "firebase/auth";

export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singInGoogle = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const authInfo ={
        createUser,
        singInGoogle
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