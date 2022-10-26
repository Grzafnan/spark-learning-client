import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allCourse, setAllCourses] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/courses/07')
      .then(res => res.json())
      .then(data => setAllCourses(data))
  }, [])



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

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
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
    allCourse
  }



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;