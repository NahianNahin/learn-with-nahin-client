import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import toast from 'react-hot-toast';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});

    // For Google Sign In 
    const googleProvider = new GoogleAuthProvider();
    const googlelogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // For Github Sign In 
    const githubProvider = new GithubAuthProvider();
    const githublogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    // For Github Sign In 
    const facebookProvider = new FacebookAuthProvider();
    const facebooklogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }
    // For Email Password User Create 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // For Email Password User login 
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user profile 
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }
    // email varification
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }
    // For Logout 
    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            console.log('Sign-out successful.');
            toast.success("Log-out successful.")
        }).catch((error) => {
            console.log(error);
        });
    }

    // For Manage update user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified || currentUser.email === null) {
                setUser(currentUser);
            }

            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])



    const AuthData = {
        user,
        setUser,
        loading,
        setLoading,
        googlelogIn,
        githublogIn,
        facebooklogIn,
        createUser,
        login,
        updateUserProfile,
        emailVerification,
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