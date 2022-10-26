import React, { createContext } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    // For Google Sign In 
    const googleProvider = new GoogleAuthProvider();
    const googlelogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // For Github Sign In 
    const githubProvider = new GithubAuthProvider();
    const githublogIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const AuthData = { googlelogIn, githublogIn };
    return (
        <div>
            <AuthContext.Provider value={AuthData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;