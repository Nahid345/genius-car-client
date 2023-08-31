import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';



export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLaoding] = useState(true);


    const createUser = (email, password) => {
        setLaoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLaoding(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const googleSignIn = (auth,provider) =>{

        return signInWithPopup(auth,provider);

    }






    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLaoding(false);
        });

        return () => {
            return unsubscribe();
        }

    }, [])


    const authInfo = {

        user,
        loading,
        createUser,
        userLogin,
        googleSignIn,
        provider,
        auth,
        loading
       


    }


    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;