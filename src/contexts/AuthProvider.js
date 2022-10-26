import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});

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
    // For Logout 
    const logout = () => {
        signOut(auth).then(() => {
            console.log('Sign-out successful.');
        }).catch((error) => {
            console.log(error);
        });
    }

    // For Manage update user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])



    const AuthData = {
        user,
        googlelogIn,
        githublogIn,
        logout,
    };
    return (
        <div>
            <AuthContext.Provider value={AuthData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;