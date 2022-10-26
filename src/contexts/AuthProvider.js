import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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
    // For Email Password User Create 
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    // For Email Password User login 
    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
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
        createUser,
        login,
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