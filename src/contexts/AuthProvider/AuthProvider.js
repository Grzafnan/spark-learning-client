import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import useLocalStorage from 'use-local-storage';

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [theme, setTheme] = useLocalStorage("dark-mode", "light");


  const handelThemeSwitch = () => {
    if (theme === 'light') {
      setTheme('dark');
      setEnabled(!enabled)
    } else {
      setTheme('light');
      setEnabled(!enabled)
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const singIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithProvider = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const updateProfileName = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }

  const verifyEmail = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser)
  }

  const resetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  }, [])



  const authInfo = {
    createUser,
    user,
    updateProfileName,
    verifyEmail,
    logOut,
    singIn,
    signInWithProvider,
    loading,
    setLoading,
    resetPassword,
    enabled,
    // setEnabled,
    handelThemeSwitch
  }



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;